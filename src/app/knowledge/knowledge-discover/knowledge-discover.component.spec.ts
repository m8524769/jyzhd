import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeDiscoverComponent } from './knowledge-discover.component';

describe('KnowledgeDiscoverComponent', () => {
  let component: KnowledgeDiscoverComponent;
  let fixture: ComponentFixture<KnowledgeDiscoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeDiscoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
