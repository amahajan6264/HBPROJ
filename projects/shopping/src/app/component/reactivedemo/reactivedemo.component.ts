import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactivedemo',
  templateUrl: './reactivedemo.component.html',
  styleUrls: ['./reactivedemo.component.css']
})
export class ReactivedemoComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public frmRegister = this.fb.group({
    UserName: this.fb.control('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
    Mobile: this.fb.control('', [Validators.required, Validators.pattern(/^\+91\d{10}$/)]),
    Photos : this.fb.array([this.fb.control('')])
  });

  public FormSubmit(formData : any) {
    confirm(JSON.stringify(formData))
    return 0;
  }
  get UserName() {
    return this.frmRegister.get('UserName') as FormControl;
  }

  get Mobile() {
    return this.frmRegister.get('Mobile') as FormControl;
  }

  get Photos(){
    return this.frmRegister.get('Photos') as FormArray;
  }
  public AddControls(){
    this.Photos.push(this.fb.control(''));
  }
  public RemoveClick(index : number){
    this.Photos.removeAt(index);
  }
  ngOnInit(): void {

  }

}
