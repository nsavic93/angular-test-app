import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class DataService implements OnInit {
  constructor() {}
  data = [
    {
      id: 1,
      checked: false,
      name: 'Angelo Trotter',
      phone: '(621) 321-2232',
      ssn: '123-45-6789',
      dob: '12/6/84',
      hired: '3/24/17',
      cdl: '587662410',
      state: 'USA',
      cdlexp: 1565,
      medicalExp: 565,
      mvrExp: 65,
    },
    {
      id: 2,
      checked: false,
      name: 'Darryl Tolbert',
      phone: '(621) 321-2232',
      ssn: '123-45-6789',
      dob: '12/6/84',
      hired: '3/24/17',
      cdl: '587662410',
      state: 'USA',
      cdlexp: 1565,
      medicalExp: 565,
      mvrExp: 65,
    },
    {
      id: 3,
      checked: false,
      name: 'Eric Reid',
      phone: '(621) 321-2232',
      ssn: '123-45-6789',
      dob: '12/6/84',
      hired: '3/24/17',
      cdl: '587662410',
      state: 'USA',
      cdlexp: 1565,
      medicalExp: 565,
      mvrExp: 65,
    },
    {
      id: 4,
      checked: false,
      name: 'Glen Cotton',
      phone: '(621) 321-2232',
      ssn: '123-45-6789',
      dob: '12/6/84',
      hired: '3/24/17',
      cdl: '587662410',
      state: 'USA',
      cdlexp: 1565,
      medicalExp: 565,
      mvrExp: 65,
    },
    {
      id: 5,
      checked: false,
      name: 'Isac Douglas',
      phone: '(621) 321-2232',
      ssn: '123-45-6789',
      dob: '12/6/84',
      hired: '3/24/17',
      cdl: '587662410',
      state: 'USA',
      cdlexp: 1565,
      medicalExp: 565,
      mvrExp: 65,
    },
    {
      id: 6,
      checked: false,
      name: 'James Smith',
      phone: '(621) 321-2232',
      ssn: '123-45-6789',
      dob: '12/6/84',
      hired: '3/24/17',
      cdl: '587662410',
      state: 'USA',
      cdlexp: 1565,
      medicalExp: 565,
      mvrExp: 65,
    },
  ];
  fillteredData = [];
  ngOnInit() {
    this.defaultData();
  }
  ngOnChange() {}
  defaultData() {
    for (let i = 0; i < this.data.length; i++) {
      this.fillteredData.push(this.data[i]);
    }
    return this.fillteredData;
  }

  getData(search) {
    console.log(search);
    this.fillteredData = [];
    for (let i = 0; i < this.data.length; i++) {
      if (
        this.data[i].name.search(search) >= 0 ||
        this.data[i].phone.search(search) >= 0 ||
        this.data[i].ssn.search(search) >= 0 ||
        this.data[i].dob.search(search) >= 0 ||
        this.data[i].hired.search(search) >= 0 ||
        this.data[i].cdl.search(search) >= 0 ||
        this.data[i].state.search(search) >= 0
      ) {
        console.log(this.data[i].name);
        this.fillteredData.push(this.data[i]);
      }
    }
    return this.fillteredData;
  }
  changeCkeckValue(checked, id) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        this.data[i].checked = !checked;
      }
    }
    return this.countCheckedUsers()
  }
  countCheckedUsers() {
    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].checked === true) {
        count += 1;
      }
    }
    return count;
  }
}
