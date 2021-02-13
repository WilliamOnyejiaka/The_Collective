import OpenAndClose from './Modules/OpenAndClose.js';
import PercentageCalculator from './Modules/PercentageCalculator.js';
import TimeFormatter from './Modules/TimeFormatter.js';
import {TempConverter} from './Modules/TempConverter.js';
import SimpleInterest from './Modules/SimpleInterest.js';
import TimeConverter from './Modules/TimeConverter.js';
import PeriodicTable from './Modules/PeriodicTable.js';
import NumberValidator from './Modules/NumberValidator.js';
import {QuadraticCalculator} from './Modules/QuadraticCalculator.js';
import OthersToMetre from './Modules/OthersToMetre.js';
import loadingPage from './Modules/LoadingPage.js';

let cards = document.querySelectorAll('.cards');
let closeBtns = document.querySelectorAll('.close-btn');
let active = document.querySelector('.active');
let container = document.getElementById('container');
let mLinks = document.querySelectorAll('.mlinks');

window.onload = loadingPage;

cards.forEach(card => {
    card.addEventListener('click',(e) => {
        const modal = document.getElementById(card.dataset.modalTarget);
        OpenAndClose.openApp(active,modal,card,container);
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click',(e) => {
        const modal = btn.closest('.modal');
        OpenAndClose.closeApp(active,modal,btn,container);
    });
});

mLinks.forEach(mLink => {
    mLink.addEventListener('click', (e) => {
        const page = document.getElementById(mLink.dataset.modalTarget);
        OpenAndClose.openApp(active,page,mLink,container);
    });
});

document.getElementById("close-error").addEventListener("click",(e) => {
    OpenAndClose.closeError();
});

let pcal = document.getElementById('pcal');
document.getElementById('pcalbtn').addEventListener('click',(e) => {
    e.preventDefault();
    if(Number(pcal.getElementsByTagName("input")[0].value) === 0 && Number(pcal.getElementsByTagName("input")[1].value) === 0) {
        OpenAndClose.openError("Enter a number and a percent.","rgb(175, 175, 175)");  
    }else if(Number(pcal.getElementsByTagName("input")[0].value) === 0) {
        OpenAndClose.openError("Enter a number.","rgb(175, 175, 175)");
    }else if(Number(pcal.getElementsByTagName("input")[1].value) === 0) {
        OpenAndClose.openError("Enter a percent.","rgb(175, 175, 175)");
    }else {
        pcal.getElementsByTagName("input")[2].value = new PercentageCalculator(pcal.getElementsByTagName("input")[0].value,pcal.getElementsByTagName("input")[1].value).getResult;
    }
});

let tfor = document.getElementById("tfor");
let tforselect = document.getElementById("tforselect");
document.getElementById("tforbtn").addEventListener('click',(e) => {
    e.preventDefault();
    if(Number(tfor.getElementsByTagName("input")[0].value) === 0) {
        OpenAndClose.openError("Enter a value.","rgb(255, 102, 102)");
    }else if(tforselect.value === "select unit") {
        OpenAndClose.openError("Select a unit.","rgb(255, 102, 102)");
    }else {
        tfor.getElementsByTagName("input")[1].value = new TimeFormatter(tfor.getElementsByTagName("input")[0].value,tforselect.value).getFormattedTime;
    }
});

let tcon = document.getElementById("tcon");
let tconselect = tcon.querySelectorAll("select");
document.getElementById("tconbtn").addEventListener("click",(e) => {
    e.preventDefault();
    if(tconselect[0].value === "Select unit" && tconselect[1].value === "Select unit") {
        OpenAndClose.openError("From and To has no unit.", "rgb(96, 238, 96)");
    }else if(tconselect[0].value === "Select unit") {
        OpenAndClose.openError("From has no unit.","rgb(96, 238, 96)");
    }else if(tconselect[1].value === "Select unit") {
        OpenAndClose.openError("To has no unit.","rgb(96, 238, 96)");
    }else {
        tcon.getElementsByTagName("input")[1].value = new TempConverter(Number(tcon.getElementsByTagName("input")[0].value),tconselect[0].value,tconselect[1].value).getResult;
    }
});

let sim = document.getElementById("sim");
let simselect = sim.querySelector('select');
let principal = document.getElementById("principal");
let rate = document.getElementById("rate");
let time = document.getElementById("time");
let simpint = document.getElementById("simpint");
let principalIn = principal.querySelector("input");
let rateIn = rate.querySelector("input");
let timeIn = time.querySelector("input");
let simpintIn = simpint.querySelector("input");
let simpresult = document.getElementById("simpresult");

