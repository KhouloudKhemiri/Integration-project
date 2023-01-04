export class Entreprise {
   public id :number;
public  name:String;
public matricule:String ;
public email:String ;
public password:String ;
public  role:String ; 
constructor(id:number,name:String,matricule:String,email:String,password:String,role:String){
    this.id=id;
    this.name=name;
    this.matricule=matricule;
    this.email=email;
    this.password=password;
    this.role=role;
}
}
