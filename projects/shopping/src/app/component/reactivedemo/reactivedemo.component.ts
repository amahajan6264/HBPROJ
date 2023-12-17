import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactivedemo',
  templateUrl: './reactivedemo.component.html',
  styleUrls: ['./reactivedemo.component.css']
})
export class ReactivedemoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public frmRegister=this.fb.group({
     UserName : this.fb.control('',[Validators.required,Validators.maxLength(4),Validators.max(15)]),
     Mobile : this.fb.control('',[Validators.required,Validators.pattern(/\+91\d{10}/)])
  });

  get Accessor(){
    return this.frmRegister.get('UserName') as FormControl;
  }

  ngOnInit(): void {

  }

}
