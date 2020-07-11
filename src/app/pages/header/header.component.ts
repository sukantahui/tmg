import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {GeneralService} from '../../services/general.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header_variable = false;
  // tslint:disable-next-line:align
  @HostListener('document:scroll', [])
  onWindowScroll() {
    console.log('You just scolled');
  }
  // tslint:disable-next-line:align
  constructor(public generalService: GeneralService) { }

  ngOnInit(): void {
  }

  myStyle(){
    // return {'background-color': '#e83d44'};
    return {
      // 'background-color': 'rgba(255,0,0,' + (10 / 100) + ')',
      'background-color': 'rgba(147,112,219,.3)',
      color : 'white'
    };
  }
}
