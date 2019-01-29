import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  constructor() { }
  @ViewChild('formTodo') form: NgForm;
  @Output() AddTodo = new EventEmitter();

  public todo = {
    title: '',
    text: ''
  };

  ngOnInit() {
  }

  /**
   * onSubmitHandler- обработчик события отправки формы.
   */
  onSubmitHandler() {
    this.AddTodo.emit(Object.assign({}, this.todo));
    this.form.resetForm();
  }
}
