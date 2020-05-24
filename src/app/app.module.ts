import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";

import { AppComponent } from "./app.component";
import { TutorialState } from "./app.state";
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxsModule.forRoot([TutorialState]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  declarations: [AppComponent, CreateComponent, ReadComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
