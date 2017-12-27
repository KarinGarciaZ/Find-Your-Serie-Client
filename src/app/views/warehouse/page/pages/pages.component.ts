import { PageService } from 'app/services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  pages = []
  filtered = []
  
  constructor(private pageService: PageService) { 
    this.pageService.all()
      .subscribe( res => this.pages = this.filtered = res )      
  }

  filter( value ) {
    this.filtered = this.pages.filter( item => item.name.toLowerCase().includes(value.toLowerCase()))
  }

  ngOnInit() {
  }

}
