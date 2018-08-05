import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Servicio agregado
import { ModserverService } from './modserver.service';
import { ConnectService } from './services/connect.service';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { ServicioComponent } from './servicio/servicio.component';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ErrorComponent } from './error/error.component';
import { FirebasePageComponent } from './firebase-page/firebase-page.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegistrarComponent } from './registrar/registrar.component';
import { ReadUsersComponent } from './read-users/read-users.component';

const routes: Routes = [
  { path: 'servicio', component: ServicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'contactenos', component: ContactenosComponent},
  { path: 'equipo/:id', component: EquipoComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'firebase', component: FirebasePageComponent},
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', component: ErrorComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent, 
    CabeceraComponent, 
    FooterComponent, 
    ServicioComponent, 
    InicioComponent, 
    PeliculasComponent, 
    ContactenosComponent, 
    NosotrosComponent, 
    EquipoComponent, 
    ErrorComponent, 
    FirebasePageComponent, RegistrarComponent, ReadUsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    ModserverService,
    ConnectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
