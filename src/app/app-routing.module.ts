import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './Components/acceuil/acceuil.component';
import { AddEntreComponent } from './Components/add-entre/add-entre.component';
import { AddPubliComponent } from './Components/add-publi/add-publi.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { DetaillEntComponent } from './Components/detaill-ent/detaill-ent.component';
import { DetailleUserComponent } from './Components/detaille-user/detaille-user.component';
import { GerePublComponent } from './Components/gere-publ/gere-publ.component';
import { GereUserComponent } from './Components/gere-user/gere-user.component';
import { GestionProfilsComponent } from './Components/gestion-profils/gestion-profils.component';
import { HomeComponent } from './Components/home/home.component';
import { ListEntrepriseComponent } from './Components/list-entreprise/list-entreprise.component';
import { ListUsersComponent } from './Components/list-users/list-users.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:"home",component:HomeComponent,children:[
{path:"acceuil",component:AcceuilComponent},
{path:"user",component:ListUsersComponent},
{path:"gestionuser",component:GereUserComponent},
{path:"Entreprise",component:ListEntrepriseComponent},
{path:"addus",component:AddUserComponent},
{path:"addenter",component:AddEntreComponent},
{path:"addpub",component:AddPubliComponent},
{path:"gestionpub",component:GerePublComponent},
{path:"gestiprof",component:GestionProfilsComponent},
{path:"detaillUs/:id",component:DetailleUserComponent},
{path:"detailent/:id",component:DetaillEntComponent}


  ]},
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
