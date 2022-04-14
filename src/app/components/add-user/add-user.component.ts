import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output()
  onAdd: EventEmitter<User> = new EventEmitter<User>();

  name = '';
  age = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    const newUser = {
      name: this.name,
      age: this.age
    };
    this.onAdd.emit(newUser);
  }

}
