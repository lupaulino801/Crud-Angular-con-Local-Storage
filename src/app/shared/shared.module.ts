import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { APP_ROUTN } from './app.routeshared';
import { ViewsComponent } from './views/views.component';



@NgModule({
  declarations: [
    HomeComponent,
    UpdateComponent,
    ViewsComponent
  ],
  exports:[
    ViewsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    APP_ROUTN
  ]
})
export class SharedModule { }
