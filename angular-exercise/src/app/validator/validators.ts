import { FormControl, FormGroup } from '@angular/forms';

export function mobileValidator(control: FormControl): any {
  var regex = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = regex.test(control.value);
  console.log('The phone number validation result is: ' +valid);
  return valid? null: {mobile: true};
}

export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get('password') as FormControl;
  let pconfirm: FormControl = group.get('pconfirm') as FormControl;
  let valid: boolean = (password.value === pconfirm.value);
  console.log('Password match? ' +valid);
  return valid? null: {equal: true};
}