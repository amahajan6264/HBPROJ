import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, Validator } from '@angular/forms';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-save-student',
  templateUrl: './save-student.component.html',
  styleUrls: ['./save-student.component.css']
})
export class SaveStudentComponent implements OnInit {

  constructor(private fb: FormBuilder, private studentservice: StudentService) { }

  progress:number=100;

  
  student: Student = new Student();
  submitted: boolean = false;
  dataSave: any;

  public frmSave = this.fb.group({
    StudentName: this.fb.control('', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
    StudentEmail: this.fb.control('', [Validators.required, Validators.email]),
    StudentAddress: this.fb.control('', [Validators.required]),
    StudentCourse: this.fb.control('', [Validators.required])
  });


  progress1(){

  }

  ngOnInit(): void { }


  saveStudent(frmdata: any) {
    this.student = new Student();
    this.student.studentName = this.StudentName.value;
    this.student.studentEmail = this.StudentEmail.value;
    this.student.studentAddress = this.StudentAddress.value;
    this.student.studentCourse = this.StudentCourse.value;
    this.save();
  }

  save() {
    this.studentservice.saveStudent(this.student)
      .subscribe(data => {
        this.submitted = true;
        this.dataSave = data;
      });
    this.frmSave.reset();
    setTimeout(() => {
      this.submitted = false;
    }, 3000);

  }
  get StudentName() {
    return this.frmSave.get('StudentName') as FormControl;
  }

  get StudentEmail() {
    return this.frmSave.get('StudentEmail') as FormControl;
  }

  get StudentCourse() {
    return this.frmSave.get('StudentCourse') as FormControl;
  }
  get StudentAddress() {
    return this.frmSave.get('StudentAddress') as FormControl;
  }
}
