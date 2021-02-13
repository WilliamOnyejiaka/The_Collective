
export default function OthersToMetre(value,from) {
    let result = 0;

    let deci = () => result = value/10; 
    let centi = () => result = value/100;
    let milli = () => result = value/1000;  

    let deca = () => result = value*10;
    let hecto = () => result = value*100; 
    let kilo = () => result = value*1000; 

    let convert = () => {
        if(from === "Decimetre") {
            deci();
        }else if(from === "Centimetre") {
            centi();
        }else if(from === "Millimetre") {
            milli();
        }else if(from === "Decametre") {
            deca();
        }else if(from === "Hectometre") {
            hecto();
        }else if(from === "Kilometre") {
            kilo();
        }
    }

    convert();
    this.getResult = result;
}
