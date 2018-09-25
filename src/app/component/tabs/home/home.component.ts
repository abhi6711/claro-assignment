/**
 * Importing all the angular dependecies here
 */
import { Component, OnInit } from '@angular/core';

/**
 * Importing all the internal dependencies here
 */
import { ApiService } from '../../../services/api.service';
import { DataService } from '../../../services/data.service';
import { Constants } from '../../../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  // variables binded to html
  beerList: any;
  isLoaded: boolean;
  isError: boolean;
  loader = true;
  dislikeIcon = true;
  likeIcon: boolean;
  favouriteList = [];
  itemDesc: string;

  constructor(private _apiService: ApiService, private _dataService: DataService) { }

  // This will be called just after the constructor has been initialized
  ngOnInit() {
    this.fetchBeerDetails();
  }

  /**
   * This function will fetch all the beer details by calling the function
   * from api service which will do http GET request
   * @returns void
   */
  public fetchBeerDetails(): void {
    this._apiService.doGetReuqest(Constants.GET_BEERS_URL)
      .subscribe((response) => {
        this.loader = false;
        this.isLoaded = true;
        this.beerList = JSON.parse(response['_body']);
        for (let i = 0; i < this.beerList.length; i++) {
          this.beerList[i]['favourite'] = false;
        }
      }, (error) => {
        this.loader = false;
        this.isError = true;
      });
  }

  /**
   * This function will change the state of the shopping card from like to dislike or
   * vice versa and it will store the favourite data into a subject by calling data
   * service
   * @param cardId : id of the card
   * @param state : it's value will be true or false
   * @return void
   */
  public likeDislikeItem(cardId: number, state: string): void {
    // this.dislikeIcon = !this.dislikeIcon;
    if (state === 'like') {
      this.addRemoveItems(cardId, 'add', true);
    } else {
      this.addRemoveItems(cardId, 'delete', false);
    }
  }

  /**
   * This function will update the add or remove the item to favoruiteList array
   * @param cardId : id of the card
   * @param operation : it's value would be add or delete
   * @param favoriteValue : value of the favourite key of the beer list
   */
  public addRemoveItems(cardId: number, operation: string, favoriteValue: boolean): void {
    for (let i = 0; i < this.beerList.length; i++) {
      if (this.beerList[i]['id'] === cardId) {
        this.beerList[i]['favourite'] = favoriteValue;
        // checking the operation to be performed
        if (operation === 'add') {
          this.favouriteList.push(this.beerList[i]);
          this._dataService.storeCardDetails(this.favouriteList);
        } else {
          // checking the length of favoruite list array and if > 0 the delete
          if (this.favouriteList.length > 0) {
            this.favouriteList.splice(i, 1);
          }
        }
      }
    }
  }

  /**
   * This function is triggered when user clicks search button. It will take the input
   * value entered into search field and make the query by making the GET request to the
   * server using apiservice.
   * @returns void
   */
  public searchItem(): void {
    if (this.itemDesc.length > 0) {
      const URL = Constants.GET_BEERS_URL + '?beer_name=' + this.itemDesc;
      this._apiService.doGetReuqest(URL).subscribe((response) => {
        this.beerList = JSON.parse(response['_body']);
      });
    } else {
      this.fetchBeerDetails();
    }
  }
}
