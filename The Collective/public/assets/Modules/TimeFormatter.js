
export default function TimeFormatter(time,unit) {
    
    let convertTimeUnit = () => {
        switch(unit) {
            case"day":
                time *= 86400;
                break;
            case"hour":
                time *= 3600;
                break;
            case"minute":
                time *= 60;
                break;
            case"second":
                time = time;
                break;
            default:
                time = time;
                break;
        }
    }

    let getUnits = (day,hour,minute) => {
        let units = ["days","hrs","mins","s"];
        if(day === 1){units[0] = "day";}
        if(hour === 1){units[1] = "hr";}
        if(minute === 1){units[2] = "min";}
        return units;
    }

    let convertTime = () => {
        convertTimeUnit();
        let [day,hour,minute,flag] = [0,0,0,true];

        while(flag) {
            if(time >= 86400) {
                day++;
                time-=86400;
            }else if(time >= 3600) {
                hour++;
                time -= 3600;
            }else if(time >= 60) {
                minute++;
                time -= 60;
            }else if(time < 60) {
                flag = false;
            }
        }
        
        let units = getUnits(day,hour,minute);
        return (`${day} ${units[0]} : ${hour} ${units[1]} : ${minute} ${units[2]} : ${time} s`);
    }
    this.getFormattedTime = convertTime();
}
