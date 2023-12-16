import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() public ElectronicsCount:number=0;
  @Input() public  JweleryCount:number=0;
  @Input() public  MensCount:number=0;
  @Input() public  WomensCount:number=0;

  @Output() public FilterChanged:EventEmitter<string> = new EventEmitter<string>();

  public ButtonClick(e:any){
    alert(e.target.name);
    this.FilterChanged.emit(e.target.name);
  }
  
}
