import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { VagonFormComponent } from './vagon-form/vagon-form.component';
import { BooksmarketComponent } from './booksmarket/booksmarket.component';
import { OrderingComponent } from './ordering/ordering.component';
import { OrderShowingComponent } from './order-showing/order-showing.component';
import {BucketService} from "./services/books.service";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    VagonFormComponent,
    BooksmarketComponent,
    OrderingComponent,
    OrderShowingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'counter', component: CounterComponent},
      {path: 'fetch-data', component: FetchDataComponent},
      {path: 'vagon-form', component: VagonFormComponent},
      {path: 'booksmarket', component: BooksmarketComponent},
      {path: 'ordering', component: OrderingComponent},
      {path: 'ordershowing', component: OrderShowingComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [BucketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
