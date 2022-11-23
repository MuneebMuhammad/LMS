import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() showAdminComponent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  show_none(to_show: string) {
    this.showAdminComponent.emit(to_show);
  }
}
