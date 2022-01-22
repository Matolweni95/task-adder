import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-adder';
  test:any;
  list:any[] = [];

  myForm!: FormGroup;

  constructor (private fb: FormBuilder){
    this.myForm = this.fb.group({
      name: [''], 
      
      });
  }
  

  res(){
    let type = (<HTMLInputElement>document.getElementById('a')).value;
    this.test = type;
    this.list.push(this.test);
    this.myForm.reset();
 

  }
}
