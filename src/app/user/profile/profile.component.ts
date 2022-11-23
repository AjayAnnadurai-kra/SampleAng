import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  userNames = ["Ajay", "Prasanth", "Swathi", "Bipin", "Kavin"];
  selectedCtry : string = "";
  selectedSt : string = "";
  selectedCity : string = "";
  states : string[] = [];
  cities : string [] = [];
  price : number = 0;
  countries = ['India', 'USA', 'UK'];

  indSt = ['TN', 'KL', 'AP', 'TL', 'KA'];
  usaSt = ['TX', 'LA'];

  tnCities = ['CH', 'TRY', 'KPM', 'MDU'];
  klCities = ['ALP', 'TRDM', 'YKM'];

  loadStates()
  {
    this.states = [];
    if(this.selectedCtry == 'India')
      this.states = this.indSt;
    else if(this.selectedCtry == 'USA')
      this.states = this.usaSt;
  }

  loadCities()
  {
    this.cities = [];
    if(this.selectedSt == 'TN')
    {  
      this.cities = this.tnCities;
      this.price = 1000;
    }
    else if(this.selectedSt == 'KL')
     { 
      this.cities = this.klCities;
      this.price = 500;
    }
  }

  logout()
  {
    this.router.navigate(['/logout']);
  }

}
