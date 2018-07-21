import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LinkService } from '../../Services/link.service';
import { Links } from '../../models/links';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links: Links[];
  selectedLink: Links;

  name: string;
  url:string;
  sort: number;

  constructor(
    private service: LinkService
  ) { 
    
  }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void{
    this.service.getLinks()
        .subscribe(links => this.links = links);
  }

  openLink(url: string){
    window.open(url, '_blank');
  }

  edit(id: number):void{
    //alert('Edit LinkId: ' + id);
    this.service.getLink(id).subscribe(link => this.selectedLink = link);
  }

  update():void{
    this.service.updateLink(this.selectedLink).subscribe(link => this.getLinks());
  }

  delete(id: number):void{
    //alert('Delete LinkId: ' + id);
    this.service.getLink(id).subscribe(
      link => this.selectedLink = link
    );
  }

  confirmDelete(){
    this.service.deleteLink(this.selectedLink).subscribe(
      () => this.getLinks()
    );
  }

  add(){
    this.name = this.name.trim();
    this.url = this.url.trim();
    
    if(!this.name || !this.url || !this.sort){
        alert("Add fail: Name, Url or Sort are empty.");
        return;
    }

    var link = new Links();
    link.displayedName = this.name;
    link.url = this.url;
    link.sort = this.sort;

    this.service.addLink(link).subscribe(
      () => this.getLinks()
    );
  }

  cancel(){
    this.name = "";
    this.url = "";
  }

}
