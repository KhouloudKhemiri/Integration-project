import { Component, OnInit } from '@angular/core';
import { Entreprise } from 'src/app/Models/entreprise';
import { EntreService } from 'src/app/Services/Entre/entre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.css']
})
export class ListEntrepriseComponent implements OnInit{
  lesEntreprises!: Entreprise[];
  

  constructor(private ents:EntreService){}
  ngOnInit(): void {
    this.getall();
  }
  getall(){
    this.ents.getAll().subscribe(
      data =>{this.lesEntreprises=data;
      console.log("test",data)},
      error =>{alert("Impossible d'afficher");}
      
    );
      }
      delete(id:any){

        // Custom Buttons
    
        Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this imaginary file!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it',
        }).then((result) => {
    
          if (result.isConfirmed) {
    
            console.log('Clicked Yes, File deleted!');
            this.ents.Delete(id).subscribe(
              reultat=>{console.log("supprimer avec succer");
              this.getall();}
            )
    
          } else if (result.isDismissed) {
    
            console.log('Clicked No, File is safe!');
    
          }
        })
    
    }
      
  
 

  

}
