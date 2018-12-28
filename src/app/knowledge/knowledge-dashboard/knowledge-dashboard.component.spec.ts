import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeDashboardComponent } from './knowledge-dashboard.component';

describe('KnowledgeDashboardComponent', () => {
  let component: KnowledgeDashboardComponent;
  let fixture: ComponentFixture<KnowledgeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
