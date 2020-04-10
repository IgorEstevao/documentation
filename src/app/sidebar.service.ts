import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public scrollViewTo: EventEmitter<any> = new EventEmitter<any>();
  public sectionOnScreen: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
}
