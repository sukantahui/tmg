import { Directive, Output, EventEmitter, HostListener, ElementRef, OnDestroy } from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
// import 'rxjs/add/observable/fromEvent';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnDestroy{
  @Output() scrollPosition: EventEmitter<number> = new EventEmitter<number>();
  private scrollEvent$;
  constructor(private el: ElementRef) {
    this.scrollEvent$ = fromEvent(this.el.nativeElement,
      'scroll').subscribe((e: any) => {
      this.scrollPosition.emit(e.target.scrollTop);
      console.log('testing');
    });
  }

  ngOnDestroy(): void {
    this.scrollEvent$.unsubscribe();
  }

}
