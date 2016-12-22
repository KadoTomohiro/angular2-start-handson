import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issue.component';
import { issueRouting, issueRoutingProviders } from "./issue.routes";
import { IssueDetailComponent } from "./issue-detail/issue-detail.component";
import { IssueInputComponent } from "./issue-input/issue-input.component";
import { IssueListComponent } from "./issue-list/issue-list.component";
import { IssueStore } from "./issue.store";
import { FormsModule } from "@angular/forms";

//noinspection JSUnusedGlobalSymbols
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    issueRouting
  ],
  declarations: [
    IssueComponent,
    IssueDetailComponent,
    IssueInputComponent,
    IssueListComponent
  ],
  providers: [
    issueRoutingProviders,
    IssueStore
  ]
})
export class IssueModule { }
