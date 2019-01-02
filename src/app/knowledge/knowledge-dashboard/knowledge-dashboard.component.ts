import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-knowledge-dashboard',
  templateUrl: './knowledge-dashboard.component.html',
  styleUrls: ['./knowledge-dashboard.component.css']
})
export class KnowledgeDashboardComponent implements OnInit {

  tabs: Object[] = [
    {
      label: 'Discover',
      route: 'knowledge/discover',
    },
    {
      label: 'My Collections',
      route: 'knowledge/collections',
    },
    {
      label: 'Create',
      route: 'knowledge/create',
    },
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  switchTo(route: string): void {
    this.router.navigateByUrl(route);
  }

}
