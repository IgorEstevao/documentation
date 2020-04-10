import { Component, OnInit, EventEmitter } from '@angular/core';
import { FeedService } from '../feed.service';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public hoverEvent;
  public searchTerm;
  public categoriesList = [];
  public showFilter = false;
  public filterList = [];

  constructor(
    private sideBarService: SidebarService,
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.getData();
    this.sideBarService.sectionOnScreen.subscribe(res => this.hoverEvent = res);
  }

  search() {
    if (this.searchTerm) {
      this.showFilter = true;
      this.searchTerm = this.searchTerm.toLowerCase();
      this.filterList = this.filterList.filter(f => f.title.includes(this.searchTerm));
    } else {
      this.showFilter = false;
      this.categoriesList = [];
      this.filterList = [];
      this.getData();
    }
  }

  getData() {
    this.feedService.getFeed().subscribe((response: any) => {
      this.getAllCategories(response);
      response.forEach(e => {
        this.categoriesList.push({ title: e.title, subCategories: e.samples.map(m => m.subCategory) });
      });
    });
  }

  getAllCategories(response) {
    for (const item of response) {
      item.samples.map(m => this.filterList.push({title: m.subCategory}));
    }
    response.map(m => this.filterList.push({ title: m.title }));
  }

  scrollToElement(id) {
    this.showFilter = false;
    this.sideBarService.sectionOnScreen.emit(id);
    this.sideBarService.scrollViewTo.emit(id);
  }

}
