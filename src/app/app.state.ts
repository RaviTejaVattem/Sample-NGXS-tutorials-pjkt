import { Injectable } from "@angular/core";
import { State, Action, StateContext, Store } from "@ngxs/store";
import { Observable } from "rxjs";

export class AddTutorial {
  static readonly type = "[TUTORIAL] Add";

  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial {
  static readonly type = "[TUTORIAL] Remove";

  constructor(public payload: string) {}
}

export interface Tutorial {
  name: string;
  url: string;
}

export interface TutorialStateModel {
  tutorials: Tutorial[];
}

@State<TutorialStateModel>({
  name: "tutorials",
  defaults: {
    tutorials: []
  }
})
@Injectable()
export class TutorialState {

  @Action(AddTutorial)
  add(ctx: StateContext<TutorialStateModel>, action: AddTutorial) {
    const state = ctx.getState();
    ctx.patchState({
      tutorials: [...state.tutorials, action.payload]
    });
  }

  @Action(RemoveTutorial)
  remove(ctx: StateContext<TutorialStateModel>, action: RemoveTutorial) {
    ctx.patchState({
      tutorials: ctx.getState().tutorials.filter(a => a.name != action.payload)
    });
  }
}
