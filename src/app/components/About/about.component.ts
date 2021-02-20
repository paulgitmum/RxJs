import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public myTodo: any;
  public newInput: any;

  constructor(private service: ServiceService) {}

  public onChangeHandler($e: any) {
    const newTodo = $e.target.value;
    const newObj = {id:Math.floor(Math.random() * 100), name: newTodo };
    this.newInput = newObj;
  }

  public addToDo() {
    
    this.myTodo = [...this.myTodo, this.newInput];
    this.newInput ={id:'',name:''}
    console.log(this.myTodo);

  }

  public deleteHandler(id: string) {

    const filtered = this.myTodo.slice(id)

    // const filtered = this.myTodo.filter((todo: any) => {
    //   if (todo.id !== id) {
    //     return todo;
    //   }
    // });
    this.myTodo = filtered;


  }

  ngOnInit(): void {
    this.service.getTodo().subscribe((data) => {
      this.myTodo = data;
    });
  }
}
