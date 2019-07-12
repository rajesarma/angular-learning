import { Employee } from './../Employee';
import { employees } from './../mock-employees';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  selectedGender: string = 'All';

  employees: Employee[];
  employee: Employee;
  length: number;
  constructor() {
    length = employees.length;
    this.employees = employees;
  }

  ngOnInit() {
  }

  getEmployees(): void {
    this.employees = employees;
    this.employee = {
      id: 7,
      code: 'E106',
      name: 'Kiran',
      gender: 'male',
      salary: 150000,
      dob: new Date('01/01/2002')
    };

    if(this.employees.length === length) {
      employees.push(this.employee);
    }
  }

  trackByEmpCode(index:string, employee:Employee) : string {
    return employee.code;
  }

  getTotalEmployeesCount() : number {
    return this.employees.length;
  }

  getMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'male').length;
  }

  getFemaleEmployeesCount() : number {
    return this.employees.filter(e => e.gender === 'female').length;
  }

  onRadioButtonChange(selectedRadioValue: string): void {
    this.selectedGender = selectedRadioValue;
  }

}
