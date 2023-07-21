import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.js'

@Component({
  selector: 'app-cursos',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CursosComponent implements OnInit {

  cursos: Course[] = [
    {_id: '1', name: 'Angular', category: 'front-end'}
  ];

  displayedColumns = ['name', 'category'];

  constructor(){
  }

  ngOnInit(): void {

  }

}
