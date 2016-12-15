import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowToUseComponent } from './how-to-use.component';
import { howToUseRoutingProviders, howToUseRouting } from "./how-to-use.routes";

//noinspection JSUnusedGlobalSymbols
@NgModule({
  imports: [
    CommonModule,
    howToUseRouting
  ],
  declarations: [HowToUseComponent],
  providers: [
    howToUseRoutingProviders
  ]
})
export class HowToUseModule { }
