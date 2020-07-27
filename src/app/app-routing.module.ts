import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicsComponent } from './basics/basics.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { FormsComponent} from './forms/forms.component';
import { ReactiveformsComponent} from './reactiveforms/reactiveforms.component';
import {ScrollComponent} from './scroll/scroll.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: "root", component: AppComponent },
  { path: "home", component: HomeComponent },
  { path: "basics", component: BasicsComponent },
  { path: "forms", component: FormsComponent },
  { path: "rforms", component: ReactiveformsComponent },
  { path: "scroll", component: ScrollComponent },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

export const RoutingComponent = [HomeComponent, BasicsComponent, AppComponent];