import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Tutorial, TutorialState, RemoveTutorial } from "../app.state";
import { Observable } from "rxjs";

@Component({
  selector: "app-read",
  template: `
    <div class="right" *ngIf="tutorials$">
      <h3>Tutorials</h3>
      <ul>
        <li
          (click)="delTutorial(tutorial.name)"
          *ngFor="let tutorial of (tutorials$ | async)"
        >
          <a [href]="tutorial.url" target="_blank">{{ tutorial.name }}</a>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  tutorials$: Observable<Tutorial>;

  constructor(private store: Store) {
    this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
  }

  delTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name));
  }

  ngOnInit() {}
}
