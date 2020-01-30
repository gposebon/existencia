import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SilosComponent } from './components/silos/silos.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { SemillasComponent } from './components/semillas/semillas.component';
import { EntradasComponent } from './components/entradas/entradas.component';
import { LimpiezaComponent } from './components/limpieza/limpieza.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SilosComponent,
    SemillasComponent,
    ProveedoresComponent,
    EntradasComponent,
    LimpiezaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
