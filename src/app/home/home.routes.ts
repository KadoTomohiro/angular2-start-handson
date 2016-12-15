import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ModuleWithProviders } from "@angular/core";

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'description', loadChildren: 'app/home/description/description.module#DescriptionModule'},
      {path: 'how-to-use', loadChildren: 'app/home/how-to-use/how-to-use.module#HowToUseModule'},
    ]
  }
];

export const homeRoutingProviders: any[] = [];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
