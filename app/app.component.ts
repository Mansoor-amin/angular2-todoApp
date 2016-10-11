import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/template/main.html'
})
export class AppComponent {
    list: Array<string> = ['item 01','item 02','item 03','item 04','item 05']
    inputItem: string = 'helllo' 
    add(){
      this.list.push(this.inputItem);
      this.inputItem = ""
    };
    remove(index){
      this.list.splice(index,1);
    }

 };
