import { Component, Input, OnChanges } from '@angular/core';
// tslint:disable: max-line-length

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss']
})
export class CodeBoxComponent implements OnChanges {

  @Input() syntax: any;
  public propertie = /\w+\=/gi;
  public comment = /\#\s\w+/g;
  public quantifier = /\[[\D\d]+\]/gi;
  public notPropertie = /(?<=\=)[\D\d]+/gi;
  public formatedArray = [];

  ngOnChanges() {
    this.formatCode();
  }
  constructor() { }

  formatCode() {
    if (this.syntax) {
      this.formatedArray = [];
      let arrayMatch = [];
      arrayMatch = this.syntax.split('!');
      arrayMatch.forEach(element => {
        if (element.match(this.propertie) && !element.match(this.quantifier) && element.match(this.notPropertie)) {
          this.formatedArray.push(`<span style="color: blue;">${element.match(this.propertie)[0]}</span>${element.match(this.notPropertie)[0]}`);
        } else if (element.match(this.comment)) {
          this.formatedArray.push(`<span style="color: darkgreen;">${element.match(this.comment)[0]}</span>`);
        } else if (element.match(this.quantifier)) {
          this.formatedArray.push(`<span style="color: blue;">${element.match(this.propertie)[0]}</span><span style="color: purple;">${(element.match(this.quantifier)[0])}</span>`);
        }
      });
    }
  }

}