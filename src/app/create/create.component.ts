import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { AddTutorial } from "../app.state";

@Component({
  selector: "app-create",
  template: `
    <div class="left">
      <input type="text" placeholder="name" #name />
      <input type="text" placeholder="url" #url />

      <button (click)="addTutorial(name.value, url.value)">
        Add a Tutorial
      </button>
    </div>
  `
})
export class CreateComponent implements OnInit {
  constructor(private store: Store) {}

  addTutorial(name, url) {
    this.store.dispatch(new AddTutorial({ name: name, url: url }));
  }

  ngOnInit() {}
}
