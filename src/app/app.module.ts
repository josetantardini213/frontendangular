import { ClienteService } from './../clientes/cliente.service';
import { ClienteComponent } from './../clientes/cliente.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//estas son la rutas de la aplicacion
const routes: Routes = [
{path:'',redirectTo:'/clientes',pathMatch:'full'},
{path:'directivas',component:DirectivaComponent},
{path:'clientes',component:ClienteComponent}
];

@NgModule({
  //AQUI VAN LOS COMPONENTES
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    //aqui indexamos las rutas
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  //AQUI VAN LOS SERVICES
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
