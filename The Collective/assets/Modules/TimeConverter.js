
export default function TimeConverter(value,from,to) {

    let units = ["Seconds","Minutes","Hours","Days"];
    let result = 0;

    let daysToSec = () => result = (value * 24 * 60 * 60);
    let daysToMin = () => result = (value * 24 * 60);
    let daysToHr = () => result = (value * 24);

    let hrToSec = () => result = (value * 60 * 60);
    let hrToMin = () => result = (value * 60);
    let hrToDays = () => result = (value / 24);

    let minToSec = () => result = (value * 60);
    let minToHr = () => result = (value/60);
    let minToDays = () => result = (value/(60*24));

    let secToMin = () => result = (value / 60);
    let secToHr = () => result = (value (60*60));
    let secToDays = () => result = (value / (60*60*24));

    let convert = () => {
        if(from === units[0] && to === units[1]) {
            secToMin();
        }else if(from === units[0] && to === units[2]) {
            secToHr();
        }else if(from === units[0] && to === units[3]) {
            secToDays();
        }else if(from === units[1] && to === units[0]) {
            minToSec();
        }else if(from === units[1] && to === units[2]) {
            minToHr();
        }else if(from === units[1] && to === units[3]) {
            minToDays();
        }else if(from === units[2] && to === units[0]) {
            hrToSec();
        }else if(from === units[2] && to === units[1]) {
            hrToMin();
        }else if(from === units[2] && to === units[3]) {
            hrToDays();
        }else if(from === units[3] && to === units[0]) {
            daysToSec();
        }else if(from === units[3] && to === units[1]) {
            daysToMin();
        }else if(from === units[3] && to === units[2]) {
            daysToHr();
        }else {result = value;}
    }

    convert();
    this.getResult = result;
}