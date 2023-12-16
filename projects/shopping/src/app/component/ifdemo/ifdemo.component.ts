import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent {
    public viewName:String="";

  public changeView(event:any){
    this.viewName=event.target.name;
  }
  public selectView(val:String){
    this.viewName=val;
  }
}
