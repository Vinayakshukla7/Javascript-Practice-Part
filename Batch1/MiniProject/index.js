var quotes = [
    'What do you call a woman who knows where her husband is at all times? A widow.',
    'The dullard\'s envy of brilliant men is always assuaged by the suspicion that they will come to a bad end.',
    'Perhaps I am stronger than I think.',
    'Come in the evening, come in the morning, Come when expected, come without warning; Thousands of welcomes you\'ll find here before you, And the oftener you come, the more we\'ll adore you.',
    'Faithful are the wounds of a friend, but the kisses of an enemy are deceitful.',
    'There are those who have nothing chaste but their ears, and nothing virtuous but their tongues'
]
function newQuote(){
    var randomnumber= Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randomnumber];
}
