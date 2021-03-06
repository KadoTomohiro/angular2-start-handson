import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  @Input('rownum')
  private rownum: number;

  @Input('title')
  private title: string;

  @Input('desc')
  private desc: string;

  @Output()
  private onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onClick($event: any): void {
    this.onDelete.emit($event);
  }
}
