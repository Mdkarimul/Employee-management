import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { GetDashboard } from '../../model/interface/master';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  masterService = inject(MasterService);
  dashBoarddata:GetDashboard | undefined;
  ngOnInit(): void {
    this.getDashboardData();
  }
  getDashboardData() {
    this.masterService.getDashboardData().subscribe({
      next:(res:GetDashboard)=>{
        this.dashBoarddata = res;
        console.log(res);
      },
      error:(error)=>{
        console.log(error);
      },
      complete(){}
    })
  }
}
