import {Routes, RouterModule} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
  {path: 'issue', loadChildren: 'app/issue/issue.module#IssueModule'},
  {path: 'wiki', loadChildren: 'app/wiki/wiki.module#WikiModule'},
  {path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
