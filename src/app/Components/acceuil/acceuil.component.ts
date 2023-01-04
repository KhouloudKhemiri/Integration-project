import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from 'src/app/Models/publication';
import { PublicationService } from 'src/app/Services/publication/publication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {

  publication:any;
  local: any;
  utilisateur: any;
  role: any;
  constructor(private publicationService: PublicationService, private router:Router) { }

  ngOnInit(): void {
    
    this.getValide();
    this.local=localStorage.getItem("acteur");
    this.utilisateur=JSON.parse(this.local)
    
    this.role=this.utilisateur.role
  }
  getValide() {
    this.publicationService.getPublication().subscribe(
      resultat => {
        this.publication = resultat;
      console.log("testttt",this.publication)
      }
    )
  }

  delete(id: any) {

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
        this.publicationService.Delete(id).subscribe(
          reultat => {
            console.log("supprimer avec succer");
            this.getValide();
          }
        )

      } else if (result.isDismissed) {

        console.log('Clicked No, File is safe!');

      }
    })

  }


}
