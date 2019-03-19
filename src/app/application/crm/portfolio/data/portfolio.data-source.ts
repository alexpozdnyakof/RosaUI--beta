import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { ProspectView } from '../models/portfolio.model';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { PortfolioService } from '../services/portfolio.service';
import { catchError, finalize, map } from 'rxjs/operators';


export class PortfollioDataSource extends DataSource<ProspectView> {
    private portfolio$$ = new BehaviorSubject<ProspectView[]>([]);
    private loading$$ = new BehaviorSubject<boolean>(false);
    private pages$$ = new BehaviorSubject<{}>({});
    public loading$ = this.loading$$.asObservable();
    constructor(private _portfolioService?: PortfolioService) {
        super();
    }

    connect(collectionViewer: CollectionViewer): Observable<ProspectView[]> {
        return this.portfolio$$.asObservable();
    }

    disconnect(): void {
        this.portfolio$$.complete();
        this.loading$$.complete();
    }
    public getPages() {
       return this.pages$$.asObservable();
    }
   // loadPortfolio(useId: number, filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 3) {
    public loadPortfolio(page = 1, group = 0) {
        this.loading$$.next(true);
        // this._portfolioService.getPortfolio(userID, filter, sortDirection, pageIndex, pageSize).
        this._portfolioService.getPortfolio(page, group).pipe(
            catchError(() => of([])),
            finalize(() => this.loading$$.next(false)),
        )
        .subscribe(prospects => {
            console.log(prospects);
            this.pages$$.next({current: prospects.meta.current_page, last: prospects.meta.last_page });
            return this.portfolio$$.next(prospects.data); } );
    }
  }

/*
export class LessonsDataSource implements DataSource<Lesson> {

    private lessonsSubject = new BehaviorSubject<Lesson[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private coursesService: CoursesService) {}

    connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }

    loadLessons(courseId: number, filter = '',
                sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

        this.loadingSubject.next(true);

        this.coursesService.findLessons(courseId, filter, sortDirection,
            pageIndex, pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(lessons => this.lessonsSubject.next(lessons));
    }
}
  */
