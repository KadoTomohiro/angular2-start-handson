import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from './wiki.component';
import { wikiRouting, wikiRoutingProviders } from "./wiki.routes";
import { FormsModule } from "@angular/forms";
import { MarkdownPipe } from "../markdown.pipe";

//noinspection JSUnusedGlobalSymbols
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    wikiRouting
  ],
  declarations: [
    WikiComponent,
    MarkdownPipe
  ],
  providers: [
    wikiRoutingProviders
  ]
})
export class WikiModule { }
