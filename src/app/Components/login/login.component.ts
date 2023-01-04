import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/Models/entreprise';
import { Users } from 'src/app/Models/users';
import { EntreService } from 'src/app/Services/Entre/entre.service';
import { LoginService } from 'src/app/Services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private ls:LoginService, private ES :EntreService, private router: Router ){}
  ngOnInit(): void {}
  UserLogin(f:NgForm){
    console.log("test");
    let id=f.value['id'] ; 
    let nom=f.value[''];
    let prenom=f.value[''];
    let age=f.value[''];
    let role=f.value[''];
   
    let mail=f.value['mail'];
    let psw=f.value['passWord'];
    let u:Users;
    u= new Users(id,nom,prenom,age,mail,psw,role);
    let e:Entreprise;
    e=new Entreprise( id,prenom,age,mail,psw,nom);
    
    this.ls.LoginUser(u).subscribe(
      resultat=>{console.log("testtttttttt====",resultat);
        if(resultat!= null){
        Swal.fire('', 'Login Valide', 'success');
      localStorage.setItem("acteur", JSON.stringify(resultat));
      this.router.navigateByUrl("/home/acceuil");}
      
    },
  
    );
    
    this.ES.LoginEntr(e).subscribe(
      resultat=>{console.log(resultat);
      Swal.fire('', 'Login Valide', 'success');
      localStorage.setItem("acteur", JSON.stringify(resultat));
      this.router.navigateByUrl("/home/acceuil");},

      (error: any)=>{ alert("Invalide")}
  
    );
   
   
  }
  

}
