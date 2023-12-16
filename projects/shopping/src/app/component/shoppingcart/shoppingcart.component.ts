import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  public Categories: String[] = [];
  public Products: any[] = [];
  public CartIteams: any[] = [];
  public CartCount: number = 0;
  public isCartVisible: boolean = false;
  public TotalAmount: number = 0;
  ngOnInit(): void {
    this.GetCategories();
    this.GetProducts("http://fakestoreapi.com/products/");
    this.GetCartCount();
  }

  public GetCartCount() {
    this.CartCount = this.CartIteams.length;
  }

  public GetCategories() {
    fetch("http://fakestoreapi.com/products/categories")
      .then(response => response.json())
      .then(data => {
        data.unshift("all");
        this.Categories = data;
      })
  }
  public GetProducts(url: string) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.Products = data;
      })
  }

  public CategoryChanged(e: any) {
    if (e.target.value == "all") {
      this.GetProducts(`http://fakestoreapi.com/products`);
    }
    else {
      this.GetProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
    }
  }

  public AddToCartClick(val: number) {
    fetch(`http://fakestoreapi.com/products/${val}`)
      .then(response => response.json())
      .then(data => {
        this.CartIteams.push(data);
        alert(`${data.title}\nAdded to Cart`);
        this.GetCartCount();
        this.GetAmount();
      })
  }
  public TogalCart() {
    this.isCartVisible = (this.isCartVisible == false) ? true : false;
    this.GetAmount();
  }

  public RemoveIteam(val: number) {
    var flag = confirm("Are you sure want to Delete?");
    if (flag == true) {
      this.CartIteams.splice(val, 1);
      this.GetCartCount();
      this.GetAmount();
    }
  }
  public GetAmount() {
    this.TotalAmount = 0;
    for (const obj of this.CartIteams) {
      this.TotalAmount += obj.price;
    }

  }
}

