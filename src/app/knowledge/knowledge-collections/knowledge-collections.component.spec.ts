import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeCollectionsComponent } from './knowledge-collections.component';

describe('KnowledgeCollectionsComponent', () => {
  let component: KnowledgeCollectionsComponent;
  let fixture: ComponentFixture<KnowledgeCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
