import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'app-root',
  styleUrls: ['app-component.css'],
  templateUrl: 'app-component.html',
})
export class AppComponent implements OnInit {
  form: FormGroup = this.fb.group({
    displayName: ['', [Validators.required]],
    gender: ['', [Validators.required]],
  });

  genders = ['Male', 'Female'];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.setupListner();
  }

  setupListner() {
    (<FormControl>this.form.get('gender')).valueChanges.subscribe(
      (newValue) => {
        console.log(newValue);
        const billingAddress = this.form.get('deliveryAddress') as FormGroup;
        console.log(billingAddress);
        const zipCode = billingAddress.get('zipCode') as FormControl;
        console.log(zipCode.value);
      }
    );
  }

  submit() {
    console.log(this.form.valid);
    console.log(this.form.value);
  }
}
