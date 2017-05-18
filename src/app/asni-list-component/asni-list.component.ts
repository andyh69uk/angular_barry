import { Component } from '@angular/core';
import { AsnisService } from '../services/asnis-service/asnis.service';

@Component({
    selector: 'app-asni-list',
    templateUrl: './asni-list.component.html'
})

export class AsniListComponent
{

  asnis = [];

  constructor( private asnisService: AsnisService )
  {
    // call the asni-list-service to get data from the API
    // this.setAsniListData(this.asnisService.fetchData());
  }

  // runs when component loads
  ngOnInit() {
    this.asnisService.fetchData().subscribe(
      (data) => this.asnis = data.asnis
    );
  }

  // getAsniListData()
  // {
  //   return this.asniListData;
  // }
  //
  // setAsniListData(asniListData)
  // {
  //   this.asniListData = asniListData;
  // }
}
