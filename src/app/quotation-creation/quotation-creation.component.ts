import { Component,Inject ,OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { AuthService } from '../Services/users-data.service';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, from} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';




@Component({
  selector: 'app-quotation-creation',
  templateUrl: './quotation-creation.component.html',
  styleUrls: ['./quotation-creation.component.css']
})
export class QuotationCreationComponent  implements OnInit{
  

  val : any='';
  officename: any='';
  officeid: any='';
  SelectRefereno='';
  Currency:any;
  Stuffing:any;
  CargoType:any=[];
  
  //-------Number Dropdown--------------
  // myControl = new FormControl('');
  // options: any[] = ['One', 'Two', 'Three'];
  // filteredOptions:any;
//--------------------------------------------

//-------Line Autocomplete--------------
  LineControl = new FormControl('');
  Lines! : any[];
  LinefilteredOptions:any;

//--------------------------------------------
//-------POLAgent Autocomplete-------------
  POLAgentControl = new FormControl('');
  POLAgent! : any[];
  POLAgentfilteredOptions:any;

//--------------------------------------------
//-------Party Autocomplete--------------
  PartyControl = new FormControl('');
  Party! : any[];
  PartyfilteredOptions:any;

//--------------------------------------------

//-------POL & POD Autocomplete--------------
POLControl = new FormControl('');
PODControl = new FormControl('');
POL! : any[];
POLfilteredOptions:any;
PODfilteredOptions:any;

//--------------------------------------------

  ngOnInit() 
  {
    // //-------Number Autocomplete--------------
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   map(value => this._filter(value || '')),
    // );
    // //--------------------------------------------
    this.LinefilteredOptions = this.LineControl.valueChanges.pipe(
      map(value => this._filterline(value || '')),
    );

    this.POLAgentfilteredOptions = this.POLAgentControl.valueChanges.pipe(
      map(value => this._filterPOLAgent(value || '')),
    );

    this.PartyfilteredOptions = this.PartyControl.valueChanges.pipe(
      map(value => this._filterParty(value || '')),
    );
    this.POLfilteredOptions = this.POLControl.valueChanges.pipe(
      map(value => this._filterPOL(value || '')),
    );
    this.PODfilteredOptions = this.PODControl.valueChanges.pipe(
      map(value => this._filterPOD(value || '')),
    );
    
   
  }
//  //-------Number Autocomplete--------------
//   private _filter(value: string): string[] 
//   {
//     const filterValue = value.toLowerCase();
//     return this.options.filter(option => option.toLowerCase().includes(filterValue));
//   }
// //--------------------------------------------


  private _filterline(value: string): string[] 
  {
    const filterValueLine = value.toLowerCase();
    return this.Lines.filter(option => option.code.toLowerCase().includes(filterValueLine));
    
  }
  private _filterParty(value: string): string[] 
  {
    const filterValueParty = value.toLowerCase();
    return this.Party.filter(option => option.partyName.toLowerCase().includes(filterValueParty));
    
  }
  private _filterPOLAgent(value: string): string[] 
  {
    const filterValuePOLAgent = value.toLowerCase();
    return this.POLAgent.filter(option => option.code.toLowerCase().includes(filterValuePOLAgent));
    
  }
  private _filterPOL(value: string): string[] 
  {
    const filterValuePOLAgent = value.toLowerCase();
    return this.POL.filter(option => option.code.toLowerCase().includes(filterValuePOLAgent));
    
  }
  private _filterPOD(value: string): string[] 
  {
    const PODfilteredOptions = value.toLowerCase();
    return this.POL.filter(option => option.code.toLowerCase().includes(PODfilteredOptions));
    
  }
  //--------------------------------------------



  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder,private userData:AuthService,private dialog:MatDialog ){

    this. GetReferNo();
    this.GetLine();
    this.GetPOLAgent();
    this.userData.SharingData.subscribe((res: any) => {  
      this.officename = res.officeName;  
      this.officeid=res.officeId;
    })  
    this.GetParty(this.officeid);
    this.GetCurrency();
    this.PortList();
    this.GetCargoType();
    this.GetStuffing();
  }

