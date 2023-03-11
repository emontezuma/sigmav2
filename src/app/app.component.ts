import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Store } from '@ngrx/store';
import { SharedState } from './shared/models/store/shared';
import * as appActions from './shared/shared.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.Handset, 'Handset'],
    [Breakpoints.HandsetLandscape,'HandsetLandscape'],
    [Breakpoints.HandsetPortrait, 'HandsetPortrait'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Tablet, 'Tablet'],
    [Breakpoints.TabletLandscape, 'TabletLandscape'],
    [Breakpoints.TabletPortrait, 'TabletPortrait'],
    [Breakpoints.Web, 'Web'],
    [Breakpoints.WebLandscape, 'WebLandscape'],
    [Breakpoints.WebPortrait, 'WebPortrait'],
    [Breakpoints.XLarge, 'XLarge'],
    [Breakpoints.XSmall, 'XSmall'],
  ]);

  constructor(
    private store: Store<SharedState>,
    public platform: Platform,
    breakpointObserver: BreakpointObserver
  ) {
    // Se observa el cambio de tamaño de la pantalla usando en CDK de Angular
    breakpointObserver
      .observe([
        Breakpoints.Handset,
        Breakpoints.HandsetLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.Large,
        Breakpoints.Medium,
        Breakpoints.Small,
        Breakpoints.Tablet,
        Breakpoints.TabletLandscape,
        Breakpoints.TabletPortrait,
        Breakpoints.Web,
        Breakpoints.WebLandscape,
        Breakpoints.WebPortrait,
        Breakpoints.XLarge,
        Breakpoints.XSmall,
      ])
      .pipe()
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const screenSize = this.displayNameMap.get(query) ?? 'Unknown';
            this.store.dispatch( appActions.changeScreenSize({ screenSize }));
          }
        }
      });    
  }

  title = $localize`sigmav2`;  

}
