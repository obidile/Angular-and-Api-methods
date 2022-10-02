import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OwnModel } from '../models/own-model';
import { OwnService } from '../services/own.service';

@Component({
  selector: 'app-own-form',
  templateUrl: './own-form.component.html',
  styleUrls: ['./own-form.component.scss']
})
export class OwnFormComponent implements OnInit {
  @Input() formData: OwnModel = new OwnModel();
  requestForm = new FormGroup({})

  constructor(public activeModal: NgbActiveModal, private ownService: OwnService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.requestForm = new FormGroup({
      firstName: new FormControl(this.formData?.firstName || '', [Validators.required]),
      lastName: new FormControl(this.formData?.lastName || '', [Validators.required]),
      emailAddress: new FormControl(this.formData?.emailAddress || '', [Validators.required, Validators.email]),
      country: new FormControl(this.formData?.country || '', [Validators.required]),
      state: new FormControl(this.formData?.state || '', [Validators.required]),
      branch: new FormControl(this.formData?.branch || '', [Validators.required]),
    });
  }

  onFormSubmit() {
    // console.warn(this.requestForm.value);
    if (this.requestForm.valid) {
      var formData = this.requestForm.value;
      if (this.formData?.id) {
        this.ownService.edit(formData);
      } else {
        formData.id = this.ownService.data.length + 1;
        this.ownService.create(formData);
      }
      this.activeModal.close();
      alert('Saved successfully.')
    }
    else {
      alert('not successfully');
    }
  }

  get form(): any { return this.requestForm.controls; };
}
