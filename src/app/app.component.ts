import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/http/services/auth.service';
import { first } from 'rxjs/operators';
import { UserService } from '@store/user/user.service';

import { SessionQuery } from './store/sessions/sessions.query';
import { UserQuery } from './store/user/user.query';

import { Observable } from 'rxjs';
import { PortfolioService } from './application/crm/portfolio/services/portfolio.service';
import { CustomerGroup } from './application/crm/portfolio/models/group.model';

@Component({
  selector: 'rosa-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Neue Proportal';
  public token$: any;
  public groups$: Observable<CustomerGroup[]>;

  constructor(
    private _portfolioService: PortfolioService,
    private _authService: AuthService,
    private _userService: UserService,
    private _authQuery: SessionQuery,
    private _userQuery: UserQuery  ) { }

 public ngOnInit(): void {
  this.groups$ = this._portfolioService.getGroups();
  this.isLoggedIn();
   /*  const role = 'admin';
     this._userQuery.hasRole(role).subscribe(
         data => { console.log(data); }
     );
     this._userQuery.hasPermission(role).subscribe(
        data => { console.log(data); }
    );
    */
  }
  public isLoggedIn() {

    this._authQuery.isLoggedIn$.subscribe(isLoggedIn => {
        console.log(isLoggedIn);
    });

  }
  public getData() {

  }

}

