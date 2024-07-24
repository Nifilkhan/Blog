import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSideBarPostsComponent } from './blog-side-bar-posts.component';

describe('BlogSideBarPostsComponent', () => {
  let component: BlogSideBarPostsComponent;
  let fixture: ComponentFixture<BlogSideBarPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSideBarPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSideBarPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
