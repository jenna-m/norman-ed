// Random name placeholder for ContactForm
const nameArray = [
    'The Dude',
    'Cy Twombly',
    'Henri Matisse',
    'Salvador Dali',
    'Henry Moore',
    'Barbara Hepworth',
    'Jean Arp',
    'George Nakashima',
    'Wharton Esherick',
    'Violet Oakley'
];

let randomNameIndex = Math.floor(Math.random() * nameArray.length);

export const randomName = nameArray[randomNameIndex];