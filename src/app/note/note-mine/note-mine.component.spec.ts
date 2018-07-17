import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteMineComponent } from './note-mine.component';

describe('NoteMineComponent', () => {
  let component: NoteMineComponent;
  let fixture: ComponentFixture<NoteMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
