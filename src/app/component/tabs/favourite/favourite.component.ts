/**
 * Importing all the angular dependecies here
 */
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

/**
 * Importing all the internal dependencies here
 */
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  subscription: Subscription;
  // Variables binded to html
  favouriteList: any;
  isLoaded: boolean;
  isError = false;

  constructor(private _dataService: DataService) { }

  /**
   * This is called just after the contructor has been initialized and it will fetch
   * favourite items from the subject in the data service and show them if there are
   * some favourite items in the list otherwise not.
   */
  ngOnInit() {
    this.subscription = this._dataService.$card_details.subscribe((response) => {
      this.favouriteList = response;
      // Checking whether is there any favourite items or not
      if (this.favouriteList.length > 0) {
        this.isLoaded = true;
        this.isError = false;
      }
    });
  }

}
