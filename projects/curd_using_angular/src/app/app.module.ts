import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveStudentComponent } from './save-student/save-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SaveStudentComponent,
    StudentListComponent,
    StudentHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [StudentHomeComponent]
})
export class AppModule { }
