
export function TempConverter(value,from,to) {
    
    let result = 0;
    let units = ["Celsius","Centigrade","Fahrenheit","Kelvin"];

    let fahrenheitToCelsius = () => result = (5*(value -32))/9;
    let celsiusToFahrenheit = () => result = ((9*value)/5)+32;
    let celsiusToKelvin = () => result = (value + 273);
    let kelvinToCelsius = () => result = (value-273);
    let fahrenheitToKelvin = () => result = (273 + ((5 *(value - 32))/9));
    let kelvinToFahrenheit = () => result = (((9*(value - 273))/5) + 32);

    let convert = () => {
        if(from === units[2] && to === units[0]) {
            fahrenheitToCelsius();
        }else if(from === units[2] && to === units[1]) {
            fahrenheitToCelsius();
        }else if(from === units[0] && to === units[2]) {
            celsiusToFahrenheit();
        }else if(from === units[1] && to === units[2]) {
            celsiusToFahrenheit();
        }else if(from === units[0] && to === units[3]) {
            celsiusToKelvin();
        }else if(from === units[1] && to === units[3]) {
            celsiusToKelvin();
        }else if(from === units[3] && to === units[0]) {
            kelvinToCelsius();
        }else if(from === units[3] && to === units[1]) {
            kelvinToCelsius();
        }else if(from === units[2] && to === units[3]) {
            fahrenheitToKelvin();
        }else if(from === units[3] && to === units[2]) {
            kelvinToFahrenheit();
        }else {result = value;}
    }

    convert();
    this.getResult = result;
}
