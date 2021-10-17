import {Component, HostListener, OnInit} from '@angular/core';
import 'rxjs/add/observable/interval';

import {interval, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';


import {Router, NavigationEnd} from '@angular/router';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  logoHover: boolean = false;
  timerObserve: any;

  HoverSubscribe: any;

  exampleTakeUntil: any;


  source = interval(0);
  timer$ = timer(1000);


  toggle: boolean = false;
  hoverToggle: boolean = false;


  mobile: boolean = false;

  window: Element;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  public innerWidth: any;


  constructor(public router: Router, private breakpointObserver: BreakpointObserver) {
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 716) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  ngOnInit() {
    this.onResize(event);
    this.router.events.subscribe(event => {
      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd) {
        const contentContainer = document.querySelector('.mat-drawer-content') || this.window;
        contentContainer.scrollTo(0, 0);
      }
    });
  }


  toggleSide() {
    this.toggle = !this.toggle;
  }


  breakHover: boolean = false;


  hoverToggleSide() {
    if (!this.mobile) {
      this.exampleTakeUntil = this.source.pipe(takeUntil(this.timer$));
      this.breakHover = false;
      this.exampleTakeUntil.subscribe(val => {
          if ((val >= 0) && (this.breakHover == false)) {
            this.hoverToggle = true;
          }

        }
      );

    }
  }


  hoverToggleSideLeave() {
    if (!this.mobile) {
      this.breakHover = true;
      this.hoverToggle = false
    }
  }


}


