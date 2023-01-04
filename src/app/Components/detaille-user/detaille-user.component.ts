import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/Models/users';
import { UtilisateurService } from 'src/app/Services/utilisateur/utilisateur.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-detaille-user',
  templateUrl: './detaille-user.component.html',
  styleUrls: ['./detaille-user.component.css']
})
export class DetailleUserComponent implements OnInit {
  utilisateur:Users;
  
  data: any;
  dialogRef: any;
  formGroup: FormGroup;
  id:any=this.activtedRoute.snapshot.params["id"];
  
 
  constructor(private utils:UtilisateurService,private formBuilder: FormBuilder,private activtedRoute:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.getById();
    
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required], lastName: ['', Validators.required],
      age: ['', Validators.required],       email: ['', Validators.required],
      password: ['', Validators.required],  role:['',Validators.required],
      telephone: ['', Validators.required],
    })
    
  }
  getById(){
    this.utils.getById(this.id).subscribe(
      resultat=>{
        this.utilisateur=resultat,
        console.log("test=",this.utilisateur)
    this.patchValue(this.utilisateur)})
  }

  patchValue(utilisateur) {
    this.formGroup.patchValue({
    
      firstName: utilisateur.firstName,
      lastName: utilisateur.lastName,
      email: utilisateur.email,
      age: utilisateur.age,
      telephone: utilisateur.telephone,
      password: utilisateur.password,
      
    })
    
    //this.scrollTo("card-title");
    



  }
  update(){
    this.utils.Update(this.id,this.formGroup.value).subscribe(
      resultat=>{
        console.log(resultat);
        this.router.navigateByUrl("home");
        
        this.showSuccessAlert();

      }
    )

  }



  showSuccessAlert() {
    Swal.fire('Modifié avec succès', '', 'success')
  }



 /* verifier(f : NgForm){
    let id = this.data.id ;
    let nom = f.value["nom"];
    let prenom =f.value["prenom"];
    let age =f.value["age"];
    let email =f.value["email"];
    let password =f.value["password"];
    let role =f.value["role"];

    let user = new Users(id ,nom  , prenom , age , email ,password,role) ;
    let x = {this:id, ...user} ;
    this.utils.Update(x).subscribe(
      ()=>
      {
        this.dialogRef.close();
      },
      error => {

        console.log(error);
    }

      )

  }*/
 
}
