import { Component, Input, OnInit } from '@angular/core';
import { People } from '../app.component';

@Component({
  selector: 'app-birthday-records',
  templateUrl: './birthday-records.component.html',
  styleUrls: ['./birthday-records.component.scss']
})
export class BirthdayRecordsComponent implements OnInit {
  @Input() peopleList: People[] = [];
  sortBy: string = '';

  sortList(sortSelection: string) {
    this.sortBy = sortSelection;
    if (this.sortBy === 'name') {
      this.peopleList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortBy === 'birth') {
      this.peopleList.sort((a, b) => new Date(a.birth).getTime() - new Date(b.birth).getTime());
    }
  }


  ngOnInit() {
  }
}
