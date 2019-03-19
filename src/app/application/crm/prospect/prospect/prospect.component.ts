import { Component, OnInit } from '@angular/core';
import { ProspectService } from '../services/prospect.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'rosa-prospect',
  templateUrl: './prospect.component.pug',
  styleUrls: ['./prospect.component.scss']
})
export class ProspectComponent implements OnInit {
  public prospect: any;
  public phones: any;
  public prospectId;
  public tasks;
  public tasks$: Observable<any>;
  public okved: string[] = [];
  constructor(
    private _prospectService: ProspectService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => this._getProspect(params.get('id')),
    );
  }

  private _getProspect(prospectId) {
    const customerId: number = +prospectId;
    this._prospectService.getProspect(customerId).subscribe(
      data => {
        this.prospect = data;
        this.phones = this.prospect.contacts.phones;
        console.log(this.prospect.analytics);
        this.okved = this._decodeStringArray(this.prospect.main.okved.all[0], ';');
        console.log(data);
      },
      err => console.log(err)
    );
    this._prospectService.getProspectTasks(customerId).subscribe(
      data => {
        this.tasks = data;
        console.log(data); },
      err => console.log(err)
    );
  }



  private _decodeStringArray(arrayStringifyed: string, splitter: string): string[] {
    if (!arrayStringifyed) { return; }
    return arrayStringifyed.split(`;`);
  }
  private _decodeString(data) {
    data = data.replace(/\\n/g, '\\n')
               .replace(/\\'/g, '\\\'')
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, '\\&')
               .replace(/\\r/g, '\\r')
               .replace(/\\t/g, '\\t')
               .replace(/\\b/g, '\\b')
               .replace(/\\f/g, '\\f');
    console.log(JSON.parse(data));

  }
  private decodePhones(phones) {
    console.log(phones);
    this.phones = phones
    .split(',')
    .map(phone => JSON.parse(phone));

   // this.phones = JSON.parse(phones);
   // console.log(this.phones);

  }

  public isEmptyChange(value: any, defaultValue = `отстуствует`): any {
    if (!value) { return defaultValue; }
      return value;
  }

}
