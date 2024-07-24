import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSideBarTagsComponent } from './blog-side-bar-tags.component';

describe('BlogSideBarTagsComponent', () => {
  let component: BlogSideBarTagsComponent;
  let fixture: ComponentFixture<BlogSideBarTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSideBarTagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSideBarTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
