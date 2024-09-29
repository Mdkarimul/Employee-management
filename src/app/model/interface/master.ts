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
