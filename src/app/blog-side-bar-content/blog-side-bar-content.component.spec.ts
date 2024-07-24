import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSideBarContentComponent } from './blog-side-bar-content.component';

describe('BlogSideBarContentComponent', () => {
  let component: BlogSideBarContentComponent;
  let fixture: ComponentFixture<BlogSideBarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSideBarContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogSideBarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
