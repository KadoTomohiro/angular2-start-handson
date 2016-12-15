import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description.component';
import { descriptionRouting, descriptionPoutingProviders } from "./description.routes";

//noinspection JSUnusedGlobalSymbols
@NgModule({
  imports: [
    CommonModule,
    descriptionRouting
  ],
  declarations: [DescriptionComponent],
  providers: [
    descriptionPoutingProviders
  ]
})
export class DescriptionModule { }
