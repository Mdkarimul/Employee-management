import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../model/interface/master';
import { Observable } from 'rxjs';
import { IsActiveMatchOptions } from '@angular/router';
import { Employee } from '../model/class/Employee';
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl :string = 'https://projectapi.gerasim.in/api/EmployeeManagement';
  constructor(private http:HttpClient) { }

    

  getAllParentDepartment():Observable<IApiResponse>{
    return this.http.get<IApiResponse>(`${this.apiUrl}/GetParentDepartment`);
  }

  getAllChildDepartmentById(departmentId:number):Observable<IApiResponse>{
    alert(departmentId);
  return this.http.get<IApiResponse>(`${this.apiUrl}/GetChildDepartmentByParentId?deptId=${departmentId}`);
  }


  saveEmployee(data:Employee):Observable<IApiResponse>{
   return this.http.post<IApiResponse>(`${this.apiUrl}/CreateEmployee`,data);
  }

  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(`https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees`);
  }

  deleteEmployee(empId:number){
    return this.http.delete(`${this.apiUrl}/DeleteEmployee/${empId}`);
  }

  updateEmployee(empObj:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.apiUrl+"/UpdateEmployee/"+empObj.employeeId,empObj);

  }
  

}
