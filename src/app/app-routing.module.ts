import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StuffingComponent } from './stuffing/stuffing.component';
import { PortComponent } from './port/port.component';
import { QuotationCreationComponent } from './quotation-creation/quotation-creation.component';

const routes: Routes = [
  { path: '', redirectTo:'', pathMatch: "full"},
  { path: 'stuffing', component: StuffingComponent },
  { path: 'port', component: PortComponent },
  { path: 'quotation-creation', component: QuotationCreationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
