import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CursosComponent } from './courses/courses.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatListModule,
    MatTableModule
  ]
})

export class CoursesModule { }
