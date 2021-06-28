function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
    return "This one is on me!"
  }
   else if (someValue > 2000) {
     return "I will gladly take your thirty bucks."
  } 
  else if (someValue > 2500) {
    return "No can do."
  }
// Write your code here!
}

function ternaryCheckCity(cityName){
  return (cityName = 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(tipGenerosity){
  switch (tipGenerosity) {
    case 'generous' : return "Thank you so much."
    case 'not as generous' : return "Thank you."
    case 'thanks for everything' :return "Bye."
  }
   
}