import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ["home.component.css"]
})
export class HomeComponent implements OnInit {
  cardDetails;
  cardType:any;
  cardLimit:any;
  cardAnnualCharge:any;
  showCardDetails=false;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.service.getCards().subscribe(
      res => {
        debugger;
        this.cardDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  onCardDetailsClick(id,type){
    this.service.getCardDetails(id,type).subscribe(
      res => {
        debugger;
        let cardDetails = res;
        if(cardDetails!=null && cardDetails != undefined)
        {
          this.showCardDetails=true;
        this.cardType=cardDetails["CardType"];
        this.cardLimit=cardDetails["CardLimit"];
        this.cardAnnualCharge=cardDetails["CardAnnualCharge"];
        }
        else{
          this.showCardDetails=false;
        }
      },
      err => {
        console.log(err);
      },
    );
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
