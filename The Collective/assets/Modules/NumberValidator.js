
export default function NumberValidator(number) {
    let result = "";
    let numberAr = number.split("");
    let firstThreeNumbersIsValid = false;
    let firstFourNumbersIsValid = false;

    let validate = () => {
        if(!Number.isNaN(number)) {
            if(numberAr.length === 11){
                let firstThreeNumbers = numberAr[0] + numberAr[1] + numberAr[2];
                if(firstThreeNumbers === "090" || firstThreeNumbers === "080" || firstThreeNumbers === "070" || firstThreeNumbers === "081"){
                    firstThreeNumbersIsValid = true;
                }
            }else if(numberAr.length === 14) {
                let firstFourNumbers = numberAr[0] + numberAr[1] + numberAr[2] + numberAr[3];
                let nextNums = numberAr[4] + numberAr[5];
                if(firstFourNumbers === "+234") {
                    if(nextNums === "90" || nextNums === "80" || nextNums === "70" || nextNums === "81") {
                        firstFourNumbersIsValid = true;
                    }    
                }
            }else if(numberAr.length === 15) {
                let firstFourNumbers = numberAr[0] + numberAr[1] + numberAr[2] + numberAr[3] + numberAr[4];
                let nextNums = numberAr[5] + numberAr[6];
                if(firstFourNumbers === "+234 ") {
                    if(nextNums === "90" || nextNums === "80" || nextNums === "70" || nextNums === "81") {
                        firstFourNumbersIsValid = true;
                    } 
                }
            }else if(numberAr.length === 13) {
                let firstThreeNumbers = numberAr[0] + numberAr[1] + numberAr[2];
                let nextNums = numberAr[3] + numberAr[4];
                if(firstThreeNumbers === "234") {
                    if(nextNums === "90" || nextNums === "80" || nextNums === "70" || nextNums === "81") {
                        firstThreeNumbersIsValid = true;
                    } 
                }
            }
        }
        result = (firstFourNumbersIsValid || firstThreeNumbersIsValid)? "Valid Phone Number" : "Invalid Phone Number"
    }

    validate();
    this.getResult = result;
}