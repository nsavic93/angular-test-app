import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss'],
})
export class TableHeadComponent implements OnInit {
  constructor(private dataService: DataService) {}
  @Output() inputChanged: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {}
  search(search) {
    this.dataService.getData(search);
    this.inputChanged.emit();
  }

}
