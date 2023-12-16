import { Component } from '@angular/core';

@Component({
  selector: 'app-bindingdata',
  templateUrl: './bindingdata.component.html',
  styleUrls: ['./bindingdata.component.css']
})
export class BindingdataComponent {

  public Product : any ={};

  public LoadProduct() : void{
    fetch("https://fakestoreapi.com/products/1")
    .then(Response=>Response.json())
    .then(data =>{
      this.Product=data;
    });
  }

  constructor(){}

  ngOnInit():void{
    this.LoadProduct();
  }

}
