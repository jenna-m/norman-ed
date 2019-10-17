/* This file contains all artwork data. 
Some things to keep in mind when using and editing this document:
    - galleryImages needs to be imported wherever this file is used.
    - All images will live in the /gallery folder, along with this file.
    - After galleryImages is mapped, you can access the data for each item like so:
        Title: {item.title}
        Src: {item.src[0]}, {item.src[1]}, etc.
        Date: {item.date}
        Dimensions: {item.dimensions}
        etc.
    - The 'category' key corresponds with the era of the artwork ('pre-collegiate',
    'undergrad', 'post-collegiate').
    This will be used to sort the gallery by era and for breadcrumb navigation.
    To sort by date, use an if statement and use item.date.
*/


// Import all images
import item1 from './calligraphy-project/calligraphy-project.png';
import item2 from './collagraph-1/collagraph-1.png';
import item3 from './collagraph-2/collagraph-2.png';
import item4 from './figure-study/figure-study.png'
import item5 from './lithograph/lithograph.png';
import item6 from './pencil-study/pencil-study.png';
import item7 from './photo-book/photo-book.png';
import item8 from './print/print.png';
import item9 from './seismograph/seismograph.png';
import item10a from './self-portrait/self-portrait-1.png';
import item10b from './self-portrait/self-portrait-2.png';
import item11 from './small-painting/small-painting.png';
import item12 from './small-watercolor/small-watercolor.png';
import item13a from './arc/arc-1.png';
import item13b from './arc/arc-2.png';
import item14 from './ghost-ship/ghost-ship.png';
import item15 from './metals-project/metals-project.png';
import item16a from './orbit/orbit-1.png';
import item16b from './orbit/orbit-2.png';
import item17a from './three-king-vessel/three-king-vessel-1.png';
import item17b from './three-king-vessel/three-king-vessel-2.png';
import item18 from './three-kings-after-roualt/three-kings-after-roualt.png';
import item19a from './wall/wall-1.png';
import item19b from './wall/wall-2.png';
import item20a from './wall-ship/wall-ship-1.png';
import item20b from './wall-ship/wall-ship-2.png';
import item21 from './hinged-lamp/hinged-lamp.png';
import item22 from './lamp-1/lamp-1.png';
import item23 from './lamp-2/lamp-2.png';
import item24 from './lamp-for-ruth-king/lamp-for-ruth-king.png';
import item25 from './nest/nest.png';
import item26 from './blue-light-special/blue-light-special.png';
import item27a from './choice/choice-1.png';
import item27b from './choice/choice-2.png';
import item28a from './hinged-arc/hinged-arc-1.png';
import item28b from './hinged-arc/hinged-arc-2.png';
import item28c from './hinged-arc/hinged-arc-3.png';
import item28d from './hinged-arc/hinged-arc-4.png';
import item29a from './hinged-pair/hinged-pair-1.png';
import item29b from './hinged-pair/hinged-pair-2.png';
import item30 from './rotating-lamp/rotating-lamp.png';
import item31a from './st-sebastian/st-sebastian-1.png';
import item31b from './st-sebastian/st-sebastian-2.png';
import item32 from './street-lamp/street-lamp.png';
import item33 from './untitled-lens/untitled-lens.png';
import item34a from './cups/cups-1.png';
import item34b from './cups/cups-2.png';
import item35a from './hinged-vessel/hinged-vessel-1.png';
import item35b from './hinged-vessel/hinged-vessel-2.png';
import item36a from './on-point/on-point-1.png';
import item36b from './on-point/on-point-2.png';
import item36c from './on-point/on-point-3.png';
import item36d from './on-point/on-point-4.png';
import item37a from './picture-vessel/picture-vessel-1.png';
import item37b from './picture-vessel/picture-vessel-2.png';
import item38a from './quiet-cone/quiet-cone-1.png';
import item38b from './quiet-cone/quiet-cone-2.png';
import item38c from './quiet-cone/quiet-cone-3.png';
import item39a from './standing-cup/standing-cup-1.png';
import item39b from './standing-cup/standing-cup-2.png';
import item40a from './standing-vessel/standing-vessel-1.png';
import item40b from './standing-vessel/standing-vessel-2.png';
import item40c from './standing-vessel/standing-vessel-3.png';
import item40d from './standing-vessel/standing-vessel-4.png';
import item40e from './standing-vessel/standing-vessel-5.png';
import item41a from './untitled-tool-box/untitled-tool-box-1.png';
import item41b from './untitled-tool-box/untitled-tool-box-2.png';
import item42 from './hidden-vessel/hidden-vessel.png';
import item43a from './hull/hull-1.png';
import item43b from './hull/hull-2.png';
import item44a from './reclining-vessel/reclining-vessel-1.png';
import item44b from './reclining-vessel/reclining-vessel-2.png';
import item44c from './reclining-vessel/reclining-vessel-3.png';
import item45 from './standing-figure/standing-figure.png';
import item46a from './tool-with-holder/tool-with-holder-1.png';
import item46b from './tool-with-holder/tool-with-holder-2.png';
import item47 from './untitled-1996/untitled-1996.png';
import item48a from './untitled-ladle-1/untitled-ladle-1-1.png';
import item48b from './untitled-ladle-1/untitled-ladle-1-2.png';
import item48c from './untitled-ladle-1/untitled-ladle-1-3.png';
import item49a from './untitled-ladle-4/untitled-ladle-4-1.png';
import item49b from './untitled-ladle-4/untitled-ladle-4-2.png';
import item49c from './untitled-ladle-4/untitled-ladle-4-3.png';
import item50a from './bed-vault/bed-vault-1.png';
import item50b from './bed-vault/bed-vault-2.png';
import item50c from './bed-vault/bed-vault-3.png';
import item50d from './bed-vault/bed-vault-4.png';
import item50e from './bed-vault/bed-vault-5.png';
import item51a from './icon-series/icon-series-1.png';
import item51b from './icon-series/icon-series-2.png';
import item51c from './icon-series/icon-series-3.png';
import item51d from './icon-series/icon-series-4.png';
import item51e from './icon-series/icon-series-5.png';
import item51f from './icon-series/icon-series-6.png';
import item51g from './icon-series/icon-series-7.png';
import item51h from './icon-series/icon-series-8.png';
import item52a from './press/press-1.png';
import item52b from './press/press-2.png';
import item52c from './press/press-3.png';
import item53a from './ride/ride-1.png';
import item53b from './ride/ride-2.png';
import item54 from './stack/stack.png';
import item55 from './three-vessels-tied/three-vessels-tied.png';
import item56a from './untitled-point/untitled-point-1.png';
import item56b from './untitled-point/untitled-point-2.png';
import item56c from './untitled-point/untitled-point-3.png';
import item57 from './wesley/wesley.png'
import item58a from './drivers-seat/drivers-seat-1.png';
import item58b from './drivers-seat/drivers-seat-2.png';
import item58c from './drivers-seat/drivers-seat-3.png';
import item58d from './drivers-seat/drivers-seat-4.png';
import item59a from './gideons-lamp/gideons-lamp-1.png';
import item59b from './gideons-lamp/gideons-lamp-2.png';
import item59c from './gideons-lamp/gideons-lamp-3.png';
import item60a from './marital-aid/marital-aid-1.png';
import item60b from './marital-aid/marital-aid-2.png';
import item60c from './marital-aid/marital-aid-3.png';
import item60d from './marital-aid/marital-aid-4.png';
import item61a from './untitled-1998/untitled-1998-1.png';
import item61b from './untitled-1998/untitled-1998-2.png';
import item61c from './untitled-1998/untitled-1998-3.png';
import item62a from './untitled-adjustable-sculpture-2/untitled-adjustable-sculpture-2-1.png';
import item62b from './untitled-adjustable-sculpture-2/untitled-adjustable-sculpture-2-2.png';
import item62c from './untitled-adjustable-sculpture-2/untitled-adjustable-sculpture-2-3.png';
import item63a from './untitled-ladle-3/untitled-ladle-3-1.png';
import item63b from './untitled-ladle-3/untitled-ladle-3-2.png';
import item64a from './untitled-tool/untitled-tool-1.png';
import item64b from './untitled-tool/untitled-tool-2.png';
import item64c from './untitled-tool/untitled-tool-3.png';
import item65a from './waiting/waiting-1.png';
import item65b from './waiting/waiting-2.png';
import item65c from './waiting/waiting-3.png';
import item66a from './childrens-thoughts/childrens-thoughts-1.png';
import item66b from './childrens-thoughts/childrens-thoughts-2.png';
import item66c from './childrens-thoughts/childrens-thoughts-3.png';
import item66d from './childrens-thoughts/childrens-thoughts-4.png';
import item67a from './large-plumb/large-plumb-1.png';
import item67b from './large-plumb/large-plumb-2.png';
import item67c from './large-plumb/large-plumb-3.png';
import item67d from './large-plumb/large-plumb-4.png';
import item67e from './large-plumb/large-plumb-5.png';
import item68a from './long-box/long-box-1.png';
import item68b from './long-box/long-box-2.png';
import item68c from './long-box/long-box-3.png';
import item69a from './no-title-1/no-title-1-1.png';
import item69b from './no-title-1/no-title-1-2.png';
import item69c from './no-title-1/no-title-1-3.png';
import item69d from './no-title-1/no-title-1-4.png';
import item69e from './no-title-1/no-title-1-5.png';
import item69f from './no-title-1/no-title-1-6.png';
import item69g from './no-title-1/no-title-1-7.png';
import item70 from './no-title-2/no-title-2.png';
import item71a from './reach/reach-1.png';
import item71b from './reach/reach-2.png';
import item71c from './reach/reach-3.png';
import item71d from './reach/reach-4.png';
import item71e from './reach/reach-5.png';
import item72a from './siblings/siblings-1.png';
import item72b from './siblings/siblings-2.png';
import item72c from './siblings/siblings-3.png';
import item72d from './siblings/siblings-4.png';
import item72e from './siblings/siblings-5.png';
import item73a from './untitled-adjustable-sculpture/untitled-adjustable-sculpture-1.png';
import item73b from './untitled-adjustable-sculpture/untitled-adjustable-sculpture-2.png';


