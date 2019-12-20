import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IAlert } from 'app/components/notification/notification.component';

@Injectable({
    providedIn: 'root',
})
export class GlobalService {

    private apiUrl: string = 'https://us-central1-secretsantadb-7faa5.cloudfunctions.net/webApi/api/v1/';//https://us-central1-secretsanta-397f9.cloudfunctions.net/app/api/v1/';

    private subject = new Subject<any>();

    constructor(private http: HttpClient) { }

    httpCall(method: string, url: string, data?: any, httpOptions?: any): Observable<any> {
        if (!httpOptions) {
            httpOptions = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };
        }
        return this.http.request(method, `${this.apiUrl}${url}`, {
            body: data,
            headers: httpOptions.headers
        }).pipe(catchError(this.handleError<any>(url, data)));
    }


    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            this.ShowHideNotification({
                id: 1,
                type: 'danger',
                strong: '!!Oh snap!!!',
                message: error.details,
                icon: 'objects_support-17'
            });
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        console.log(message);
        //this.messageService.add(`HeroService: ${message}`);
    }
    
    ShowHideNotification(data:IAlert) {
        this.subject.next(data);
    }

    GetNotificationData(): Observable<any> {
        return this.subject.asObservable();
    }


}