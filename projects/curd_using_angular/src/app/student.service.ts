import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';  
import { Observable, map } from 'rxjs';  
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class StudentService { 
 
  secretKey:string = 'YourSecretKey';

  private baseUrl = 'http://127.0.0.1:8080/api/v1/'; 

  constructor(private http:HttpClient) { }

   getStudentList(): Observable<any> {  
     return this.http.get<any[]>(`${this.baseUrl}`+'students');  
   }  

  getStudentList1():Observable<Student[]>{
    return this.http.get<any[]>(`${this.baseUrl}`+'students').pipe(
      map((response:any)=>{
        return response.map((item:any)=>{
          let student1=new Student();
          student1.studentName=item.studentName;
          student1.studentCourse=item.studentCourse;
          student1.studentEmail=item.studentEmail;
          student1.id=item.id;
          student1.studentAddress=item.studentAddress;
        })
      })
    )
  }

  saveStudent(student: Student) {
    //return this.http.post(`${this.baseUrl}`+'students', student)  
    return this.http.post(`${this.baseUrl}`+'students',CryptoJS.AES.encrypt(JSON.stringify(student),this.secretKey).toString())
  }

  deleteStudent(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/student/${id}`, { responseType: 'text' });  
  }  
}
