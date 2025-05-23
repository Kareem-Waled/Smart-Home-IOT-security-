import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorDataService, SensorData } from '../../services/sensor-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sensorData!: SensorData;

  constructor(private sensorService: SensorDataService) {}

  ngOnInit(): void {
    this.sensorService.getSensorData().subscribe(data => {
      this.sensorData = data;
      
    });
    
  }
}
