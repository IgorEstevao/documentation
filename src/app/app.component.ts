import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'index';
  ngOnInit() {
    // console.log('%cyou shouldn\'t be here!', 'color: crimson; font-size:30px; font-weight: bolder;');
  }
}
