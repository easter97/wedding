import { Component } from '@angular/core';
import * as updatesData from '../../../assets/text/updates.json';

@Component({
  selector: 'app-updates',
  standalone: false,
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.scss'
})
export class UpdatesComponent {
  updates: any = updatesData;
  updateIndex=this.updates.length-1;

  constructor() { }

  ngOnInit(): void {
  }

  updatesIndex(inc: 1 | -1){
    this.updateIndex+=inc;
    if(this.updateIndex>this.updates.length-1){
      this.updateIndex=0;
    }
    else if(this.updateIndex<0){
      this.updateIndex=this.updates.length-1;
    }
  }

}
