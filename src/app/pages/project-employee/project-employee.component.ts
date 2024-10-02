import { Component, inject, OnInit, signal } from '@angular/core';
import { Iproject, IProjectEmployer } from '../../model/interface/master';
import { MasterService } from '../../service/master.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../../model/class/Employee';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-project-employee',
  standalone: true,
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './project-employee.component.html',
  styleUrl: './project-employee.component.scss'
})
export class ProjectEmployeeComponent  implements OnInit{


  ngOnInit(): void {
    this.getAllData();
  }
  constructor(){
    this.initializeForm();
    console.log(this.masterService.getAllProject().subscribe({
      next:(res:any)=>{
     console.log(res);
      }
    }));
    this.projectList$ = this.masterService.getAllProject();
    this.empList$ = this.masterService.getAllEmployee();
  }

  initializeForm(){
    this.form = new FormGroup({
    empProjectId: new FormControl(0),
      projectId: new FormControl(0),
      empId: new FormControl(0),
      assignedDate: new FormControl(''),
      role: new FormControl(''),
      isActive: new FormControl(false)
    })
  }

  projectEmployeeList = signal<IProjectEmployer[]>([]);
  masterService = inject(MasterService);
 form:FormGroup = new FormGroup({});
 projectList$ : Observable<Iproject[]> = new Observable<Iproject[]>;
 empList$:Observable<Employee[]> = new Observable<Employee[]>()



getAllData() {
  this.masterService.getAllProjectEmployee().subscribe({
    next:(res:IProjectEmployer[])=>{
      this.projectEmployeeList.set(res);
      console.log(res);
    },
    error:()=>{},
    complete(){}
  });
}

onEdit(id:number){

}
onDelete(id:number){
}

onSave(){
  const formValue = this.form.value;
  this.masterService.createProjectEmployee(formValue).subscribe({
    next:(res:Iproject)=>{
console.log('Project created !')
this.form.reset();
this.getAllData();
    },
    error:()=>{

    },
    complete(){

    }
  })
}

}
