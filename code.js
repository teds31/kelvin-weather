//kelvin variable that is constant
const kelvin = 294

//celcius variable which is 273 minus kelvin amount
const celsius = (kelvin - 273);

//calculate fahrenheit with celsius and round down
const fahrenheit = Math.floor(celsius * (9/5) + 32);

//prompt a question for a user to enter the temperature in kelvin
prompt

//print to console what the temparture is of 294 kelvin in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
