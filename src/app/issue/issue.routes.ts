import { Routes, RouterModule } from "@angular/router";
import { IssueComponent } from "./issue.component";
import { ModuleWithProviders } from "@angular/core";

const issueRoutes: Routes = [
  {
    path: '',
    component: IssueComponent
  }
];

export const issueRoutingProviders: any[] = [];

export const issueRouting: ModuleWithProviders = RouterModule.forChild(issueRoutes);
