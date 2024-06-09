import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistoComponent } from './registo/registo.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { ContatoComponent } from './contato/contato.component';
import { MAzulejoComponent } from './mazulejo/mazulejo.component';
import { McalousteComponent } from './mcalouste/mcalouste.component';
import { MCocheComponent } from './mcoche/mcoche.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registo', component: RegistoComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'sobre-nos', component: SobrenosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'mazulejo', component: MAzulejoComponent },
  { path: 'mcoche', component: MCocheComponent },
  { path: 'mcalouste', component: McalousteComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
