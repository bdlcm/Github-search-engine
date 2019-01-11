import { NgModule } from "@angular/core";
import { SearchresultsComponent }  from "./searchresults/searchresults.components";
import { IonicModule } from "ionic-angular";
import { BrowserModule } from '@angular/platform-browser';
import { RepositoriesComponent } from './repositories/repositories.component';


@NgModule({
  declarations: [
    SearchresultsComponent,
    RepositoriesComponent
  ],
  imports: [IonicModule],
  exports: [
    SearchresultsComponent,
    RepositoriesComponent
  ]
})

export class ComponentsModule {

}
