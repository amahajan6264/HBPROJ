import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { SaveStudentComponent } from './save-student/save-student.component';
const routes: Routes = [
  {path:'' , component : StudentListComponent},
  {path:'add-student',component:SaveStudentComponent},
  {path:'view-student',component:StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