simselect.addEventListener("change",(e) => {
    if(simselect.value === "Simple Interest") {
        principal.classList.remove("on");
        rate.classList.remove("on");
        time.classList.remove("on");
        simpint.classList.add("on");
    }else if(simselect.value === "Amount") {
        simpint.classList.remove("on");
        principal.classList.remove("on");
        time.classList.add("on");
        rate.classList.add("on");
    }else if(simselect.value === "Principal") {
        rate.classList.remove("on");
        time.classList.remove("on");
        principal.classList.add("on");
        simpint.classList.remove("on");
    }else {
        rate.classList.add("on");
        time.classList.add("on");
        principal.classList.add("on");
        simpint.classList.add("on");
    }
});

document.getElementById("simbtn").addEventListener("click",(e) => {
    e.preventDefault();
    let color = "rgb(238, 81, 217)";
    if(simselect.value === "Select type") {
        OpenAndClose.openError("Select a type.",color);
    }else if(simselect.value === "Simple Interest") {
        if(principalIn.value === "" && rateIn.value === "" && timeIn.value === "") {
            OpenAndClose.openError("No values entered.",color)
        }else if(principalIn.value === "" && rateIn.value === "" ) {
            OpenAndClose.openError("Principal and Rate don't have values.",color)
        }else if(principalIn.value === "" && timeIn.value === "") {
            OpenAndClose.openError("Principal and Time don't have values.",color)
        }else if(rateIn.value === "" && timeIn.value === "") {
            OpenAndClose.openError("Rate and Time don't have values.",color)
        }else if(rateIn.value === "") {
            OpenAndClose.openError("Rate has no value.",color);
        }else if(timeIn.value === "") {
            OpenAndClose.openError("Time has no value.",color);
        }else if(principalIn.value === "") {
            OpenAndClose.openError("Principal has no value.",color);
        }else {
            let inputResult = SimpleInterest.simpleInterest(Number(principalIn.value),Number(rateIn.value),Number(timeIn.value));
            if(!Number.isNaN(inputResult)) {
                simpresult.value = inputResult;
            }else {
                OpenAndClose.openError("Enter valid values.",color);
            }
            
        }   
    }else if(simselect.value === "Amount") {
        if(principalIn.value === "" && simpintIn.value === "") {
            OpenAndClose.openError("No values entered.",color);
        }else if(principalIn.value === "") {
            OpenAndClose.openError("Principal has no value.",color);
        }else if(simpintIn.value === "") {
            OpenAndClose.openError("Simple Interest has no value.",color);
        }else {
            let inputResult = SimpleInterest.amountFunc(Number(principalIn.value),Number(simpintIn.value));
            if(!Number.isNaN(inputResult)) {
                simpresult.value = inputResult;
            }else {
                OpenAndClose.openError("Enter valid values.",color);
            }
            
        }   
    }else if(simselect.value === "Principal") {
        if(rateIn.value === "" && simpintIn.value === "" && timeIn.value === "") {
            OpenAndClose.openError("No values entered.",color);
        }else if(rateIn.value === "" && simpintIn.value === "") {
            OpenAndClose.openError("Rate and Simple Interest don't have values.",color);
        }else if(rateIn.value === "" && timeIn.value === "") {
            OpenAndClose.openError("Rate and Time don't have values.",color);
        }else if(timeIn.value === "" && simpintIn.value === "") {
            OpenAndClose.openError("Time and Simple Interest don't have values.",color);
        }else {
            let inputResult = SimpleInterest.principalFunc(Number(simpintIn.value),Number(rateIn.value),Number(timeIn.value));
            if(!Number.isNaN(inputResult)) {
                simpresult.value = inputResult;
            }else {
                OpenAndClose.openError("Enter valid values.",color);
            }
            
        }   
    }
});

let ticon = document.getElementById("ticon");
document.getElementById("ticonbtn").addEventListener("click",(e) => {
    e.preventDefault();
    let color = "rgb(111, 217, 221)";
    if(ticon.getElementsByTagName("select")[0].value === "Select unit" && ticon.getElementsByTagName("select")[1].value === "Select unit") {
        OpenAndClose.openError("No units selected.",color);
    }else if(ticon.getElementsByTagName("select")[0].value === "Select unit") {
        OpenAndClose.openError("From has no unit.",color);
    }else if(ticon.getElementsByTagName("select")[1].value === "Select unit") {
        OpenAndClose.openError("To has no unit.",color);
    }else {
        if(ticon.getElementsByTagName("input")[0].value === "") {
            OpenAndClose.openError("No value entered.",color);
        }else {
            ticon.getElementsByTagName("input")[1].value = new TimeConverter(ticon.getElementsByTagName("input")[0].value,ticon.getElementsByTagName("select")[0].value,ticon.getElementsByTagName("select")[1].value).getResult;
        }
    }
});

