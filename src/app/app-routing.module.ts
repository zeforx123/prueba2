import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'cotizador', component: CotizadorComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
