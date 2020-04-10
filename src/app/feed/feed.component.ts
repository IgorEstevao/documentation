import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedService } from '../feed.service';
import { SidebarService } from '../sidebar.service';

// tslint:disable: max-line-length
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public sections;

  constructor(
    private feedService: FeedService,
    private sideBarService: SidebarService
  ) { }

  ngOnInit() {
    this.getData();
    this.sideBarService.scrollEvent.subscribe((response) => {
      const section = document.getElementById(response);
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    });
  }

  mouseEnter(id) {
    this.sideBarService.hoverSection.emit(id);
  }

  getData() {
    this.feedService.getFeed().subscribe((res) => {
      this.sections = res;
    });
  }

}
