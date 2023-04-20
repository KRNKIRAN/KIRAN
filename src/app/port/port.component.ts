import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../Services/users-data.service';
@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent {

  page:any=1;
  count:any=0;
  tableSize:any=7;
  tableSizes:any=[5,10,15,20];
  selectedsector:any;
  selectedValue:any;
  countryvalue :any;
  statevalue :any;
  port: any=[]; 
  country:any=[];
  Sector:any=[];
  State:any=[];
  selectedcountry:any;
  selectedstate:any;
  constructor(private userData:AuthService){
    this.PortList();
    this.userData.getCountry().subscribe((responsei: any[0] )=> {
    this.country = responsei.results;
    //console.log(responsei);
    this.countryvalue=responsei.results
  })
    this.userData.getSector().subscribe((responseSector: any[0] )=> {
    this.Sector = responseSector.results;
    //console.log(responseSector);
  })
}

PortList():void{

  this.userData.getPort().subscribe((responsei: any[0] )=> {
    this.port = responsei.results;
    //console.log(responsei);
    
  })
}

OnTableDataChange(event:any){
  this.page=event;
  this.PortList();
 }
 OnTableSizeChange(event:any){
   this.tableSize=event.target.value;
   this.page=1;
   this.PortList();
  }

onOptionsSelected(value:any){
  //console.log("the selected value is " + value);
  this.countryvalue=value;
  this.getState(value);
}
getState(value:number){
this.userData.getCountryState(value).subscribe((responseState: any[0] )=> {
//console.log(value);
this.State = responseState.results;
});

}
onOptionsSelectedstate(value:any){
//console.log("the selected value is " + value);
this.statevalue=value;
}

addport=new FormGroup({
portType: new FormControl(''),
sector: new FormControl(''),
name: new FormControl(''),
code: new FormControl(''),
description: new FormControl(''),
isoLocode: new FormControl(''),
countryId:new FormControl(''),
stateId:new FormControl(''),
cityId:new FormControl('')
});
    savePortData(){
    this.userData.savePort(this.addport.value).subscribe((portvalues )=> {
    console.log(this.addport.value);
   });

  }
}


