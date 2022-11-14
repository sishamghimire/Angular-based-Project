import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  constructor( private  activatedRoute: ActivatedRoute,
               private route: Router
  ) {}
  public routeToId():void{
    this.route.navigate(['/aboutUs/6767']);
  }
}




