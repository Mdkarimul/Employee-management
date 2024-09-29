import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent {


  projectForm : FormGroup = new FormGroup({});

  constructor(){
    this.initializeForm();
  }
  initializeForm(){
    this.projectForm = new FormGroup({
      projectId: new FormControl(),
      projectName: new FormControl('',[Validators.required]),
      clientName: new FormControl('',[Validators.required]),
      startDate: new FormControl('',[Validators.required]),
      leadByEmpId: new FormControl('',[Validators.required]),
      contactPerson: new FormControl('',[Validators.required]),
      contactNo: new FormControl('',[Validators.required]),
      emailId: new FormControl('',[Validators.required]),
    })
  }

}
