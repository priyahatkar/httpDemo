import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './shared/components/dash-board/dash-board.component';
import { PostComponent } from './shared/components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { EditAddPostComponent } from './shared/components/edit-add-post/edit-add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    PostComponent,
    EditAddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
