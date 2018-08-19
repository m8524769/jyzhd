import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeEditorComponent } from './knowledge-editor.component';

describe('KnowledgeEditorComponent', () => {
  let component: KnowledgeEditorComponent;
  let fixture: ComponentFixture<KnowledgeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
