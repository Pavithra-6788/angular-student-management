import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-form.html',
  styleUrls: ['./student-form.css']
})

export class StudentForm {

  // Student Object

  student: any = {

    name: '',
    email: '',
    department: '',
    gender: '',
    age: '',
    phone: ''

  };

  // Array to Store Students

  students: any[] = [];

  // Edit Index

  editIndex: number = -1;

  // Constructor

  constructor() {

    this.loadStudents();

  }

  // Save Student

  saveStudent(form: any) {

    if (this.editIndex === -1) {

      // Add New Student

      this.students.push({ ...this.student });

    } else {

      // Update Student

      this.students[this.editIndex] = { ...this.student };

      this.editIndex = -1;

    }

    // Store Data in Local Storage

    localStorage.setItem(
      'students',
      JSON.stringify(this.students)
    );

    // Clear Form

    this.clearForm(form);

  }

  // Load Students from Local Storage

  loadStudents() {

    const data = localStorage.getItem('students');

    if (data) {

      this.students = JSON.parse(data);

    }

  }

  // Edit Student

  editStudent(index: number) {

    this.student = {

      ...this.students[index]

    };

    this.editIndex = index;

  }

  // Delete Student

  deleteStudent(index: number) {

    this.students.splice(index, 1);

    localStorage.setItem(
      'students',
      JSON.stringify(this.students)
    );

  }

  // Clear Form

  clearForm(form: any) {

    this.student = {

      name: '',
      email: '',
      department: '',
      gender: '',
      age: '',
      phone: ''

    };

    this.editIndex = -1;

    // Reset Validation

    form.resetForm();

  }

}