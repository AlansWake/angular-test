import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// import 'rxjs/add/operator/toPromise';

import { Stop } from './stop';


@Injectable()
export class RuterService {

  private id = 3010370;

  private ruterUrl = 'http://reisapi.ruter.no/';

  private jernbanetorgetUrl = 'http://reisapi.ruter.no/StopVisit/GetDepartures/' + this.id;

  private stops: Stop[];

  private headers = new Headers({'Accept': 'application/json'});

  constructor(private http: Http) { }

  getStation(name: string): Promise<Object> {

    const id = this.getStationId(name);

    return this.http.get(this.ruterUrl + 'StopVisit/GetDepartures/' + id, {headers: this.headers})
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);

      // .then(response => response.json().destinationDi as String[])

  }

  getStationId(name: string): number {
    for (let i = 0; i < this.stops.length; i++) {
      if (this.stops[i].name === name) {
        return this.stops[i].id;
      }
    }
  }

  getAllStops(): Promise<Stop[]> {
    return this.http.get(this.ruterUrl + 'Place/GetStopsRuter', {headers: this.headers})
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
  }

  getAllStops2(): void {
    this.http.get(this.ruterUrl + 'Place/GetStopsRuter', {headers: this.headers})
                    .toPromise()
                    .then(response => this.stops = response.json())
                    .catch(this.handleError);
  }

  getAllStops3(): Stop[] {
    return this.stops;
  }
/*
  private extractData(res: Response) {
    const body = res.json().this.toStops;

    return body || { };
  }

  private toStops(r: any): Stop {
    const stop = <Stop>({
      id: r.ID,
      name: r.Name,
    });

    return stop;
  }
  */
  private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
