import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Shop} from "../../model/shop";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  shops: Array<Shop> = new Array<Shop>();
  selectedShop: Shop | undefined;
  viewingShop: Shop | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

//hook
  ngOnInit(): void {
    for (let i = 0; i <= 10; i++) {
      const shop = new Shop();
      shop.id = i;
      shop.name = `Shop ${i + 1}`;
      shop.location = `location ${i + 1}`;
      shop.description = "This is bookstore shop  located at Kathmandu";
      shop.openingDate = new Date();
      this.shops.push(shop);
    }
  }


  condition(eve: boolean) {
    if (eve) {
      this.selectedShop = undefined;
    }
  }

  responseView(eve: number) {
    this.viewingShop = this.shops[eve]
  }

  viewDetails(shopId: any) {
    this.selectedShop = this.shops[shopId]
  }
}
