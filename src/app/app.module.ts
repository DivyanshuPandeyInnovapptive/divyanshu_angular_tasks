import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componenets/login/login.component';
import { FormsModule } from '@angular/forms';

import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ChangeTextDirective } from './change-text.directive';
import { FormsComponent } from './componenets/forms/forms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SqrPipe } from './pipes/sqr.pipe';
import { SalutationPipe } from './pipes/salutation.pipe';
import { DateserviceService } from './services/dateservice.service';
import { CourselistComponent } from './componenets/courselist/courselist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangeTextDirective,
    FormsComponent,
    SqrPipe,
    SalutationPipe,
    CourselistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [DateserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
