const quotes = [
    '"The poetry of the earth is never dead."',
    '"Heaven is under our feet as well as over our heads."',
    '"To sit in the shade on a fine day, and look upon verdure, is the most perfect refreshment."',
    '"Nature always wears the colors of the spirit."',
    '"The clearest way into the Universe is through a forest wilderness."',
];

const images=[
    'https://wallpaperaccess.com/full/7241.jpg',
    'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'http://wallup.net/wp-content/uploads/2016/03/10/319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg',
    'https://wallpaperaccess.com/full/3331578.jpg',
    'https://wallpaperaccess.com/full/7280.jpg',
    'https://wallpaperaccess.com/full/4299524.jpg'

];
 
// let randomNumber=Math.random();
// console.log("randomNumber",randomNumber);

// let quotesLength = quotes.length;
// console.log('quotesLength',quotesLength);

// let multiplication=randomNumber*quotesLength;
// console.log("multiplication",multiplication);

// let floorMultiplication=Math.floor(multiplication);
// console.log("floorMultiplication",floorMultiplication);


function change(){
    let randomQuotes=quotes[ Math.floor(Math.random()*quotes.length)];
    let randomImage=images[Math.floor(Math.random()*images.length)];

    document.getElementById('quotes').innerHTML=randomQuotes;
    document.body.style.backgroundImage=`url(${randomImage})`;
};
change();
