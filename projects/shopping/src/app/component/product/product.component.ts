import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public Product: any[] = [];
  public ElectronicsCount: number = 0;
  public JweleryCount: number = 0;
  public MensCount: number = 0;
  public WomensCount: number = 0;


  public LoadProduct(url: string) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.Product = data;
        
        // this.ElectronicsCount = data.filter(function (product: any) {
        //   return product.category == "electronics";
        // }).length;
        
        // this.JweleryCount = data.filter(function (product: any) {
        //   return product.category == "jewelery";
        // }).length;
        
        // this.MensCount = data.filter(function (product: any) {
        //   return product.category == "men's clothing";
        // }).length;
        
        // this.WomensCount = data.filter(function (product: any) {
        //   return product.category == "women's clothing";
        // }).length;
      })
  }
  

  ngOnInit(): void {
    this.LoadProduct('http://fakestoreapi.com/products');
    fetch(`http://fakestoreapi.com/products`)
    .then(reponse=>reponse.json())
    .then(data=>{
      this.Product=data;
      alert(this.Product);
    });

  }

  public GetCategory(e:string){
    this.LoadProduct(`http://fakestoreapi.com/products/category/${e}`);
  }
}
