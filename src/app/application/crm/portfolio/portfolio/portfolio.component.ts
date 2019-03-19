import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import { PortfolioService } from '../services/portfolio.service';
import { PortfollioDataSource } from '../data/portfolio.data-source';
import { UserQuery } from '@app/store/user/user.query';
import { CustomerGroup } from '../models/group.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioQuery } from '../state/state/portfolio.query';
import { PortfoliostateService } from '../state/state/portfoliostate.service';
import { PortfolioState } from '../state/state/portfolio.store';



@Component({
  selector: 'rosa-portfolio',
  templateUrl: './portfolio.component.pug',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public displayedColumns: string[] = ['padding-left', 'name',  'valuation', 'activity', 'budget', 'industry', 'bank', 'padding-right'];
  public dataSource: PortfollioDataSource;
  public state$: Partial<PortfolioState> = {};
  public pagination: {};
  private groups$: Observable<CustomerGroup[]>;
  private pageName = `Мой портфель`;
  public showHandle = false;
  public pagesCount(n: number): any[] {
    return Array(n);
  }

  constructor(
    private _portfolioService: PortfolioService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _portfolioQuery: PortfolioQuery,
    private _stateService: PortfoliostateService,
    // private _userQuery: UserQuery
  ) { }
  ngOnInit(): void {
    this.dataSource = new PortfollioDataSource(this._portfolioService);
    this.loadPage();
    this.setState({pages: 0, current: 0, name: 'Мой портфель', id: 0});
    this.groups$ = this._portfolioService.getGroups();
    this.getState();
  }
  public setState(state: Partial<PortfolioState>) {
    this._stateService.add(state);
  }
  public getState() {
    this._portfolioQuery.portfolioState$.subscribe(
      data => this.state$ = data,
      err  => console.log(err),
    );
  }
  public onRowClicked (row: any) {
    this._router.navigate([`/crm/client/${row.id}`]);
  }
  public loadPage(page = 1, group = 0, groupName?) {
    const pageName = groupName ? groupName : `Мой портфель`;
    const id  = group ? group : 0;
    this.dataSource.loadPortfolio(page, group);
    this.dataSource.getPages().subscribe(
      (data: any) =>  {this.setState({pages: data.last, current: data.current, name: pageName, id: id}), this.getState(); },
      err => console.log(err)
    );
    if (groupName) {
      this.pageName = groupName;
    }
  }
}

