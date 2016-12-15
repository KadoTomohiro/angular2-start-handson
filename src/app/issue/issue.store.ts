import { Injectable } from "@angular/core";
import { Issue } from "./issue";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise'
@Injectable()
export class IssueStore {

  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  private url = '/api/issues';

  private issues: Issue[] = [];

  constructor(private http: Http) { }

  public delete(index: number): Promise<Issue[]> {
    return this.http.delete(`${this.url}/${index}`, {headers: this.headers})
      .toPromise()
      .then(() => this.issues.splice(index, 1))
      .catch(this.handleError);
  }

  public add(issue: Issue): void {
    this.http.post(this.url, JSON.stringify(issue), {headers: this.headers})
      .toPromise()
      .then(() => this.issues.push(issue))
      .catch(this.handleError);
  }

  public allList(): Promise<Issue[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => {
        this.issues = response.json();
        return this.issues;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  };

}
