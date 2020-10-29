import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupComponent } from './group/group.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TraineeListComponent } from './trainee-list/trainee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    GroupComponent,
    TrainerListComponent,
    TraineeListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
