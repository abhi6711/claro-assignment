/**
 * Dataservice is used to share the data between different components.
 */

/**
 * Import all the angular dependencies here
 */
import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

    private _shop_card = new BehaviorSubject<object>({});
    public $card_details = this._shop_card.asObservable();
    constructor() { }

    /**
     * This function will stoer the item deatils in a subject
     * @param cardDetails: it's an object of user_details
     */
    storeCardDetails(cardDetails: object) {
        this._shop_card.next(cardDetails);
    }
}
