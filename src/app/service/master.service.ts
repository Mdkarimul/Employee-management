import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetDashboard, IApiResponse, Iproject, IProjectEmployer } from '../model/interface/master';
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

  saveProject(data:Employee):Observable<Iproject>{
    return this.http.post<Iproject>(`${this.apiUrl}/CreateProject`,data);
   }
  
   getAllProject():Observable<Iproject[]>{
    return this.http.get<Iproject[]>(`${this.apiUrl}/GetAllProjects`);
   }
   deleteProject(id:number) {
return this.http.delete(`${this.apiUrl}/DeleteProject/${id}`);
   }

   getProjectById(id:number):Observable<Iproject>{
    return this.http.get<Iproject>(`${this.apiUrl}/GetProject/${id}`)
   }

   updateProject(data:Iproject):Observable<Iproject>{
    return this.http.put<Iproject>(`${this.apiUrl}/UpdateProject/${data.projectId}`,data);
   }

   getAllProjectEmployee():Observable<IProjectEmployer[]>{
    return this.http.get<IProjectEmployer[]>(`${this.apiUrl}/GetAllProjectEmployees`);
   }

   updateProjectEmployee(data:IProjectEmployer):Observable<IProjectEmployer>{
     return this.http.put<IProjectEmployer>(this.apiUrl+"/UpdateProjectEmployees/"+data.ProjectId,data);
   }
   deleteProjectEmployee(id:number){
  return this.http.delete(`${this.apiUrl}/DeleteProjectEmployee/${id}}`);
   }
   createProjectEmployee(data:Iproject):Observable<Iproject>{
   return this.http.post<Iproject>(this.apiUrl+"/CreateProjectEmployee",data);
   }

   getDashboardData():Observable<GetDashboard> {
    return this.http.get<GetDashboard>(`${this.apiUrl}/GetDashboard`);
   }



}
