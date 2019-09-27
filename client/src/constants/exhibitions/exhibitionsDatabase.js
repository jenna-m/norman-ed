/* This file contains all exhibition data. 
Add most recent exhibitions to the beginning of the array.
The database is formatted as follows:
    { 
        id: 1,                      // ID # for exhibition information
        src: item#                  // # corresponds w/ ID
        title: 'Title',             // title of exhibition
        url: 'URL',                 // link to exhibit website
        venue: 'Venue',             // venue of exhibition
        location: 'City, State',    // city and state of exhibition
        desc: 'String...'           // short description of exhibition (optional)
        date: 'Dates',              // opening and closing of exhibition
        year: 2019,                 // integer
    }
*/

// import all images
import item1 from './dialogue/dialogue-coffee-press.jpg';
import item2 from './art-of-the-state/art-of-the-state-domestic-dispute.jpg';
import item3 from './sojourners-allies-builders/sojourners-allies-builders.jpg'


export const exhibitionsInfo = [
    {
        id: 3,
        src: item3,
        title: 'Sojourners, Allies & Builders',
        url: 'https://www.tribdem.com/features/family-exhibition-at-westmont-arts-center-is-true-unique-and/article_a4ce17e2-d0d1-11e9-953a-2bf74d99d89d.html',
        venue: 'Community Arts Center of Cambria County',
        location: 'Johnstown, PA',
        desc: 'An exhibition of sculptures and paintings by the Ed Family',
        date: 'August 30 through September 27, 2019',
        year: 2019,
    },
    {
        id: 2,
        src: item2,
        title: 'Art of the State',
        url: 'https://www.pennlive.com/life/2017/06/2017_art_of_the_state_exhibit.html',
        venue: 'State Museum of Pennsylvania',
        location: 'Harrisburg, PA',
        desc: 'An annual juried exhibition that has been showcasing the work of Pennsylvania artists since 1968',
        date: 'June 11 through September 10, 2017',
        year: 2017,
    },
    {
        id: 1,
        src: item1,
        title: 'DIALOGUE',
        url: 'https://artworksjohnstown.wordpress.com/2012/06/03/check-out-some-photos-from-the-opening-night-of-dialogue/',
        venue: 'Art Works',
        location: 'Johnstown, PA',
        desc: 'A local exhibition with painter Chuck Olson',
        date: 'June 2 through July 14, 2012',
        year: 2012,
    }
]