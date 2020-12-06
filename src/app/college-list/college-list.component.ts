import { Component, OnInit } from '@angular/core';
import {  BackendService } from '../backend.service'

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.scss']
})
export class CollegeListComponent implements OnInit {

  public collegeDetails = [];
   stars: number[] = [1, 2, 3, 4, 5];
    selectedValue: number;

    countStar(star) {
      this.selectedValue = star;
      console.log('Value of star', star);
    }

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getCollegeDetails().subscribe(data => {
      this.collegeDetails = data;
      console.log(data);
    });
  }

}
