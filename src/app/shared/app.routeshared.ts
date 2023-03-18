import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UpdateComponent } from "./update/update.component";





const APP_ROUT : Routes = [
  {path: '', component: HomeComponent},
  {path: 'update/:i', component: UpdateComponent}
]



export const APP_ROUTN = RouterModule.forRoot(APP_ROUT);
