import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Entreprise } from 'src/app/Models/entreprise';
import { Users } from 'src/app/Models/users';
import { EntreService } from 'src/app/Services/Entre/entre.service';
import { RegisterService } from 'src/app/Services/register/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  
  
  constructor(private rs:RegisterService, private ents:EntreService,private router:Router){}
  ngOnInit(): void {
    
  }

  utilisateur(){
    console.log("test1 = temchiii")
  }
  entreprise(){

    console.log("test2 = temchiii")

  }
 
  
  ajouter(f:NgForm){
    let id=f.value['id'];
let nom=f.value['nom'];
let prenom=f.value['prenom'];
let age=f.value['age'];
let mail=f.value['email'];
let psw=f.value['psw'];
let role=f.value['role'];
let matricule=f.value['mat'];

let u:Users;
let e:Entreprise;
u=new Users(id,nom,prenom,age,mail,psw,role);
e=new Entreprise(id,nom,matricule,mail,psw,role)
console.log("test",u)

if( role == 'Utilisateur'){
  this.rs.AddUser(u).subscribe(

    resultat=>{console.log(resultat);
      Swal.fire('', 'check your email', 'success');
  this.router.navigateByUrl("");},
  error=>{alert('Réviser vos donné');}

)}
else{
  this.ents.AddEn(e).subscribe(
    resultat=>{console.log(resultat);
      Swal.fire('', 'check your email', 'success');
    this.router.navigateByUrl("");},
    error=>{alert('Réviser vos donné');}
  )
  
}



  }


}
