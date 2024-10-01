import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Iproject } from '../../model/interface/master';
import { MasterService } from '../../service/master.service';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent implements OnInit {


projectList:Iproject[] = [];
masterService = inject(MasterService); 
route  = inject(Router);  
ngOnInit(): void {
    this.getAllProject();
  }

  getAllProject(){
  this.masterService.getAllProject().subscribe({
    next:(res:Iproject[])=>{
      this.projectList = res;
    },
    error:(error)=>{
      console.log(error);
    },
    complete:()=>{
    }
  })
  }

  onEdit(projectId:number){
     this.route.navigate(['new-project',projectId]);
  }

  onDelete(projectId:number){
  this.masterService.deleteProject(projectId).subscribe({
    next:(res)=>{
   console.log(res,' Delete success !');
   this.getAllProject();
    },
    error:(error)=>{
console.log(error)
    },
   complete() {
   }
  })
  }


}
