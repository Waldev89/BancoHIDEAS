import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { IndexComponent } from './pages/index/index.component';
import { HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { EstadoComponent } from './pages/estado/estado.component';
import { IdeaComponent } from './pages/idea/idea.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    FooterComponent,
    CategoriaComponent,
    EstadoComponent,
    IdeaComponent,
    ContenidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
