import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-group',
  templateUrl: './contact-group.component.html',
})
export class ContactGroupComponent implements OnInit, OnDestroy {
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
        mobile: new FormControl(''),
        phone: new FormControl(''),
      })
    );
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.controlKey);
  }
}