GetLine(){
  this.userData.getLine().subscribe((response: any[0] )=> {
   this.Lines=response.results;
   console.log(this.Lines);
   })

}
selectOption(e: MatAutocompleteSelectedEvent){
  const item: "the selected value is " = e.option.value;
  this.val = e.option.value
 }

 GetPOLAgent(){
  this.userData.getPOLAgent().subscribe((response: any[0] )=> {
   this.POLAgent=response.results;
   
   })

}

  GetReferNo():void{
    this.userData.getReference().subscribe((response: any[0] )=> {
    this.SelectRefereno = response.referenceNumber;
    })
  }
  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
     
    });
  }
  GetParty(id:any){
    this.userData.getParty(id).subscribe((response: any[0] )=> {
     this.Party=response.results;
     })
    
  }
  GetCurrency():void{
    this.userData.getCurrency().subscribe((response: any[0] )=> {
    this.Currency = response.results;
    })
  }
  PortList():void{
    this.userData.getPort().subscribe((response: any[0] )=> {
      this.POL = response.results;
    });
  }
  GetCargoType():void{
    this.userData.getCargoType().subscribe((response: any[0] )=> {
    this.CargoType = response.results;
    })
  }
  GetStuffing():void{
    this.userData.getStuffing().subscribe((response: any[0] )=> {
    this.Stuffing = response.results;
    })
  }
    addQuotation=new FormGroup({
    ref_number:new FormControl(''),
    valid_from: new FormControl(''),
    valid_to: new FormControl(''),
    line: new FormControl(''),
    pol_office: new FormControl(''),
    pod_office: new FormControl(''),
    party: new FormControl(''),
    currency: new FormControl(''),
    licd: new FormControl(''),
    pol: new FormControl(''),
    pod: new FormControl(''),
    dicd: new FormControl(''),
    cargo_type: new FormControl(''),
    stuffing: new FormControl(''),
    de_stuffing: new FormControl(''),

    
  });
  

  // setCountry() {
 
  //   let contact = {
      
  //       ref_number:'',
  //       valid_from:'',
  //       valid_to: '',
  //       line: this.Line,
  //       pol_office: '',
  //       pod_office: '',
  //       party: '',
  //       currency: '',
  //       licd: '',
  //       pol: '',
  //       pod: '',
  //       dicd:'',
  //       cargo_type:'',
  //       stuffing:'',
  //       de_stuffing: '',
     
  //     };
  //   this.addQuotation.setValue(contact);
  // }

  saveQuotation(){
    this.userData.saveQuotation(this.addQuotation).subscribe((user )=> {
    console.log(this.addQuotation.value);
    });
   
}
}





///---------Popup Class---------------------------
@Component({
  selector: 'agent',
  templateUrl: 'agents.html',
})
export class DialogDataExampleDialog implements OnInit{

  

  
//-------POLAgent Dropdown--------------
PortControl = new FormControl('');
Portlist! : any[];
PortfilteredOptions:any;

//--------------------------------------------

portid:any;
     Agent:any;
     Port:any;
     constructor(private userData:AuthService) {
     this.PortList();
    
  }
  ngOnInit() 
  {
    this.PortfilteredOptions = this.PortControl.valueChanges.pipe(
      map(value => this._filterPort(value || '')),
    );
  }

  private _filterPort(value: string): string[] 
  {
    const PortfilteredOptions = value.toLowerCase();
    return this.Portlist.filter(option => option.code.toLowerCase().includes(PortfilteredOptions));
    
  }

 
  PortList():void{
    this.userData.getPort().subscribe((response: any[0] )=> {
      this.Portlist = response.results;
    });
  }
  selectOption(e: MatAutocompleteSelectedEvent){
    const item: "the selected value is " = e.option.value;
    console.log(item);
    this.portid=e.option.value;
   }
   PODAgentList(value:any){
    this.userData.getPODAgent(value).subscribe((response: any[0] )=> {
      this.Agent = response;
    });
  }
  Search(){
    this.PODAgentList(this.portid); 
    console.log(this.portid);
  }
 
  SelectPodagent(agent:any){
    this.userData.SharingData.next(agent);
  }

  



}
//----------------------------------------