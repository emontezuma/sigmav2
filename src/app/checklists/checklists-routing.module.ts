import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './pages/checklist/checklist.component';
import { ChecklistsComponent } from './pages/checklists/checklists.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: ':id',
        component: ChecklistComponent
      },
      {
        path: '**',
        component: ChecklistsComponent
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChecklistsRoutingModule { }
