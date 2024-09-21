const quotes = [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      answer: "By overcoming doubt, you can achieve success.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      answer: "Our reactions shape our outcomes in life.",
      author: "Charles R. Swindoll"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      answer: "Perseverance is key to enduring both success and failure.",
      author: "Winston Churchill"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      answer: "Taking chances is necessary for success.",
      author: "Wayne Gretzky"
    },
    {
      quote: "In the middle of difficulty lies opportunity.",
      answer: "Challenges can reveal opportunities for growth.",
      author: "Albert Einstein"
    },
    {
      quote: "The best way to predict the future is to create it.",
      answer: "You have the power to shape your future by your actions.",
      author: "Peter Drucker"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      answer: "Progress, no matter the pace, leads to success.",
      author: "Confucius"
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      answer: "Every achievement starts with a small action.",
      author: "Lao Tzu"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      answer: "Consistency and persistence lead to success over time.",
      author: "Sam Levenson"
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      answer: "Focus on adding value to the world, and success will follow.",
      author: "Albert Einstein"
    }
  ];
  

document.getElementById('quote').addEventListener('click', function(){
    const p = document.getElementById('quote-p');
    const h1 = document.getElementById('name');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomIndex]);
    p.innerText = quotes[randomIndex].quote;
    h1.innerText = quotes[randomIndex].author;

})
