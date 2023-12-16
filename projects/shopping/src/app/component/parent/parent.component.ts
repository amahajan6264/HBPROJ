import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public MessageToChild: string = "Waiting for message";
  public product:any={};
  public MessageFromChild:String='';
  public SendCick() {
    this.MessageToChild = "Hello ! from parent";
    this.product={
      Name : 'sumsung tv',
      Price :23000
    };
  }
  public GetMessageFromChild(e:string){
    this.MessageFromChild=e;
  }
}
