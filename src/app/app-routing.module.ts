import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/note/dashboard',
    pathMatch: 'full'
  },
  // {
  //   path: 'knowledge',
  //   loadChildren: 'app/knowledge/knowledge.module#KnowledgeModule',
  //   data: { preload: true }
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
