import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import {
  IApiResponse,
  IChildDepartment,
  IParentDeparment,
} from '../../model/interface/master';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/class/Employee';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent implements OnInit {

  masterService = inject(MasterService);
  parentDepartmentList = signal<IParentDeparment[]>([]);
  childDepartmentList = signal<IChildDepartment[]>([]);
  parentDeparmentId: number = 0;
  childDepartmentId: number = 0;
  employeeObj: Employee = new Employee();
  isFormVisible = signal<boolean>(false);
  employeeList = signal<Employee[]>([]);

  // Constructor function
  constructor() {}

  // Ngoninit function
  ngOnInit(): void {
    this.getParentDeparment();
    this.getAllEmployee();
  }

  // Get parent department
  getParentDeparment() {
    this.masterService
      .getAllParentDepartment()
      .subscribe((data: IApiResponse) => {
        this.parentDepartmentList.set(data.data);
      });
  }

  // Get all child departmentByParentId
  onParentDepartmentChange() {
    alert(this.parentDeparmentId);
    this.masterService
      .getAllChildDepartmentById(this.parentDeparmentId)
      .subscribe((result: any) => {
        console.log(result);
        this.childDepartmentList.set(result.data);
      });
  }

  onChildDepartmentChange() {}

  //Create new employee
  onSave() {
    this.masterService.saveEmployee(this.employeeObj).subscribe(
      (data: IApiResponse) => {
        console.log(data, ' Employee created !');
        this.getAllEmployee();
        this.employeeObj = new Employee();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Update employee
  onUpdate(){
    this.masterService.updateEmployee(this.employeeObj).subscribe({
      next:(res:Employee)=>{
        console.log("Employee updated susccessfully !");
        this.getAllEmployee();
        this.employeeObj = new Employee();
      },
      error:(error)=>{
    console.log(error);
      },
      complete(){
     console.log('Complete !');
      }
    })
  }

  //Get all employee
  getAllEmployee() {
    this.masterService.getAllEmployee().subscribe({
      next:(res:Employee[])=>{
        this.employeeList.set(res);
        console.log(res);
      },
      error(error) {
      console.log(error);
      }
    });
  }

  // Delete employee 
  deleteEmployee(empId:number){
    const isDelete = confirm("Are you sure ?");
    if(isDelete){
      this.masterService.deleteEmployee(empId).subscribe({
        next:(res)=> {
     console.log('Employee deleted successfully !');
       this.getAllEmployee();
        },
        error:(error)=>{
         console.log("Failed to delete employee", error);
        },
        complete(){
        }
      })
    }

  }


  //Edit employee
  editEmployee(empObj:Employee){
    console.log(empObj);
    this.employeeObj = empObj;
    this.isFormVisible.set(true);
  }
}
