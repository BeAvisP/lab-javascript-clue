// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: 'green'
    },
    {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'white'
    },
    {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer',
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
        color: 'purple'
    },
    {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'red'
    },
    {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: 'blue'
    },
    {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        color: 'yellow'
    }
];

// Rooms Collection
const roomsArray = [
    {name: 'Dining Room'},
    {name: 'Conservatory'},
    {name: 'Kitchen'},
    {name: 'Study'},
    {name: 'Library'},
    {name: 'Billiard Room'},
    {name: 'Lounge'},
    {name: 'Ballroom'},
    {name: 'Hall'},
    {name: 'Spa'},
    {name: 'Living Room'},
    {name: 'Observatory'},
    {name: 'Theater'},
    {name: 'Guest House'},
    {name: 'Patio'}
];

// Weapons Collection
const weaponsArray = [
    {name: "rope", weigth: 10},
    {name: 'knife', weigth: 8},
    {name: "candlestick", weigth: 2},
    {name: "dumbbell", weigth: 30},
    {name: "poison", weigth: 2},
    {name: "axe", weigth: 15},
    {name: "bat", weigth: 13},
    {name: "trophy", weigth: 25},
    {name: "pistol", weigth: 20},
];

// ITERATION 2

let selectRandom = (arr) => {
    if (arr.length > 1) {
        let randNum = Math.floor(Math.random() * arr.length);
        return arr[randNum];
    } else if (arr.length === 1){
        return arr[0];
    }else {
        return undefined;
    }
};

let pickMystery = () => {
    let mystery = {}
    mystery.weapon = selectRandom(weaponsArray);
    mystery.suspect = selectRandom(suspectsArray);
    mystery.room = selectRandom(roomsArray);

    return mystery;
}

// ITERATION 3
revealMystery = (mystery) => {
    return `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!`
  }
  
  let mysteryPicked = pickMystery();
  let mysteryRevealed = revealMystery(mysteryPicked);