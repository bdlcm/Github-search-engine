import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileSearchResultsPage } from "../profile-search-results/profile-search-results";
/**
 * Generated class for the ProfilesearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profilesearch',
  templateUrl: 'profilesearch.html',
})
export class ProfilesearchPage {
  username: string;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInformation(): void {
    this.navCtrl.push("ProfileSearchResultsPage", {
      username: this.username
    })
  }

}
