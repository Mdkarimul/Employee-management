import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../model/interface/master';
import { Observable } from 'rxjs';
import { IsActiveMatchOptions } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl :string = 'https://projectapi.gerasim.in/api/EmployeeManagement';
  constructor(private http:HttpClient) { }

    

  getAllParentDepartment():Observable<IApiResponse>{
    return this.http.get<IApiResponse>(`${this.apiUrl}+"/GetParentDepartment`);
  }
  getAllChildDepartmentById(departmentId:number):Observable<IApiResponse>{
  return this.http.get<IApiResponse>(`${this.apiUrl}/GetChildDepartmentByParentId?deptId=${departmentId}`);
  }
  

}
