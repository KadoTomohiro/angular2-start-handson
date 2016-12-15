import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRouting, homeRoutingProviders } from "./home.routes";

//noinspection JSUnusedGlobalSymbols
@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [HomeComponent],
  providers: [
    homeRoutingProviders
  ]
})
export class HomeModule { }
