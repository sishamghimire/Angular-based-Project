import { Component, OnInit } from '@angular/core';
import {Shop} from "../../model/shop";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent  {


    submitted = false;

  emailAddress= '';

    onSubmit() { this.submitted = true; }



}
