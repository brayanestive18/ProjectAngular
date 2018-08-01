import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Servicio agregado
import { ModserverService } from './modserver.service';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { ServicioComponent } from './servicio/servicio.component';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  { path: 'servicio', component: ServicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'contactenos', component: ContactenosComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent, 
    CabeceraComponent, 
    FooterComponent, ServicioComponent, InicioComponent, PeliculasComponent, ContactenosComponent, NosotrosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ModserverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
