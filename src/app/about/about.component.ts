import { Component, OnInit } from '@angular/core';
import { TitleService } from '../shared/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    title:string = "About";

  constructor(
      private titleService: Title,
      private blogTitle : TitleService
  ) { }

  ngOnInit(): void {
      this.titleService.setTitle(`${this.title} - ${this.blogTitle.blogTitle}`);
  }

}
