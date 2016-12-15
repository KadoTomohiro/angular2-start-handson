import { DescriptionComponent } from "./description.component";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
const descriptionRoutes = [
  {
    path: '',
    component: DescriptionComponent
  }
];

export const descriptionPoutingProviders: any[] = [];

export const descriptionRouting: ModuleWithProviders = RouterModule.forChild(descriptionRoutes);
