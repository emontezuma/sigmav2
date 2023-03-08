import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistsComponent } from './pages/checklists/checklists.component';
import { ChecklistComponent } from './pages/checklist/checklist.component';
import { ChecklistsRoutingModule } from './checklists-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ChecklistsComponent,
    ChecklistComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ChecklistsRoutingModule,
    MaterialModule
  ]
})
export class ChecklistsModule { }
