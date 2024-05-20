import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-group',
  templateUrl: './address-group.component.html',
  styleUrls: ['./address-group.component.css'],
})
export class AddressGroupComponent implements OnInit, OnDestroy {
  @Input() controlKey = '';
  @Input() title = '';
  @Input() form!: FormGroup;

  get parentFormGroup() {
    return this.form;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(
      this.controlKey,
      new FormGroup({
        zipCode: new FormControl(''),
        street: new FormControl(''),
      })
    );
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlKey);
  }

  get address() {
    return this.parentFormGroup.get(this.controlKey) as FormGroup;
  }
}
