import { Component } from '@angular/core';
import { AuthService } from '../Services/users-data.service';
import { FormControl, FormGroup ,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-stuffing',
  templateUrl: './stuffing.component.html',
  styleUrls: ['./stuffing.component.css']
})
export class StuffingComponent {
  page:any=1;
  count:any=0;
  tableSize:any=7;
  tableSizes:any=[5,10,15,20];

  Stuff: any=[]; 
 
constructor(private userData:AuthService)
  {
    
    this.StuffinList();
   }
StuffinList():void{

  this.userData.getStuffing().subscribe((response: any[0] )=> {
    this.Stuff = response.results;
    
  })
}
OnTableDataChange(event:any){
 this.page=event;
 this.StuffinList();
}
OnTableSizeChange(event:any){
  this.tableSize=event.target.value;
  this.page=1;
  this.StuffinList();
 }
addStuffing=new FormGroup({
  name: new FormControl('',Validators.required ),
  code: new FormControl('',Validators.required ),
  description: new FormControl('',Validators.required ),
  methodType: new FormControl('ST')
});

saveStuffing(){
    this.userData.saveStuff(this.addStuffing.value).subscribe((user )=> {
    console.log(this.addStuffing.value);
   });
   this.StuffinList();
}
EditRow(value:any){
  //console.log("the selected value is " + value);
  this.getRowValues(value);
}
Editdata={
  name:"",
  code:"",
  description:"",
  methodType:""

};
getRowValues(Stuff:any){
 
  this.Editdata=Stuff;
 
  }
}
