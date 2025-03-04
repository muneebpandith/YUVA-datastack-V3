/* *
 * LimaLabs provider, used for tile map services
 * */
'use strict';
/* *
 *
 *  Class
 *
 * */
var LimaLabs = /** @class */ (function () {
    function LimaLabs() {
        /* *
         *
         *  Properties
         *
         * */
        this.defaultCredits = ('Map data &copy;2023' +
            ' <a href="https://maps.lima-labs.com/">LimaLabs</a>');
        this.initialProjectionName = 'WebMercator';
        this.requiresApiKey = true;
        this.themes = {
            Standard: {
                url: 'https://cdn.lima-labs.com/{zoom}/{x}/{y}.png?api={apikey}',
                minZoom: 0,
                maxZoom: 20
            }
        };
    }
    return LimaLabs;
}());
/* *
 *
 *  Default Export
 *
 * */
export default LimaLabs;
