import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public scrollEvent: EventEmitter<any> = new EventEmitter<any>();
  public hoverSection: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
}
