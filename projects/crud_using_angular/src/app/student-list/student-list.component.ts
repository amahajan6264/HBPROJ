import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  message:String=``;
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject(); 
  public students: any[] = [];
  deleteFlag:boolean=false;
  constructor(private studentservice: StudentService) {}

  ngOnInit(): void {
    this.dtOptions = { 
      pagingType: 'full_numbers', 
      pageLength: 5,  
      searching:true,
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    }; 
    this.studentservice.getStudentList().subscribe(data => {
        this.students = data;
        this.dtTrigger.next(this.students);
    });

  }

  trackById(index: number, students: any): any {
    return students.id;   
  }

  updateStudent(updstu:number){
    
  }

  deleteStudent(delstu:number){
    if(confirm("You want to delete the student")){
      this.message=delstu+" : Student is deleted successfully";
      this.studentservice.deleteStudent(delstu)  
      .subscribe(  
        data => {  
          this.deleteFlag=true;  
          this.studentservice.getStudentList().subscribe(data =>{  
            this.students =data  
            })  
        }); 
       
      }else{
        this.deleteFlag=true;
        this.message=delstu+" : Student is deletion is canceled";
      }
      setTimeout(() => {
        this.deleteFlag = false;
      }, 3000);
  }



}
