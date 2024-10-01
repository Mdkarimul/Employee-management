import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../../model/class/Employee';
import { MasterService } from '../../service/master.service';
import { AsyncPipe } from '@angular/common';
import { Iproject } from '../../model/interface/master';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent {


  projectForm : FormGroup = new FormGroup({});
  masterService = inject(MasterService);
  empList$ : Observable<Employee[]>  = new Observable<[]>;
  activatedRoute = inject(ActivatedRoute);

  constructor(){
    this.empList$ = this.masterService.getAllEmployee();
    this.initializeForm();
    this.activatedRoute.params.subscribe((res:any)=>{
      if(res.id !== 0){
      this.getProjectById(res.id);
      }
    })
  }
  initializeForm(data?:Iproject){
    this.projectForm = new FormGroup({
      projectId: new FormControl(data ? data.projectId : 0),
      projectName: new FormControl(data ? data.projectName : '',[Validators.required]),
      clientName: new FormControl(data ? data.clientName : '',[Validators.required]),
      startDate: new FormControl(data ? data.startDate : '',[Validators.required]),
      leadByEmpId: new FormControl(data ? data.leadByEmpId : 0,[Validators.required]),
      contactPerson: new FormControl(data ? data.contactPerson : '',[Validators.required]),
      contactNo: new FormControl(data ? data.contactNo : '',[Validators.required]),
      emailId: new FormControl(data ? data.emailId : '',[Validators.required]),
    })
  }

  getProjectById(id:number){
    this.masterService.getProjectById(id).subscribe({
      next:(res:Iproject)=>{
        this.initializeForm(res);
      },
      error:()=>{},
      complete(){}
    });
  }


  onSaveProject(){
    const formValue = this.projectForm.value;
    this.masterService.saveProject(formValue).subscribe({
      next:(res:Iproject)=> {
       this.projectForm.reset();
      },
      error(error){
       console.log(error);
      },
      complete() {
      }
    })
  }

  onUpdateProject(){
    const formValue = this.projectForm.value;
    this.masterService.updateProject(formValue).subscribe({
      next:(res:Iproject)=> {
        console.log(res,"Project updated !");
       this.projectForm.reset();
      },
      error(error){
       console.log(error);
      },
      complete() {
      }
    })
  }





}
