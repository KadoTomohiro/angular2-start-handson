import { Component, OnInit } from '@angular/core';
import {Issue} from "./issue";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  private issue: Issue;
  //noinspection JSMismatchedCollectionQueryUpdate
  private issues: Issue[];

  constructor() { }

  //noinspection JSUnusedGlobalSymbols
  ngOnInit(): void {
    this.issue = new Issue;
    this.issues = [];
  }

  public onSubmit(form: NgForm): void {
    const issue = {
      title: form.value.title,
      desc: form.value.desc
    };

    this.issues.push(issue);

    form.reset();
  }

  public onDelete(index: number): void {
    this.issues.splice(index, 1);
  }

}
