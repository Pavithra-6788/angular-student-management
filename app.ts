import { Component } from '@angular/core';
import { StudentForm } from './student-form/student-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}