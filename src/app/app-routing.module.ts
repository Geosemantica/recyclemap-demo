import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewerComponent } from "@app/viewer/viewer.component";
import { RcCommentsComponent } from "@app/viewer/modules/comments/comments.component";
import { RcUiKitDemoComponent } from "@app/viewer/modules/ui-kit/ui-kit-demo.component";
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ui-kit-demo',
    pathMatch: "full"
  },
  {
    path: 'comments-demo',
    component: ViewerComponent,
    children: [
      {
        path: '',
        component: RcCommentsComponent,
        loadChildren: () => import('./viewer/modules/comments/comments.module').then(mod => mod.RcCommentsModule)
      }
    ]
  },
  {
    path: 'ui-kit-demo',
    component: RcUiKitDemoComponent,
    loadChildren: () => import('./viewer/modules/ui-kit/ui-kit-demo.module').then(mod => mod.RcUiKitDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { canceledNavigationResolution: 'computed' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
