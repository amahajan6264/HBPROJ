import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { SaveStudentComponent } from './save-student/save-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    StudentHomeComponent,
    SaveStudentComponent,
    StudentListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [StudentHomeComponent]
})
export class AppModule { }
