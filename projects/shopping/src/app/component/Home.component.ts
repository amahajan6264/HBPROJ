import { Component } from "@angular/core";

@Component({

    selector:'app-home',
    template:`<h2>{{title}}</h2><p>Welcome to Angular</p>`
})
export class HomeComponent{
    public title:string ="Home Page";
}