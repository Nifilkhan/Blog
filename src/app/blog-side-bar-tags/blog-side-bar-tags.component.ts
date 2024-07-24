import { Component, Input, input } from '@angular/core';
import { tagsList } from '../interface/blogInterface';

@Component({
  selector: 'app-blog-tags',
  standalone: true,
  imports: [],
  templateUrl: './blog-side-bar-tags.component.html',
  styleUrl: './blog-side-bar-tags.component.css'
})
export class BlogSideBarTagsComponent {
  @Input() tags!:tagsList;
}
