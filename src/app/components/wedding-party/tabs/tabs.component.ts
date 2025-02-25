import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  activeTab;

  constructor(private route: ActivatedRoute, private router: Router) {}

  // ngOnInit() {
  //   // Read the fragment from the URL and set the active tab
  //   this.route.fragment.subscribe(fragment => {
  //     if (fragment) {
  //       // this.activeTab.title = fragment;
  //       this.activeTab = this.tabs.find(tab => tab.title == fragment);
  //     }
  //   });
  // }

  setActiveTab(tab: TabComponent) {
    this.activeTab = tab;
    this.router.navigate([], { fragment: tab.title.toLowerCase() }); // Update URL fragment
  }
  
  // contentChildren are set
  ngAfterContentInit() {
        // Read the fragment from the URL and set the active tab
        this.route.fragment.subscribe(fragment => {
          if (fragment) {
            // this.activeTab.title = fragment;
            this.activeTab = this.tabs.find(tab => tab.title.toLowerCase() == fragment);
          }
        });
    // if there is no active tab set, activate the first
    if(this.activeTab){
      this.selectTab(this.activeTab);
    }
    else {
      this.selectTab(this.tabs.first);
    }
  }
  
  selectTab(tab: TabComponent){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    
    // activate the tab the user has clicked on.
    tab.active = true;

    this.setActiveTab(tab);
  }
}
