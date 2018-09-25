/******************************* Description of Component *********************************
                            Tab component contains all the tabs
************************************ END *************************************************/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../../constants';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
    selectedTab: number;

    constructor(private router: Router) {
    }

    /**
     * Checking the current route and changing selected tab slider
     * according to the route
     */
    ngOnInit() {
        if (location.href === Constants.HTTP + location.host + Constants.BASE_URL ||
            location.href === Constants.HTTP + location.host + Constants.HOME) {
            this.selectedTab = 0;
        } else if (location.href === Constants.HTTP + location.host + Constants.FAVOURITE) {
            this.selectedTab = 1;
        } else {
            this.selectedTab = 2;
        }
    }
}
