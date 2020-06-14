import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Especialidad } from '../clases/especialidad';
import { AngularFireStorage } from '@angular/fire/storage';

import { map } from 'rxjs/operators';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as XLSX from 'xlsx'
import * as FileSaver from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private db: AngularFireStorage) { }

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

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}
