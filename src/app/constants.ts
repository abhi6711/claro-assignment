/**
 * This class have the constant values which can be used anywhere in the project
 * using static readonly will not reassign the values
 */
export class Constants {
    // Routing constants
    static readonly HTTP = window.location.protocol + '//';
    static readonly BASE_URL = '/';
    static readonly JSON_TYPE = 'application/json';
    static readonly FAVOURITE = '/favourites';
    static readonly HOME = '/home';

    // Api Url's
    static readonly GET_BEERS_URL = 'https://api.punkapi.com/v2/beers';
}
