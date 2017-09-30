//kelvin variable that is constant
//add a prompt for a user to enter a question
const kelvin = prompt('What is the Kelvin temperatue today?')

//celcius variable which is 273 minus kelvin amount
const celsius = (kelvin - 273);

//calculate fahrenheit with celsius and round down
const fahrenheit = Math.floor(celsius * (9/5) + 32);

//print to console what the temparture is of 294 kelvin in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
