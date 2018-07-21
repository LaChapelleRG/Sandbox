import { Component, ViewContainerRef } from '@angular/core';
import { LinkService } from './Services/link.service';
import { getSymbolIterator } from '../../node_modules/@angular/core/src/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sanbox';
  constructor(
    private service: LinkService
  ){
    this.year = this.getYear();
  }

  year:string;

  getYear(): string{
    var d = new Date();
    var result = d.getFullYear().toString();

    return result;
  }
}
