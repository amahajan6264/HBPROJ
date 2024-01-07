import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class StudentService {
 

  private baseUrl = 'http://127.0.0.1:8080/api/v1/'; 

  constructor(private http:HttpClient) { }

  getStudentList(): Observable<any> {  
    return this.http.get<any[]>(`${this.baseUrl}`+'students');  
  }  

  saveStudent(student: Student) {
    return this.http.post(`${this.baseUrl}`+'students', student)  
  }

  deleteStudent(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/student/${id}`, { responseType: 'text' });  
  }  
}
