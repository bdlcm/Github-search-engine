import { Component, Input } from '@angular/core';
import { User } from "../../models/user.interface";
import { BrowserModule } from '@angular/platform-browser';


/**
 * Generated class for the SearchresultsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'searchresults',
  templateUrl: 'searchresults.components.html'
})
export class SearchresultsComponent {

@Input() user: User

}
