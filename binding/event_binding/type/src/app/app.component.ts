import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'type';
  svalue: string='';
 
  searchvalue(eventData: any)
  {
   // console.log((<HTMLInputElement>eventData.target).value);
   this.svalue=(<HTMLInputElement>eventData.target).value;
  }
}