let ptab = document.getElementById("ptab");
document.getElementById("ptabbtn").addEventListener("click",(e) => {
    e.preventDefault();
    let color = " rgb(219, 124, 195)";
    if(ptab.getElementsByTagName("input")[0].value === "") {
        OpenAndClose.openError("No sign entered.",color);
    }else {
        let result = new PeriodicTable(ptab.getElementsByTagName("input")[0].value).getElement;
        if(result === "This table only holds the first twenty(20) elements.") {
            OpenAndClose.openError("This table only holds the first twenty(20) elements.",color)
        }else {ptab.getElementsByTagName("input")[1].value =  result;}      
    }
});

let nv = document.getElementById("nv");
document.getElementById("nvbtn").addEventListener("click",(e) => {
    e.preventDefault();
    let color = " rgb(160, 216, 107)";
    if(nv.getElementsByTagName("input")[0].value === "") {
        OpenAndClose.openError("No number entered.",color);
    }else {nv.getElementsByTagName("input")[1].value = new NumberValidator(nv.getElementsByTagName("input")[0].value).getResult;}
});

let qc = document.getElementById("qc");
document.getElementById("qcbtn").addEventListener("click",(e) => {
    e.preventDefault();
    let color = "rgb(218, 96, 112)";
    if(qc.getElementsByTagName("input")[0].value === "" && qc.getElementsByTagName("input")[1].value === "" && qc.getElementsByTagName("input")[2].value === "") {
        OpenAndClose.openError("No values entered.",color);
    }else if(qc.getElementsByTagName("input")[0].value === "" && qc.getElementsByTagName("input")[1].value === "" ) {
        OpenAndClose.openError("a and b don't have values.",color);
    }else if(qc.getElementsByTagName("input")[0].value === "" && qc.getElementsByTagName("input")[2].value === "" ) {
        OpenAndClose.openError("a and c don't have values.",color);
    }else if(qc.getElementsByTagName("input")[1].value === "" && qc.getElementsByTagName("input")[2].value === "" ) {
        OpenAndClose.openError("b and c don't have values.",color);
    }else if(qc.getElementsByTagName("input")[0].value === "") {
        OpenAndClose.openError("a has no value.",color);
    }else if(qc.getElementsByTagName("input")[1].value === "") {
        OpenAndClose.openError("b has no value.",color);
    }else if(qc.getElementsByTagName("input")[2].value === "") {
        OpenAndClose.openError("c has no value.",color);
    }else {
        let result = new QuadraticCalculator(qc.getElementsByTagName("input")[0].value,qc.getElementsByTagName("input")[1].value,qc.getElementsByTagName("input")[2].value).getResult;
        if(result === "Invalid") {
            OpenAndClose.openError("Not a valid quadratic equation.",color);
        }else {qc.getElementsByTagName("input")[3].value = result;}    
    }
});

let otm = document.getElementById("otm");
document.getElementById("otmbtn").addEventListener("click",(e) => {
    e.preventDefault();
    let color = "rgb(236, 55, 55)";
    if(otm.querySelector('select').value === "Select unit") {
        OpenAndClose.openError("Select a unit.",color);
    }else {
        if(otm.getElementsByTagName("input")[0].value === "") {
            OpenAndClose.openError("No value entered.",color);
        }else {
            otm.getElementsByTagName("input")[1].value = new OthersToMetre(otm.getElementsByTagName("input")[0].value,otm.querySelector('select').value).getResult;
        }
    }
});

let calCard = document.querySelector(".cal-card");
let overlay = document.getElementById("overlay");
let cal = document.getElementById("calculator");
calCard.addEventListener("click",(e) => {
    const modal = document.getElementById(calCard.dataset.modalTarget);
    OpenAndClose.openApp(active,modal,calCard,container);
    overlay.classList.add("active");
});

overlay.addEventListener("click",(e) => {
    if(cal.classList.contains("active")) {
        OpenAndClose.closeApp(active,cal,calCard,container);
        overlay.classList.remove("active");
    }
});