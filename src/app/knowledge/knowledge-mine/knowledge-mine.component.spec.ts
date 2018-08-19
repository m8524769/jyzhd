import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeMineComponent } from './knowledge-mine.component';

describe('KnowledgeMineComponent', () => {
  let component: KnowledgeMineComponent;
  let fixture: ComponentFixture<KnowledgeMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
