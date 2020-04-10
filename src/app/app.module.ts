import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FeedComponent } from './feed/feed.component';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
import { CodeBoxComponent } from './code-box/code-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FeedComponent,
    HeaderSidebarComponent,
    SafeHtmlPipe,
    CrudComponent,
    HomeComponent,
    CodeBoxComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
