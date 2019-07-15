import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
      mobile: ['', this.mobileValidator],
      passwordsGroup: this.fb.group({
        password: [''],
        pconfirm: ['']
      }, {validator: this.equalValidator})
    });
  }

  onSubmit() {
    let isValid: boolean = this.formModel.get('username').valid;
    console.log('User name is valid? ' + isValid);
    let errors: any = this.formModel.get('username').errors;
    console.log('The user name of error information is: ' + JSON.stringify(errors));
    console.log(this.formModel.value);
  }

  mobileValidator(control: FormControl): any {
    var regex = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = regex.test(control.value);
    console.log('The phone number validation result is: ' +valid);
    return valid? null: {mobile: true};
  }

  equalValidator(group: FormGroup): any {
    let password: FormControl = group.get('password') as FormControl;
    let pconfirm: FormControl = group.get('pconfirm') as FormControl;
    let valid: boolean = (password.value === pconfirm.value);
    console.log('Password match? ' +valid);
    return valid? null: {equal: true};
  }

}
