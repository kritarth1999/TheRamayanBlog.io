import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  [x: string]: any;

  constructor(private contentfulService: ContentfulService) {}

  blogPosts$: Observable<any> | undefined;

ngOnInit(): void {
  this.blogPosts$ = this.contentfulService.getAllEntries();
  
}
playMusic() {
  let audio = new Audio();
  audio.autoplay = true;
  audio.src = "../assets/Song2.mp3";
  audio.loop = true;
  audio.load();
  audio.play();
}


}
