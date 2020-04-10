import { Component, OnInit, EventEmitter } from '@angular/core';
import { FeedService } from '../feed.service';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public sideBarSample = [];
  public categories;
  public hoverEvent;
  public searchTerm;

  public novoheader = [];

  public novoteste = [];

  constructor(
    private sideBarService: SidebarService,
    private feedService: FeedService
  ) { }
  // tslint:disable: max-line-length

  ngOnInit(): void {
    // this.buildFakeSidebar();
    this.getData();
    this.sideBarService.hoverSection.subscribe(res => this.hoverEvent = res);
  }

  teste() {
    if (this.searchTerm) {
      // TODO salvar no back o titulo e as categorias em um so array
      // this.categories = this.categories.filter(f => f.category.toLowerCase().includes(this.searchTerm.toLowerCase()));
      // this.categories = this.categories.map(m=> m.samples.filter(f => f.subCategory.includes('agora')))
      this.searchTerm = this.searchTerm.toLowerCase();
      // this.novoheader = this.novoheader.filter(f => f.title.includes(this.searchTerm) || f.categories.some(n => n.includes(this.searchTerm)));
      // this.categories = this.categories.filter(f => f.title.includes(this.searchTerm) || f.samples.some(n => n.subCategory.includes(this.searchTerm)));
      this.novoteste = this.novoteste.filter(f => f.title.includes(this.searchTerm));
      console.log('novoheader', this.categories);
    } else {
      this.novoheader = [];
      this.novoteste = []
      this.getData();
    }
  }

  // buildFakeSidebar() {
  //   for (let index = 0; index < 50; index++) {
  //     this.sideBarSample.push(
  //       {
  //         titulo: `titulo:${index}`,
  //         categoria: [`categoria${index}`, `categoria${index + 1}`, `categoria${index + 2}`]
  //       }
  //     );
  //   }
  // }

  getData() {
    this.feedService.getFeed().subscribe((res: any) => {
      this.categories = res;
      this.fodas(res);
      this.categories.forEach(e => {
        this.novoheader.push({ title: e.title, categories: e.samples.map(m => m.subCategory) });
      });
    });
  }

  fodas(res) {
    for (const item of res) {
      item.samples.map(m => this.novoteste.push({title: m.subCategory}));
    }
    res.map(m => this.novoteste.push({ title: m.title }));
    console.log('this.novoteste', this.novoteste);
  }

  scrollToElement(id) {
    this.sideBarService.hoverSection.emit(id);
    this.sideBarService.scrollEvent.emit(id);
  }

}
