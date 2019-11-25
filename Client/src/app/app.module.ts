import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyMemberListComponent } from './components/family-member-list/family-member-list.component';
import { FamilyMemberComponent } from './components/family-member/family-member.component';
import { HeaderComponent } from './layouts/header/header.component';
import { AddFamilyMemberComponent } from './components/add-family-member/add-family-member.component';
import { UpdateFamilyMemberComponent } from './components/update-family-member/update-family-member.component';


@NgModule({
  declarations: [
    AppComponent,
    FamilyMemberListComponent,
    FamilyMemberComponent,
    HeaderComponent,
    AddFamilyMemberComponent,
    UpdateFamilyMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
