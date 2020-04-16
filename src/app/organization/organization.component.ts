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
  detail: any;
  projects: [];

  formErrors = {
    'name': ''
  };

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
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]]
    });
  }

  onSubmit() {
    this.detail = this.orgform.value;
    this.githubService.getOrgsRepo(this.detail.name).subscribe(
      (projects) => this.projects = projects,
      (error) => { 
        if (error.status=='404') { alert('Organization not found');}      
      }     
      );
  }
}
