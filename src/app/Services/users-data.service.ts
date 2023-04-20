import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Subject } from 'rxjs'; 

  @Injectable({
    providedIn:'root',
  })
export class AuthService {
    authToken: any;
    SharingData = new Subject(); 
    constructor(private http: HttpClient) { }


   ///--------------- Stuffing-------------------------//
  StuffingURL='http://134.209.158.76:9010/core/base/v1/stuffing-types/';
    getStuffing() {
   let headers = new HttpHeaders();
    
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('admin:int123')
      })
    };
    return this.http.get(this.StuffingURL, httpOptions); 
    
 }
 saveStuff(user:any=[]){
  let headers = new HttpHeaders();
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('admin:int123')
  })
  };
  return this.http.post(this.StuffingURL,user,httpOptions)
}
///--------------------------------------------------------------------//


///--------------- Port-------------------------//
    sectorurl='http://134.209.158.76:9010/core/base/v1/sectors/';
    countryurl='http://134.209.158.76:9010/core/base/v1/countries/';
    stateurl='http://134.209.158.76:9010/core/base/v1/cities/?state=';
    port='http://134.209.158.76:9010/core/base/v1/ports/';

    getPort(){

      let headers = new HttpHeaders();
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('admin:int123')
      })
    };
    return this.http.get(this.port, httpOptions); 


  }
    getSector(){
      let headers = new HttpHeaders();
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('admin:int123')
      })
    };
    return this.http.get(this.sectorurl, httpOptions); 
    }



    getCountry(){
        let headers = new HttpHeaders();
        const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Basic ' + btoa('admin:int123')
        })
      };
      return this.http.get(this.countryurl, httpOptions); 
      }
    
    getCountryState(countryCode:number){
      let headers = new HttpHeaders();
      const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('admin:int123')
      })
    };
    return this.http.get(this.stateurl+countryCode, httpOptions); 
    }

  savePort(portvalues:any=[]){
    let headers = new HttpHeaders();
    const httpOptionso = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('admin:int123')
    })
  };
  return this.http.post(this.port,portvalues,httpOptionso)
  }
///--------------------------------------------------------------------//

///---------------Agent-------------------------//
PodAgentUrl='http://134.209.158.76:9010/exim/quotations/v1/office-port-currency-mappings/?portId='
getPODAgent(portid:any){
  let headers = new HttpHeaders();
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('admin:int123')
  
  })
};
return this.http.get(this.PodAgentUrl+portid,httpOptions); 
}

///--------------------------------------------------------------------//



///---------------Quotation Creation-------------------------//
Referencenourl='http://134.209.158.76:9010/exim/quotations/v1/get-reference-number/';
LineUrl='http://134.209.158.76:9010/core/base/v1/lines/';
POLAgentUrlNotchecked='http://134.209.158.76:9010/core/base/v1/offices/?code=&isIcd=false&statusSet=APPR,KYCP'
POLAgentUrlchecked='http://134.209.158.76:9010/core/base/v1/offices/?code=a&isIcd=true&statusSet=APPR,KYCP'
PartyUrl='http://134.209.158.76:9010/core/base/v1/party-office-mappings/?office='
CurrencyUrl='http://134.209.158.76:9010/core/base/v1/currencies/';
CargoTypeUrl='http://134.209.158.76:9010/core/base/v1/cargo-types/';
SaveQuotationUrl='http://134.209.158.76:9010/exim/quotations/v1/quotations/';
getReference(){
  let headers = new HttpHeaders();
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('admin:int123')
  })
};
return this.http.get(this.Referencenourl, httpOptions); 
}

getLine(){
  let headers = new HttpHeaders();
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('admin:int123')
  })
};
return this.http.get(this.LineUrl,httpOptions)

}


getPOLAgent(){
  let headers = new HttpHeaders();
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('admin:int123')
  })
};
return this.http.get(this.POLAgentUrlchecked,httpOptions)

}
getParty(officeid:any){
  let headers = new HttpHeaders();
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('admin:int123')
  
  })
};
return this.http.get(this.PartyUrl+officeid,httpOptions); 
}
getCurrency(){
  let headers = new HttpHeaders();
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('admin:int123')
  })
};
return this.http.get(this.CurrencyUrl,httpOptions)
}
getCargoType(){
  let headers = new HttpHeaders();
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('admin:int123')
  })
};
return this.http.get(this.CargoTypeUrl,httpOptions)
}
saveQuotation(user:any=[]){
  let headers = new HttpHeaders();
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('admin:int123')
  })
  };
  return this.http.post(this.SaveQuotationUrl,user,httpOptions)
}
///--------------------------------------------------------------------//


}
