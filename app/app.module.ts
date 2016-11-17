import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent }        from './app.component';
import { DashboardComponent }     from './dashboard.component';
import { HeroDetailsComponent } from './hero-details.component';
import { HeroListComponent } from './herolist.component';
import { MainViewComponent }     from './mainview.component';
import { HeroService }         from './hero.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing],
  //declarations: [ AppComponent, TodosComponent ],
  //bootstrap:    [ AppComponent, TodosComponent ]
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailsComponent,
    HeroListComponent,
    MainViewComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
