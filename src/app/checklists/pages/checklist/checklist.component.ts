import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedState } from '../../../shared/models/store/shared';
import { AppState } from '../../../app.reducer';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  colsBySize: number = 2;
  size: string = 'Small';

  constructor(
    private store: Store<AppState>,
    private sharedStore: Store<SharedState>,
  ) {}

  ngOnInit(): void {
    this.store.select('shared').subscribe( shared => {
      this.size = shared.screenSize;
      this.colsBySize = this.calculateCols(shared.screenSize);
    });    
  }

  calculateCols(size: string = 'Small') {
    switch(size) {
      case 'Handset': return 2;
      case 'HandsetLandscape': return 2;
      case 'HandsetPortrait': return 1;
      case 'Large': return 5;
      case 'Medium': return 3;
      case 'Small': return 2;
      case 'Tablet': return 2;
      case 'TabletLandscape': return 3;
      case 'TabletPortrait': return 2;
      case 'Web': return 4;
      case 'WebLandscape': return 6;
      case 'WebPortrait': return 4;
      case 'XLarge': return 8;
      case 'XSmall': return 1;
      default: return 2;  
    }
  }
}