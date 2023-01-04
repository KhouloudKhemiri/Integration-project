import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UtilisateurService } from 'src/app/Services/utilisateur/utilisateur.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formGroup:FormGroup;
 constructor(private utser:UtilisateurService ,private form:FormBuilder, private router:Router){

 }
  ngOnInit(): void {
    this.formGroup=this.form.group({firstName:['', Validators.required],
    lastName:['', Validators.required],
    email:['', Validators.required],password:['', Validators.required],
    age:['', Validators.required],
     role:['', Validators.required]
  })
    
  }
  submitted:boolean;
  addUser(){

    /*let id=f.value['id'];
    let nom=f.value['nom'];
    let prenom=f.value['prenom'];
    let email=f.value['email'];
    let password=f.value['password'];
    let age=f.value['age'];
    let role=f.value['role'];
    let u:Users;
    u=new Users (id,nom,prenom,age,email,password,role);
    console.log("test",u),*/
    if (this.formGroup.invalid) {
      this.submitted=true;
      return;
    }
    else{
    this.utser.addUser(this.formGroup.value).subscribe(
       data =>{alert("ajouter avec succée"); 
       this.router.navigateByUrl("/home/user");},
       error =>{("Echec d'ajout");}
     );
   }
  }
}
