import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form: FormGroup;
  detail: any;
  projects: []

  formErrors = {
    'name': ''
  };

  constructor(
    private fb: FormBuilder,
    private githubService: GithubService
  ) {
    this.createForm();
   }

  ngOnInit(): void {
  }
  
  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]]
    });
  }

  onSubmit() {
    this.detail = this.form.value;
    this.githubService.getUsersRepo(this.detail.name).subscribe(
      (projects) => this.projects = projects,
      (error) => { 
        if (error.status=='404') { alert('User not found') }      
      }
      );
  }

}
