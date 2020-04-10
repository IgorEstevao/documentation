import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { FeedModel, SampleModel } from '../feed.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {

  public title = '';
  public category = '';
  public description = '';
  public allSytaxes = '';
  public samples = [new SampleModel()];
  public codigo = '';

  constructor(
    private feedService: FeedService
  ) { }

  add() {
    this.samples.push(new SampleModel());
  }

  remove(id) {
    this.samples = this.samples.filter(f => f.id !== id);
  }

  save() {
    const body = new FeedModel();
    body.title = this.title;
    body.category = this.category;
    body.description = this.description;
    body.allSytaxes = this.allSytaxes;
    body.samples = this.samples;
    this.feedService.sendNewFeed(body).subscribe(res => console.log(res));
  }

}
