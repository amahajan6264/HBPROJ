import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent implements OnInit {

  public  category:String[]=["Electronics","Footwear","Fashion"];
  public menu:any[]=[
    {catgory:"Electronics",products:["sumsung tv","mobile"]},
    {catgory:"Footwear",products:["Nike casual","Lee boot"]}
  ];
     ngOnInit(): void {
      
     }
     
}
