import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AsniListComponent } from './asni-list-component/asni-list.component';
import { AsniComponent } from './asni-component/asni.component';
import { ShedListComponent } from './shed-list-component/shed-list.component';
import { CallsComponent } from './calls-list-component/calls.component';
import { ToolsListComponent } from './tools-list-component/tools-list.component';
import { ToolComponent } from './tool-component/tool.component';

import { AsnisService } from './services/asnis-service/asnis.service';
import { AsniService } from './services/asni-service/asni.service';


@NgModule({
  declarations: [
    AppComponent,
    AsniListComponent,
    AsniComponent,
    ToolsListComponent,
    ToolComponent,
    ShedListComponent,
    CallsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AsnisService,
    AsniService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
