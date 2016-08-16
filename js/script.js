
var quotesArray = ['It always seems impossible until its done.',
    'In order to succeed, we must first believe that we can.',
    'You are never too old to set another goal or to dream a new dream.',
    'Always do your best. What you plant now, you will harvest later',
    'Start where you are. Use what you have. Do what you can.',
    'Keep your eyes on the stars, and your feet on the ground.',
    'Problems are not stop signs, they are guidelines.',
    'If you can dream it, you can do it.'];

function funkcijaZaRandomCitat() {

    var randomPosition = Math.floor(Math.random() * quotesArray.length);
    var quote = quotesArray[randomPosition];
    document.getElementById("citatText").innerHTML = (quote);
}



