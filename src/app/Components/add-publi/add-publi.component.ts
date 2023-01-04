import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/Services/publication/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-publi',
  templateUrl: './add-publi.component.html',
  styleUrls: ['./add-publi.component.css']
})
export class AddPubliComponent {
  formGroup:FormGroup;
  fileToUpload: File[];
  
  constructor(  private publicationService:PublicationService, private formBuilder:FormBuilder,private router:Router ) { }
 
  id:any;
  ngOnInit(): void {
    
    this.formGroup=this.formBuilder.group({description:['',Validators.required],prix:['',Validators.required]})
    //this.id=localStorage.getItem("entreprise");
   // console.log("test = ",JSON.parse(this.id).id);
   this.id=localStorage.getItem("acteur");
   console.log("test = ",JSON.parse(this.id)[0].id);
  }
 
 
  addPub(){
    let formData =new FormData();
   
    formData.append("Description",this.formGroup.value.description);
    formData.append("file",this.fileToUpload[0]);
   
    //formData.append("file",this.fileToUpload[0]);

    

    this.publicationService.AddPublication(formData,JSON.parse(this.id)[0].id).subscribe(
      resultat=>{console.log(resultat);
        Swal.fire('','Ajouter avec succès','success');
      this.router.navigateByUrl("home/mesPublicationNonValider")}
    )
  }

  handleFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }

}
