import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'rosa-handlebar',
  templateUrl: './handlebar.component.pug',
  styleUrls: ['./handlebar.component.scss']
})
export class HandlebarComponent implements OnInit {
  public id: any;
  public createMode = true;
  public action = 'default';
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getParams();
    this._route.queryParams.subscribe(
      params => {
        if (params.action) {
          this.action = params.action;
        }
       // console.log(this.action);
      }
    );
  }
  public getParams() {
    this._route.paramMap.subscribe(
      params => {
        if ( params.get('id')) {  this.id = params.get('id'); console.log(this.id); }
      }
    );
  }

  public close() {
    this._router.navigate([{ outlets: { handlebar: null }}], {relativeTo: this._route.parent});
  }
}
