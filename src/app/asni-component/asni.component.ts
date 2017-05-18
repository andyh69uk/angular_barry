import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asni',
  templateUrl: './asni.component.html'
})

export class AsniComponent implements OnInit
{
  private asni_id: string = 'ABC0123';
  private created_on: number = 1288323623006;
  private created_by: string = 'xxxxx';
  private updated_on: number = 1288323623006;
  private updated_by: string = 'yyyyy';
  private is_enabled: boolean = true;

  constructor(){}

  ngOnInit()
  {
  }

  get_asni_id()
  {
    return this.asni_id;
  }

  set_asni_id(asni_id)
  {
    this.asni_id = asni_id;
  }

  get_created_on()
  {
    return this.created_on;
  }

  set_created_on(created_on)
  {
    this.created_on = created_on;
  }

  get_created_by()
  {
    return this.created_by;
  }

  set_created_by(created_by)
  {
    this.created_on = created_by;
  }

  get_updated_on()
  {
    return this.updated_on;
  }

  set_updated_on(updated_on)
  {
    this.updated_on = updated_on;
  }

  get_updated_by()
  {
    return this.updated_by;
  }

  set_updated_by(updated_by)
  {
    this.updated_by = updated_by;
  }

  get_is_enabled()
  {
    return this.is_enabled;
  }

  set_is_enabled(is_enabled)
  {
    this.is_enabled = is_enabled;
  }

}
