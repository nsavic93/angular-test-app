import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss'],
})
export class TableBodyComponent implements OnInit {
  @Input() data;
  constructor(private dataService: DataService) {}
  checked=0;
  ngOnInit(): void {}
  chekChanged(checked,id) {
    
     this.checked=  this.dataService.changeCkeckValue(checked ,id)
    
  }
}
