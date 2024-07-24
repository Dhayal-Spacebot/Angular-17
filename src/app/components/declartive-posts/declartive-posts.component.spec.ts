import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclartivePostsComponent } from './declartive-posts.component';

describe('DeclartivePostsComponent', () => {
  let component: DeclartivePostsComponent;
  let fixture: ComponentFixture<DeclartivePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeclartivePostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeclartivePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
