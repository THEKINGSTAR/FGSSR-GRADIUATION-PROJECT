import { Component, OnInit } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  Email: String;
  Skills: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', Email: 'Mahmoud.com',Skills: 'H'},
  {position: 2, name: 'Helium', Email: 'Mahmoud.com', Skills: 'He'},
  {position: 3, name: 'Lithium', Email: 'Mahmoud.com', Skills: 'Li'},
  {position: 4, name: 'Beryllium', Email: 'Mahmoud.com', Skills: 'Be'},
 
];
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
  
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'Email', 'Skills','Add'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) { }
  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit(): void {
  

  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
