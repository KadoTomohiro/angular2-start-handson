import { Routes, RouterModule } from "@angular/router";
import { HowToUseComponent } from "./how-to-use.component";
import { ModuleWithProviders } from "@angular/core";

const houToUseRoute: Routes = [
  {
    path: '',
    component: HowToUseComponent
  }
];

export const howToUseRoutingProviders: any[] = [];

export const howToUseRouting: ModuleWithProviders = RouterModule.forChild(houToUseRoute);
