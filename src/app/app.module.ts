import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './Services/users-data.service';
import { StuffingComponent } from './stuffing/stuffing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { PortComponent } from './port/port.component';
import { QuotationCreationComponent,DialogDataExampleDialog} from './quotation-creation/quotation-creation.component';
import { AnimationStateMetadata } from '@angular/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    StuffingComponent,
    HomeComponent,
    PortComponent,
    QuotationCreationComponent,DialogDataExampleDialog
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,NgxPaginationModule,MatSelectModule,
    BrowserAnimationsModule,MatStepperModule,MatInputModule,MatDialogModule,MatNativeDateModule,
    MatAutocompleteModule, NgbModule,MatDatepickerModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule,MatStepperModule
  ]
})
export class AppModule { }
