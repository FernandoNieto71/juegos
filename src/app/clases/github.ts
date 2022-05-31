export class Github{
    nombre:string;
    url: string;
    avatar:string;
    biogra: string;
    constructor(respuesta:any){
        this.nombre= respuesta['name'];
        this.avatar= respuesta['avatar_url'];
        this.biogra=respuesta['bio'];
        this.url= respuesta['url'];
    }

}