// All Gallery image data
export const galleryImages = [
    {
        id: 1,
        category: 'pre-collegiate',
        title: 'Calligraphy Project',
        date: 1975,
        media: 'Ink', // missing media; I guessed
        dimensions: '24" x 18"',
        src: [item1]
    },
    {
        id: 2,
        category: 'pre-collegiate',
        title: 'Collagraph 1',
        date: 1975,
        media: 'Collagraphy Print',
        dimensions: '17" x 12"',
        src: [item2]
    },
    {
        id: 3,
        category: 'pre-collegiate',
        title: 'Collagraph 2',
        date: 1976,
        media: 'Collagraphy Print',
        dimensions: '17" x 12"',
        src: [item3]
    },
    {
        id: 4,
        category: 'pre-collegiate',
        title: 'Figure Study',
        date: 1975,
        media: 'Ceramic',
        dimensions: '9" x 8" x 6"',
        src: [item4]
    },
    {
        id: 5,
        category: 'pre-collegiate',
        title: 'Lithograph',
        date: 1976,
        media: 'Lithograph', // missing media; I guessed
        dimensions: '10" x 8"',
        src: [item5]
    },
    {
        id: 6,
        category: 'pre-collegiate',
        title: 'Pencil Study',
        date: 1976,
        media: 'Graphite',
        dimensions: '20" x 16"',
        src: [item6]
    },
    {
        id: 7,
        category: 'pre-collegiate',
        title: 'Photo Book',
        date: 1976,
        media: 'Black & White Photography',
        dimensions: 'Unknown Dimensions', // missing dimensions
        src: [item7]
    },
    {
        id: 8,
        category: 'pre-collegiate',
        title: 'Print',
        date: 1976,
        media: 'Silkscreen',
        dimensions: '23" x 14"',
        src: [item8]
    },
    {
        id: 9,
        category: 'pre-collegiate',
        title: 'Seismograph',
        date: 1976,
        media: 'Etching',
        dimensions: '12" x 6"',
        src: [item9]
    },
    {
        id: 10,
        category: 'pre-collegiate',
        title: 'Self Portrait',
        date: 1976,
        media: 'Ceramic, Wood',
        dimensions: '24" x 24" x 12"',
        src: [item10a, item10b]
    },
    {
        id: 11,
        category: 'pre-collegiate',
        title: 'Small Painting',
        date: 1975,
        media: 'Acrylic, Gold Leaf',
        dimensions: '8" x 8"',
        src: [item11]
    },
    {
        id: 12,
        title: 'Small Watercolor',
        category: 'pre-collegiate',
        date: 1976,
        media: 'Watercolor',
        dimensions: '6" x 12"',
        src: [item12]
    },
    {
        id: 13,
        category: 'undergrad',
        title: 'Arc',
        date: 1981,
        media: 'Blown Glass',
        dimensions: '8" x 12" x 3"',
        src: [item13a, item13b]
    },
    {
        id: 14,
        category: 'undergrad',
        title: 'Ghost-Ship', // should it be hyphenated?
        date: 1981,
        media: 'Glass',
        dimensions: '48" x 96"',
        src: [item14]
    },
    {
        id: 15,
        category: 'undergrad',
        title: 'Metals Project',
        date: 1977,
        media: 'Sterling Silver, Brass',
        dimensions: 'Unknown Dimensions',
        src: [item15]
    },
    {
        id: 16,
        category: 'undergrad',
        title: 'Orbit',
        date: 1981,
        media: 'Glass, Steel',
        dimensions: '60" x 36" x 144"',
        src: [item16a, item16b]
    },
    {
        id: 17,
        category: 'undergrad',
        title: 'Three King Vessel',
        date: 1980,
        media: 'Blown Glass',
        dimensions: '8" x 6"',
        src: [item17a, item17b]
    },
    {
        id: 18,
        category: 'undergrad',
        title: 'Three Kings After Rouault',
        date: 1978,
        media: 'Stained Glass',
        dimensions: '24" x 12"',
        src: [item18]
    },
    {
        id: 19,
        category: 'undergrad',
        title: 'Wall',
        date: 1981,
        media: 'Blown Glass',
        dimensions: '6" x 6" x 10"',
        src: [item19a, item19b]
    },
    {
        id: 20,
        category: 'undergrad',
        title: 'Wall Ship',
        date: 1981,
        media: 'Glass, Steel',
        dimensions: '12" x 8" x 10"',
        src: [item20a, item20b]
    },
    {
        id: 21,
        category: 'post-collegiate',
        title: 'Hinged Lamp',
        date: 1986,
        media: 'Steel, Found Parts',
        dimensions: '20" x 12" x 8"',
        src: [item21]
    },
    {
        id: 22,
        category: 'post-collegiate',
        title: 'Lamp 1',
        date: 1983,
        media: 'Glass, Brass',
        dimensions: '8" x 12" x 3"',
        src: [item22]
    },
    {
        id: 23,
        category: 'post-collegiate',
        title: 'Lamp 2',
        date: 1982,
        media: 'Blown Glass, Lamp Parts',
        dimensions: '17" x 7"',
        src: [item23]
    },
    {
        id: 24,
        category: 'post-collegiate',
        title: 'Lamp for Ruth King',
        date: 1983,
        media: 'Glass, Lamp Parts',
        dimensions: '16" x 7" x 6"',
        src: [item24]
    },
    {
        id: 25,
        category: 'post-collegiate',
        title: 'Nest',
        date: 1983,
        media: 'Glass, Steel, Brass',
        dimensions: '24" x 24" x 36"',
        src: [item25]
    },
    {
        id: 26,
        category: 'post-collegiate',
        title: 'Blue Light Special',
        date: 1990,
        media: 'Copper, Found Parts',
        dimensions: '12" x 8"',
        src: [item26]
    },
    {
        id: 27,
        category: 'post-collegiate',
        title: 'Choice',
        date: 1993,
        media: 'Steel, Stone, Ceramic',
        dimensions: '72" x 36" x 48"',
        src: [item27a, item27b]
    },
    {
        id: 28,
        category: 'post-collegiate',
        title: 'Hinged Arc',
        date: 1993,
        media: 'Wood, Steel, Ceramic, Rubber',
        dimensions: '48" x 84" x 24"',
        src: [item28a, item28b, item28c, item28d]
    },
    {
        id: 29,
        category: 'post-collegiate',
        title: 'Hinged Pair',
        date: 1993,
        media: 'Steel, Wood',
        dimensions: '110" x 36" x 24"',
        src: [item29a, item29b]
    },
    {
        id: 30,
        category: 'post-collegiate',
        title: 'Rotating Lamp',
        date: 1986,
        media: 'Steel, Glass, Lamp Parts',
        dimensions: '15" x 18" x 12"',
        src: [item30]
    },
    {
        id: 31,
        category: 'post-collegiate',
        title: 'St. Sebastian',
        date: 1987,
        media: 'Glass, Steel',
        dimensions: '20" x 14"',
        src: [item31a, item31b]
    },
    {
        id: 32,
        category: 'post-collegiate',
        title: 'Street Lamp',
        date: 1986,
        media: 'Found Parts',
        dimensions: '13" x 6"',
        src: [item32]
    },
    {
        id: 33,
        category: 'post-collegiate',
        title: 'Untitled Lens',
        date: 1989,
        media: 'Glass, Steel, Rubber',
        dimensions: '24" x 10" x 12"',
        src: [item33]
    },
    {
        id: 34,
        category: 'post-collegiate',
        title: 'Cups',
        date: 1994,
        media: 'Steel, Porcelain',
        dimensions: '6" x 4" (each)',
        src: [item34a, item34b]
    },
    {
        id: 35,
        category: 'post-collegiate',
        title: 'Hinged Vessel',
        date: 1994,
        media: 'Steel, Wood',
        dimensions: '80" x 24" x 18"',
        src: [item35a, item35b]
    },
    {
        id: 36,
        category: 'post-collegiate',
        title: 'On Point',
        date: 1994,
        media: 'Wood, Graphite',
        dimensions: '144" x 36" x 48"',
        src: [item36a, item36b, item36c, item36d]
    },
    {
        id: 37,
        category: 'post-collegiate',
        title: 'Picture Vessel',
        date: 1994,
        media: 'High Fire Stonewear',
        dimensions: '28" x 12"',
        src: [item37a, item37b]
    },
    {
        id: 38,
        category: 'post-collegiate',
        title: 'Quiet Cone',
        date: 1994,
        media: 'Slip Cast Ceramic, Fiber',
        dimensions: '36" x 120"',
        src: [item38a, item38b, item38c]
    },
    {
        id: 39,
        category: 'post-collegiate',
        title: 'Standing Cup',
        date: 1995,
        media: 'Steel, Black Porcelain',
        dimensions: '22" x 6" x 8"',
        src: [item39a, item39b]
    },
    {
        id: 40,
        category: 'post-collegiate',
        title: 'Standing Vessel',
        date: 1995,
        media: 'Wood, Steel, Rope',
        dimensions: '60" x 48" x 60"',
        src: [item40a, item40b, item40c, item40d, item40e]
    },
    {
        id: 41,
        category: 'post-collegiate',
        title: 'Untitled Tool Box',
        date: 1995,
        media: 'Wood, Metal',
        dimensions: '16" x 10" x 6"',
        src: [item41a, item41b]
    },
    {
        id: 42,
        category: 'post-collegiate',
        title: 'Hidden Vessel',
        date: 1996,
        media: 'Steel, Handmade Bricks',
        dimensions: '40" x 11" x 11"',
        src: [item42]
    },
    {
        id: 43,
        category: 'post-collegiate',
        title: 'Hull',
        date: 1996,
        media: 'Wood, Glass, Canvas',
        dimensions: '60" x 72" x 132"',
        src: [item43a, item43b]
    },
    {
        id: 44,
        category: 'post-collegiate',
        title: 'Reclining Vessel',
        date: 1996,
        media: 'Wood, Roofing Material',
        dimensions: '84" x 48" x 48"',
        src: [item44a, item44b, item44c]
    },
    {
        id: 45,
        category: 'post-collegiate',
        title: 'Standing Figure',
        date: 1996,
        media: 'Carved Firebrick',
        dimensions: '72" x 18" x 36"',
        src: [item45]
    },
    {
        id: 46,
        category: 'post-collegiate',
        title: 'Tool with Holder',
        date: 1996,
        media: 'Mixed Media',
        dimensions: '4" x 3" x 23"',
        src: [item46a, item46b]
    },
    {
        id: 47,
        category: 'post-collegiate',
        title: 'Untitled',
        date: 1996,
        media: 'Wood, Steel',
        dimensions: '72" x 36" x 14"',
        src: [item47]
    },
    {
        id: 48,
        category: 'post-collegiate',
        title: 'Untitled Ladle #1',
        date: 1996,
        media: 'Steel, Brass',
        dimensions: '18" x 17" x 43"',
        src: [item48a, item48b, item48c]
    },
    {
        id: 49,
        category: 'post-collegiate',
        title: 'Untitled Ladle #4',
        date: 1996,
        media: 'Glass, Wood, Metal',
        dimensions: '36" x 48" x 84"',
        src: [item49a, item49b, item49c]
    },
    {
        id: 50,
        category: 'post-collegiate',
        title: 'Bed/Vault',
        date: 1997,
        media: 'Mixed Media',
        dimensions: '144" x 36" x 60"',
        src: [item50a, item50b, item50c, item50d, item50e] 
    },
    {
        id: 51,
        category: 'post-collegiate',
        title: 'Icon Series I - III',
        date: 1997,
        media: 'Wood, Ceramic, Metal, Leather',
        dimensions: '12" x 8"',
        src: [item51a, item51b, item51c, item51d, item51e, item51f, item51g, item51h]
    },
    {
        id: 52,
        category: 'post-collegiate',
        title: 'Press',
        date: 1997,
        media: 'Concrete, Metal, Water',
        dimensions: '48" x 13" x 20"',
        src: [item52a, item52b, item52c]
    },
    {
        id: 53,
        category: 'post-collegiate',
        title: 'Ride',
        date: 1997,
        media: 'Steel, Wood',
        dimensions: '72" x 150"',
        src: [item53a, item53b]
    },
    {
        id: 54,
        category: 'post-collegiate',
        title: 'Stack (21 Tool Boxes)',
        date: 1997,
        media: 'Wood',
        dimensions: '80" x 30" x 56"',
        src: [item54]
    },
    {
        id: 55,
        category: 'post-collegiate',
        title: 'Three Vessels Tied',
        date: 1997,
        media: 'Pit Fired Ceramic, Cloth',
        dimensions: '22" x 10"',
        src: [item55]
    },
    {
        id: 56,
        category: 'post-collegiate',
        title: 'Untitled Point',
        date: 1996,
        media: 'Wood, Steel',
        dimensions: '96" x 60" x 36"',
        src: [item56a, item56b, item56c]
    },
    {
        id: 57,
        category: 'post-collegiate',
        title: 'Wesley at Five Being David Hockney',
        date: 1996,
        media: 'Photo Collage',
        dimensions: 'Unknown Dimensions', // No dimensions listed
        src: [item57]
    },
    {
        id: 58,
        category: 'post-collegiate',
        title: 'Driver\'s Seat',
        date: 1998,
        media: 'Mixed Media',
        dimensions: '72" x 60" x 60"',
        src: [item58a, item58b, item58c, item58d] 
    },
    {
        id: 59,
        category: 'post-collegiate',
        title: 'Gideon\'s Lamp',
        date: 1998,
        media: 'Steel, Wood, Ceramic, Gold Leaf, Way', // unsure about 'way'
        dimensions: '21" x 6" x 12"',
        src: [item59a, item59b, item59c]
    },
    {
        id: 60,
        category: 'post-collegiate',
        title: 'Marital Aid',
        date: 1998,
        media: 'Mixed Media',
        dimensions: '84" x 28" x 140"',
        src: [item60a, item60b, item60c, item60d]
    },
    {
        id: 61,
        category: 'post-collegiate',
        title: 'Untitled',
        date: 1997,
        media: 'Wood, Felt Paper',
        dimensions: '72" x 120" x 12"',
        src: [item61a, item61b, item61c]
    },
    {
        id: 62,
        category: 'post-collegiate',
        title: 'Untitled Adjustable Sculpture #2',
        date: 1997,
        media: 'Wood, Steel',
        dimensions: '27" x 18" x 96" - 145"',
        src: [item62a, item62b, item62c]
    },
    {
        id: 63,
        category: 'post-collegiate',
        title: 'Untitled Ladle #3',
        date: 1997,
        media: 'Steel, Glass',
        dimensions: '22" x 10" x 40"',
        src: [item63a, item63b]
    },
    {
        id: 64,
        category: 'post-collegiate',
        title: 'Untitled Tool',
        date: 1997,
        media: 'Wood, Steel',
        dimensions: '8" x 72" x 72"',
        src: [item64a, item64b, item64c]
    },
    {
        id: 65,
        category: 'post-collegiate',
        title: 'Waiting',
        date: 1997,
        media: 'Found Objects',
        dimensions: '84" x 18" x 18"',
        src: [item65a, item65b, item65c]
    },
    {
        id: 66,
        category: 'post-collegiate',
        title: 'Children\'s Thoughts',
        date: 1999,
        media: 'Mixed Media',
        dimensions: '96" x 40" x 144"',
        src: [item66a, item66b, item66c, item66d] 
    },
    {
        id: 67,
        category: 'post-collegiate',
        title: 'Large Plumb',
        date: 1999,
        media: 'Wood, Aluminum',
        dimensions: '240" x 72"',
        src: [item67a, item67b, item67c, item67d, item67e]
    },
    {
        id: 68,
        category: 'post-collegiate',
        title: 'Long Box',
        date: 1999,
        media: 'Wood, Steel, Rubber',
        dimensions: '72" x 60" x 96"',
        src: [item68a, item68b, item68c]
    },
    {
        id: 69,
        category: 'post-collegiate',
        title: 'No Title 1',
        date: 1998,
        media: 'Wood, Steel',
        dimensions: '96" x 96" x 108"',
        src: [item69a, item69b, item69c, item69d, item69e, item69f, item69g]
    },
    {
        id: 70,
        category: 'post-collegiate',
        title: 'No Title 2',
        date: 1999,
        media: 'Wood, Steel, Rubber',
        dimensions: '36" x 30" x 30"',
        src: [item70]
    },
    {
        id: 71,
        category: 'post-collegiate',
        title: 'Reach',
        date: 1999,
        media: 'Wood, Aluminum, Steel, Rubber',
        dimensions: '144" x 72" x 60"',
        src: [item71a, item71b, item71c, item71d, item71e]
    },
    {
        id: 72,
        category: 'post-collegiate',
        title: 'Siblings',
        date: 1999,
        media: 'Wood, Steel',
        dimensions: '120" x 60" x 84"',
        src: [item72a, item72b, item72c, item72d, item72e]
    },
    {
        id: 73,
        category: 'post-collegiate',
        title: 'Untitled Adjustable Sculpture',
        date: 1998,
        media: 'Wood, Steel',
        dimensions: '4 1/2" x 10" x 120" - 228"',
        src: [item73a, item73b]
    },
];

// const for total number of items in the gallery
export const galleryCount = 73;