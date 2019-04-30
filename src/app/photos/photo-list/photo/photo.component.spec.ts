import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListBaseComponent } from './photo.component';

describe('PhotoComponent', () => {
  let component: PhotoListBaseComponent;
  let fixture: ComponentFixture<PhotoListBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoListBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
