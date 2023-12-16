
import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() public MessageFromParent:String='';
 @Input() public ProductDetail:any={};
 @Output() public ChildClick:EventEmitter<string> = new EventEmitter<string>(); 

  public onButtonClick(){
    this.ChildClick.emit('From child comonent');
  }
}
