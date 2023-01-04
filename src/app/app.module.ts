import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AcceuilComponent } from './Components/acceuil/acceuil.component';
import { HomeComponent } from './Components/home/home.component';
import { SidbarComponent } from './Components/sidbar/sidbar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUsersComponent } from './Components/list-users/list-users.component';
import { GereUserComponent } from './Components/gere-user/gere-user.component';
import { ListEntrepriseComponent } from './Components/list-entreprise/list-entreprise.component';
import { AddPubliComponent } from './Components/add-publi/add-publi.component';
import { GerePublComponent } from './Components/gere-publ/gere-publ.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { GestionProfilsComponent } from './Components/gestion-profils/gestion-profils.component';
import { DetailleUserComponent } from './Components/detaille-user/detaille-user.component';
import { DetaillEntComponent } from './Components/detaill-ent/detaill-ent.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AddEntreComponent } from './Components/add-entre/add-entre.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AcceuilComponent,
    HomeComponent,
    SidbarComponent,
    NavbarComponent,
    FooterComponent,
    ListUsersComponent,
    GereUserComponent,
    ListEntrepriseComponent,
    AddPubliComponent,
    GerePublComponent,
    AddUserComponent,
    GestionProfilsComponent,
    DetailleUserComponent,
    DetaillEntComponent,
    AddEntreComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    PdfViewerModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
