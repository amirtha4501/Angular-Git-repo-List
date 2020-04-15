import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  orgform: FormGroup;
  det: any;
  projects: [];

  formErrors = {
    'name': ''
  };
  validationMessages = {
    'name' : {
      'required' : 'name is required',
      'minlength' : 'name must be at least 2 characters long',
      'maxlength' : 'name cannot be more than 25 characters'
    }
  }

  constructor(
    private fb: FormBuilder,
    private githubService: GithubService
  ) {
    this.createOrgForm();
   }

  ngOnInit(): void {
  }
  
  createOrgForm() {
    this.orgform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]]
    });
    this.orgform.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.orgform) { return; }
    const form = this.orgform;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.det = this.orgform.value;
    console.log(this.det.name, " parent comp ts");
    this.githubService.users(this.det.name).subscribe(
      (projects) => this.projects = projects,
      (error) => { 
        if (error.status=='404') { alert('Organization not found');}      
      }     
      );
  }
}
