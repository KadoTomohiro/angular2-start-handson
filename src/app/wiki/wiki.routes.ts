import { Routes, RouterModule } from "@angular/router";
import { WikiComponent } from "./wiki.component";
import { ModuleWithProviders } from "@angular/core";

const wikiRoutes: Routes = [
  {
    path: '',
    components: WikiComponent
  }
];

export const wikiRoutingProviders: any[] = [];

export const wikiRouting: ModuleWithProviders = RouterModule.forChild(wikiRoutes);
