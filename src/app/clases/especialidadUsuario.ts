

export class especialidadUsuario{

    public email:string;
    public especialidad:string;
    public nombre: string;
    public apellido: string;
    constructor( email:string, especialidad:string,nombre: string,apellido: string ){
        this.email = email;
        this.especialidad = especialidad;
        this.nombre = nombre;
        this.apellido = apellido;
    }

}