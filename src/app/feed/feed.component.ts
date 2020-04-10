import { Component, OnInit, HostListener } from '@angular/core';
import { FeedService } from '../feed.service';
import { SidebarService } from '../sidebar.service';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public feedList;
  public allCategories = [];

  constructor(
    private feedService: FeedService,
    private sideBarService: SidebarService
  ) { }

  ngOnInit() {
    this.getData();
    this.sideBarService.scrollViewTo.subscribe((id) => {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const pixeisScrolled = window.pageYOffset + 200;
    for (let index = 0; index < this.allCategories.length; index++) {
      if (this.allCategories[index + 1] === undefined) {
        this.sideBarService.sectionOnScreen.emit(this.allCategories[index].id);
        return;
      }
      if (pixeisScrolled < this.allCategories[index + 1].posicao) {
        this.sideBarService.sectionOnScreen.emit(this.allCategories[index].id);
        return;
      }
    }
  }

  getData() {
    this.feedService.getFeed().subscribe((res) => {
      this.feedList = res;
      // TODO FAZER ISSO dps q os ngfor terminarem
      setTimeout(() => this.getCategories(), 600);
    });
  }

  getCategories() {
    let categories: any;
    categories = document.getElementsByName('categorie');
    for (const item of categories) {
      this.allCategories.push({ id: item.id, posicao: item.offsetTop });
    }
  }

}
