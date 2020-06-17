import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Especialidad } from '../clases/especialidad';
import { AngularFireStorage } from '@angular/fire/storage';

import { map } from 'rxjs/operators';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as XLSX from 'xlsx'
import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {
  private pdfHelper:jsPDF;

  constructor(private db: AngularFireStorage) {
    this.pdfHelper = new jsPDF();
   }

  public subirArchivo(nombreArchivo: string, datos: any,metadata:any) {
    return this.db.upload(nombreArchivo, datos, {customMetadata:metadata});
  }

  public getArchivo(nombreArchivo: string) {
        return this.db.ref(nombreArchivo).getDownloadURL();
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    
    console.log(json);
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet',worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  public exportarExcel(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }


  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  public EscribirPDF(nombre:string,elementId:string){
    var element = document.getElementById(elementId);
    console.log(element);
    html2canvas(element).then((canvas)=>{
        console.log(canvas);
        var imgData = canvas.toDataURL('image/png');

        var imgalto= canvas.height*208/canvas.width;

        this.pdfHelper.addImage(imgData,0,0,208,imgalto);
        this.GuardarPDF(nombre);
    })

}
public GuardarPDF(nombre:string){
    // Save the PDF
    this.pdfHelper.save(nombre+'.pdf');
}
  

}
