import { Routes } from '@angular/router'

export const routes: Routes = [
 { path: "", pathMatch: "full", redirectTo: "" },
 { path: "", loadComponent: () => import("./layout/layout.component").then(c => c.LayoutComponent) },
 { path: ":portfolio_name", loadComponent: () => import("./layout/layout.component").then(c => c.LayoutComponent) },
 { path: "**", redirectTo: "" }
]