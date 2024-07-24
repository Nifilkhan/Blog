import { Component, Input } from '@angular/core';
import { blogContent } from '../interface/blogInterface';
import { Blog } from '../interface/blog.model';

@Component({
  selector: 'app-blog-main',
  standalone: true,
  imports: [],
  templateUrl: './blog-main.component.html',
  styleUrl: './blog-main.component.css'
})
export class BlogMainComponent {
  @Input() blog!: blogContent;
  isActive: boolean = false;
  charLength: number = 100;

  more() {
    this.isActive = !this.isActive
  }
}
