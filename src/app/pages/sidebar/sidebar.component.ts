import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{
  cname = 'Angular 4';
  _opened = false;

  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
