import { Component ,OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-servicedemo',
  templateUrl: './servicedemo.component.html',
  styleUrls: ['./servicedemo.component.css']
})
export class ServicedemoComponent implements OnInit{

  public Categories : string[] = [];
  public Products : any[] = [];
  constructor(private api:ApiService){}

  ngOnInit(){
    
    this.api.GetCategories()
    .subscribe(
      data => this.Categories=data
    );
    this.api.GetProducts()
    .subscribe(
      data=>this.Products=data
    );

  }

}
