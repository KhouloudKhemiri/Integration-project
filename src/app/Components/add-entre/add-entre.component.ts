import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/Models/entreprise';
import { EntreService } from 'src/app/Services/Entre/entre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-entre',
  templateUrl: './add-entre.component.html',
  styleUrls: ['./add-entre.component.css']
})
export class AddEntreComponent implements OnInit {
  constructor(private ents :EntreService,private router:Router){}
  ngOnInit(): void { }
  addEntreprise(f:NgForm){
    let id=f.value['id'];
    let nom=f.value['nom'];
    let matricule=f.value['matricule'];
    let email=f.value['email'];
    let password=f.value['password'];
    
    let role=f.value['role'];
    let e:Entreprise;
    e=new Entreprise(id,nom,matricule,email,password,role);
    this.ents.AddEn(e).subscribe(resultat=>{console.log(resultat);
      Swal.fire('','Ajouter avec succès','success');
    this.router.navigateByUrl("home/Entreprise")})
  }

}
