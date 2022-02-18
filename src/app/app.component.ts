import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test-app';

  constructor(private dataService: DataService) {}
  data;
  ngOnInit(): void {
    this.dataService.defaultData()
    this.getData()
  }
 
  getData() {
    console.log("AA");
    
    this.data = this.dataService.fillteredData;
  }
}
