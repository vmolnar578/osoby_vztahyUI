import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsobyPageComponent } from './osoby-page/osoby-page.component';
import { PredmetyPageComponent } from './predmety-page/predmety-page.component';
import { ObedyPageComponent } from './obedy-page/obedy-page.component';
import { ZiaciPageComponent } from './osoby-page/ziaci-page/ziaci-page.component';
import { ZiaciListComponent } from './osoby-page/ziaci-list/ziaci-list.component';
import { UciteliaPageComponent } from './osoby-page/ucitelia-page/ucitelia-page.component';
import { UciteliaListComponent } from './osoby-page/ucitelia-list/ucitelia-list.component';
import { RodiciaListComponent } from './osoby-page/rodicia-list/rodicia-list.component';
import { RodiciaPageComponent } from './osoby-page/rodicia-page/rodicia-page.component';
import { ZiaciFormComponent } from './osoby-page/ziaci-form/ziaci-form.component';
import { RodiciaFormComponent } from './osoby-page/rodicia-form/rodicia-form.component';
import { UciteliaFormComponent } from './osoby-page/ucitelia-form/ucitelia-form.component';
import { ZiaciDetailsComponent } from './osoby-page/ziaci-details/ziaci-details.component';
import { RodiciaDetailsComponent } from './osoby-page/rodicia-details/rodicia-details.component';
import { UciteliaDetailsComponent } from './osoby-page/ucitelia-details/ucitelia-details.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    OsobyPageComponent,
    PredmetyPageComponent,
    ObedyPageComponent,
    ZiaciPageComponent,
    ZiaciListComponent,
    UciteliaPageComponent,
    UciteliaListComponent,
    RodiciaListComponent,
    RodiciaPageComponent,
    ZiaciFormComponent,
    RodiciaFormComponent,
    UciteliaFormComponent,
    ZiaciDetailsComponent,
    RodiciaDetailsComponent,
    UciteliaDetailsComponent,
    LoginPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
