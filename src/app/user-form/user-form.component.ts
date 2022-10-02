import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from '../models/user-model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() formData: UserModel = new UserModel();
  requestForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private userService: UserService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.requestForm = new FormGroup({
      firstName: new FormControl(this.formData?.firstName || '', [Validators.required]),
      lastName: new FormControl(this.formData?.lastName || '', [Validators.required]),
      emailAddress: new FormControl(this.formData?.emailAddress || '', [Validators.required, Validators.email]),
      phoneNumber: new FormControl(this.formData?.phoneNumber || '', [Validators.required, Validators.minLength(11)]),
      dateOfBirth: new FormControl(this.formData?.dateOfBirth || '', [Validators.required]),
      gender: new FormControl(this.formData?.gender || '', [Validators.required]),
      isActive: new FormControl(this.formData?.isActive || '', [Validators.required]),
    });
  }

  onFormSubmit() {
    // console.warn(this.requestForm.value);
    if (this.requestForm.valid) {
      var formData = this.requestForm.value;
      if (this.formData?.id) {
        this.userService.edit(formData);
      } else {
        formData.id = this.userService.data.length + 1;
        this.userService.create(formData);
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
