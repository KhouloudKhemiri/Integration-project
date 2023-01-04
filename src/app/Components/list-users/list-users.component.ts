import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Models/users';
import { UtilisateurService } from 'src/app/Services/utilisateur/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  
  lesUtilisateurs!: Users[];

  constructor(private utis: UtilisateurService){}
  ngOnInit(): void {
    this.getall();
  }
    getall(){
    this.utis.getAll().subscribe(
      data =>{this.lesUtilisateurs=data;
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
        this.utis.Delete(id).subscribe(
          reultat=>{console.log("supprimer avec succer");
          this.getall();}
        )

      } else if (result.isDismissed) {

        console.log('Clicked No, File is safe!');

      }
    })

}
  

}
