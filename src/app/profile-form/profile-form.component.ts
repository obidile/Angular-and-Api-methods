import { formatDate } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileModel } from '../models/profile-model';
import { profileService } from '../services/profile.service'


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  @Input() formData: ProfileModel = new ProfileModel();
  requestForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private profileService: profileService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    var gender = (this.formData?.gender) ? (this.formData?.gender?.toLowerCase() == 'male' || this.formData?.gender?.toLowerCase() == 'female') ? this.formData?.gender : 'Others' : '';

    var dob = (this.formData.dateOfBirth) ? formatDate(this.formData?.dateOfBirth, 'yyyy-MM-dd', 'en-US') : '';

    this.requestForm = new FormGroup({
      firstName: new FormControl(this.formData?.firstName || '', [Validators.required]),
      lastName: new FormControl(this.formData?.lastName || '', [Validators.required]),
      email: new FormControl(this.formData?.email || '', [Validators.required, Validators.email]),
      phoneNumber: new FormControl(this.formData?.phoneNumber || '', [Validators.required, Validators.minLength(11)]),
      dateOfBirth: new FormControl(dob || '', [Validators.required]),
      gender: new FormControl(gender || '', [Validators.required])
    });
  }

  onFormSubmit() {
    console.warn(this.requestForm.value);
    if (this.requestForm.valid) {
      var formData = this.requestForm.value;
      var service;
      if (this.formData?.id) {
        service = this.profileService.edit(this.formData.id, formData);
      } else {
        service = this.profileService.create(formData);
      }

      service.subscribe((data) => {
        if (data) {
          this.activeModal.close(data);
          alert('Saved successfully.');
        } else {
          alert('No value was returned.');
        }
      }, error => {
        console.log(error);
        alert('Error Occured');
      });
    }
    else {
      alert('Invalid form. Pls complete all required fields.');
    }
  }

  deleteRow(item: ProfileModel) {
    if (item) {
      var confirm = window.confirm('Want to delete?');
      if (confirm) {
        this.profileService.delete(item.id).subscribe(response => {
          console.log(response);
          alert('Removed successully');
        })
      }
    }
  }
  
  get form(): any { return this.requestForm.controls; };
}
