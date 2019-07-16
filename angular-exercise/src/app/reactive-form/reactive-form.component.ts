import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { mobileValidator, equalValidator } from '../validator/validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public formModel: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formModel = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator],
      passwordsGroup: this.fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidator})
    });
  }

  onSubmit() {
    // let isValid: boolean = this.formModel.get('username').valid;
    // console.log('User name is valid? ' + isValid);
    // let errors: any = this.formModel.get('username').errors;
    // console.log('The user name of error information is: ' + JSON.stringify(errors));
    // console.log(this.formModel.value);
    if(this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

}
