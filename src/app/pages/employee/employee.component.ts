import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { IApiResponse, IChildDepartment, IParentDeparment } from '../../model/interface/master';
import { FormsModule } from '@angular/forms';
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
  childDepartmentId:number = 0;

  constructor() {}
  ngOnInit(): void {
    this.getParentDeparment();
  }

  getParentDeparment() {
    this.masterService
      .getAllParentDepartment()
      .subscribe((data: IApiResponse) => {
        this.parentDepartmentList.set(data.data);
      });
  }

  onParentDepartmentChange() {
    this.masterService
      .getAllChildDepartmentById(this.parentDeparmentId)
      .subscribe((result: IApiResponse) => {
        this.childDepartmentList.set(result.data);
      });
  }
  onChildDepartmentChange(){
    
  }

  isFormVisible = signal<boolean>(false);
}
