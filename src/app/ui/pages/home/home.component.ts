import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tabs: any[] = [
    { label: 'Country', index: 2 },
    { label: 'Zone', index: 1 },
    { label: 'Birds', index: 3 },
  ];
  activeIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onTabClick(n: number) {
    console.log(n);
    this.activeIndex = n;
  }
}
