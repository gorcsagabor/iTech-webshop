import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RolunkComponent } from './part/rolunk/rolunk.component';
import { NavComponent } from './part/nav/nav.component';
import { Enviroments } from './enviroments';
import { TermekekComponent } from './part/termekek/termekek.component';
import { RendelesComponent } from './part/rendeles/rendeles.component';
import { FilterPipe } from './filter.pipe';
import { SigninComponent } from './part/signin/signin.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    RolunkComponent,
    NavComponent,
    TermekekComponent,
    RendelesComponent,
    FilterPipe,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(Enviroments.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    AngularFireAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
