import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AsnisService {

  constructor(private http: Http) {  }

  fetchData()
  {
    // get data from .json file and console log the data
    return this.http.get('/assets/asnis.json').map(
      (response) => response.json()
    );
  }

}
