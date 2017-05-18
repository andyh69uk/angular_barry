import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html'
})

export class ToolComponent implements OnInit
{
  private amount:string = '270000';
  private soil:string = 'SOI_VALUE';
  private call:string = 'CALL_S';
  private df:string = 'DF_INFO';
  private start_time:string = '01:54:30';
  private end_time:string = '02:05:05';
  private traffic:string = 'traffic data';
  private path_to_cut:string = 'some-uri';

  constructor()
  {
  }

  ngOnInit() {
  }


  get_amount()
  {
    return this.amount;
  }

  set_amount(amount)
  {
    this.amount = amount;
  }

  get_soil()
  {
    return this.soil;
  }

  set_soil(soil)
  {
    this.soil = soil;
  }

  get_call()
  {
    return this.call;
  }

  set_call(call)
  {
    this.call = call;
  }

  get_df()
  {
    return this.df;
  }

  set_df(df)
  {
    this.df = df;
  }

  get_start_time()
  {
    return this.start_time
  }

  set_start_time(start_time)
  {
    this.start_time = start_time;
  }

  get_end_time()
  {
    return this.end_time
  }

  set_end_time(end_time)
  {
    this.end_time = end_time;
  }

  get_traffic()
  {
    return this.traffic;
  }

  set_traffic(traffic)
  {
    this.traffic = traffic;
  }

  get_path_to_cut()
  {
    return this.path_to_cut;
  }

  set_path_to_cut(path_to_cut)
  {
    this.path_to_cut = path_to_cut;
  }


}
