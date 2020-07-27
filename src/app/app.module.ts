import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipePipe } from './sqrt-pipe.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BasicsComponent } from './basics/basics.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ScrollComponent } from './scroll/scroll.component';
import { MyserviceService } from './myservice.service';
import { MyscrollserviceService } from './myscrollservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    SqrtPipePipe,
    HomeComponent,
    BasicsComponent,
    PagenotfoundComponent,
    FormsComponent,
    ReactiveformsComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [MyserviceService, MyscrollserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }