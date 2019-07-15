import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public formModel: FormGroup;

  // constructor() { }

  // ngOnInit() {
  //   this.createForm();
  // }

  // createForm() {
  //   this.formModel = new FormGroup({
  //     username: new FormControl(),
  //     mobile: new FormControl(),
  //     passwordsGroup: new FormGroup({
  //       password: new FormControl(),
  //       pconfirm: new FormControl()
  //     })
  //   });
  // }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formModel = this.fb.group({
      username: [''],
      mobile: [''],
      passwordsGroup: this.fb.group({
        password: [''],
        pconfirm: ['']
      })
    });
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

}
