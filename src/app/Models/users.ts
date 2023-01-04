export class Users {
    public id:number;
    public firstName :String;
    public lastName :String;
    public age:number;
    public email:String;
    public password :String;
    public role :String;
   
    constructor(id:number,firstName:String,lastName:String,age: number,email:String,password:String, role:String){
      this.id=id;
      this.firstName=firstName;
      this.lastName=lastName;
      this.age=age;
      this.email=email;
      this.password=password;
      this.role=role;
   

  
  
    }
}
