export interface IApiResponse {

    message: string;
    result:boolean;
    data:any

}

export interface IParentDeparment {
    departmentId : number ;
    departmentLogo : string;
    departmentName : string
} 

export interface IChildDepartment {
    "childDeptId": number,
    "parentDeptId": number,
    "departmentName":string
}

export interface Iproject {
    projectId:number,
    projectName:string,
    clientName:string,
    startDate:string,
    leadByEmpId:number,
    contactPerson:string,
    contactNo:string,
    emailId:string
}

export interface IProjectEmployer {
    empProjectId: number,
    ProjectId:number,
    empId:number,
    assignedDate:string,
    role:string,
    isActive:string
}
