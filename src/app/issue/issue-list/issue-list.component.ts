import { Component, OnInit } from '@angular/core';
import {IssueStore} from "../issue.store";
import {Issue} from "../issue";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  private issues: Issue[];

  constructor(
    private issueStore: IssueStore
  ) { }

  ngOnInit() {
    this.issues = this.issueStore.list;
  }

  public onDelete(index: number): void {
    this.issueStore.delete(index);
  }

}
