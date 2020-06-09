

export class diasUsuario{

    public email:string;
    public dias:string;
   public nombre: string;
   public apellido: string;
    constructor( email:string, dias:string, nombre: string,apellido: string ){
        this.email = email;
        this.dias = dias;
        this.nombre = nombre;
        this.apellido = apellido;
    }

}