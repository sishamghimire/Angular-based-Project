import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Shop} from "../../../model/shop";
import {Route} from "@angular/router";
import * as events from "events";

@Component({
  selector: 'app-about-us-details',
  templateUrl: './about-us-details.component.html',
  styleUrls: ['./about-us-details.component.css']
})
export class AboutUSDetailsComponent implements OnInit {
 @Input() selectedShop: Shop | undefined;
 @Output() hideEmitter :EventEmitter<boolean> = new EventEmitter<boolean>();
 @Output() viewingEmitter :EventEmitter<number> =new EventEmitter<number>();
  constructor(
  ) { }

  ngOnInit(): void {
  }


  hide() {
    this.hideEmitter.emit(true);
  }
  viewDetails(){
    this.viewingEmitter.emit(this.selectedShop?.id);
  }
}
