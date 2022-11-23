import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  show_comp: string = 'home';

  constructor() {}

  ngOnInit(): void {}

  chooseComponent(c: string) {
    this.show_comp = c;
  }
}
