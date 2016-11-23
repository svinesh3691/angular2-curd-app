import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { RoutingModule }        from '../modules/routing.module';


import { AppComponent }         from '../components/app.component';
import { HomeComponent }        from '../components/home/home.component';
import { AboutComponent }       from '../components/about/about.component';
import { ListComponent }        from '../components/curd/list.component';
import { EditComponent }        from '../components/curd/edit.component';
import { AddComponent }         from '../components/curd/add.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ListComponent,
    AddComponent,
    EditComponent,
  ],
  
  providers: [],
  
  bootstrap: [ AppComponent ]
})


export class AppModule { }
