import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { RegistoComponent } from './registo/registo.component';
import { MAzulejoComponent } from './mazulejo/mazulejo.component';
import { MCocheComponent } from './mcoche/mcoche.component';
import { McalousteComponent } from './mcalouste/mcalouste.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomepageComponent,
    CatalogoComponent,
    SobrenosComponent,
    ContatoComponent,
    LoginComponent,
    RegistoComponent,
    MAzulejoComponent,
    MCocheComponent,
    McalousteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
