import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getSimulate();
  }

  getSimulate(): void {
    this.dashboardService.getSimulate().subscribe((res: any) => {
      if (res) {
      }
    });
  }

  public onCardClick(inputNumber: any){
    let inputArray: any[];


  }
}
