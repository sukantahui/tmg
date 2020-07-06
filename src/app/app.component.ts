import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBaby } from '@fortawesome/free-solid-svg-icons';

import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import {AuthService} from './services/auth.service';
import {VERSION} from '@angular/material/core';
// import {VERSION} from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import {GeneralService} from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'base-project';
  active = 1;
  events: string[] = [];
  faCoffee = faCoffee;
  faBaby = faBaby;
  mediaSub: Subscription;
  deviceXs: boolean;
  version = VERSION;
  mode = 'side'
  opened = false;
  layoutGap = '64';
  fixedInViewport = true;

  constructor(private bpo: BreakpointObserver
              , public mediaObserver: MediaObserver
              , private authService: AuthService
              , public generalService: GeneralService){
  }
  ngOnInit(): void {
      this.mediaSub = this.mediaObserver.media$.subscribe(
        (result: MediaChange) => {
          console.log(result.mqAlias);
          this.deviceXs = (result.mqAlias === 'xs' ? true : false);
        }
      );
      const breakpoints = Object.keys(Breakpoints).map(key => Breakpoints[key])
      this.bpo.observe(breakpoints)
      .pipe(map(bst => bst.matches))
      .subscribe(matched => {


        console.log('matched');

        this.determineSidenavMode();
        this.determineLayoutGap();
      });
  }

  private determineSidenavMode(): void {
    if (
      this.isExtraSmallDevice() ||
      this.isSmallDevice()
    ) {
      this.fixedInViewport = false;
      this.mode = 'over';
      this.opened = false;
      return;
    }

    this.fixedInViewport = true;
    this.mode = 'side';
  }

  private determineLayoutGap(): void {
    if (this.isExtraSmallDevice() || this.isSmallDevice()) {
      this.layoutGap = '0';
      return;
    }

    this.layoutGap = '64';
  }

  public isExtraSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.XSmall);
  }

  public isSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.Small);
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
