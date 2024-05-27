// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {

    let messages = []
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        console.log(message);
        messages.push(message)
    }

    return messages;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")


function countDown(number) {
    let i = number;
    while (i >= 0) { 
    console.log(i)
    i--
    }   

    return number;
}

countDown(10);
