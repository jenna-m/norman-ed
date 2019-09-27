/* This file contains all exhibit data. It's formatted as follows:
    { 
        id: 1,                      // ID # for exhibit information
        src: item#                  // # corresponds w/ ID
        title: 'Title',             // title of exhibit
        url: 'URL',                 // link to exhibit website
        venue: 'Venue',             // venue of exhibit
        location: 'City, State',    // city and state of exhibit
        desc: 'String...'           // short description of exhibit (optional)
        date: 'Dates',              // opening and closing of exhibit
        year: 2019,                 // used for sorting (integer)
    }
*/

// import all images
import item1 from './dialogue/dialogue-coffee-press.jpg';


export const exhibitInfo = [
    {
        id: 1,
        src: item1,
        title: 'DIALOGUE',
        url: 'https://artworksjohnstown.wordpress.com/2012/06/03/check-out-some-photos-from-the-opening-night-of-dialogue/',
        venue: 'Art Works',
        location: 'Johnstown, PA',
        desc: 'Exhibit with painter Chuck Olson',
        date: 'June 2 through July 14, 2012',
        year: 2012,
    },
]