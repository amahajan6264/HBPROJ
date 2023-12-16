import { Component } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent {
  public InsertClicked(e:any){
    document.write(`
      Button ID         :${e.target.id}<br>
      Button Name       :${e.target.name}<br>
      Button ClassName  :${e.target.className}<br>
      X Position        :${e.clientX}<br>
      Y Position        :${e.clientY}<br>
      Ctrl Key          :${e.ctrlKey}<br>
      keyCode           :${e.keycode};
    `)
  }
}
