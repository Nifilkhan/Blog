import { Component, Input } from '@angular/core';
import { popularPosts } from '../interface/blogInterface';

@Component({
  selector: 'app-blog-side-bar-posts',
  standalone: true,
  imports: [],
  templateUrl: './blog-side-bar-posts.component.html',
  styleUrl: './blog-side-bar-posts.component.css'
})
export class BlogSideBarPostsComponent {
  @Input() moreBlogs!:popularPosts; 
}
