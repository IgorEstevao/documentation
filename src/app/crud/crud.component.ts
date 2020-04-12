import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { FeedModel, SampleModel } from '../feed.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  // https://via.placeholder.com/150
  public isAdmin = true;
  public successPost = false;
  public title = '';
  public tags = '';
  public description = '';
  public samples = [new SampleModel()];
  public deleted = '';

  constructor(
    private feedService: FeedService
  ) { }

  add() {
    this.samples.push(new SampleModel());
  }

  remove(id) {
    this.deleted = id;
    setTimeout(() => {
      this.samples = this.samples.filter(f => f.id !== id);
      this.deleted = '';
    }, 1000);
  }

  save() {
    const body = new FeedModel();
    body.title = this.title;
    body.tags = this.tags.split(',');
    body.description = this.description;
    body.samples = this.samples;
    this.feedService.sendNewFeed(body).subscribe((res) => {
      console.log('res', res);
      this.successPost = true;
      setTimeout(() => {
        this.successPost = false;
      }, 1000);
    });
  }

}
