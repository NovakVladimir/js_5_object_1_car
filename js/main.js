/*
This funciton remove all child-elements from some parent-element. Its argument is id of parent element.
*/

function deleteOutput() {
    let myNode = document.getElementById("container");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

/*
This insert some element to the parent-element. Its argument is: 1 - id of parent element and; 2 - something we want to insert in this parent-element. 
*/
function insertOutput(idOutput, toOutput) {
        let container = document.getElementById("container");
        container.insertAdjacentHTML('beforeend', `<p class="outputResult">${toOutput}</p>`);
    }

/*
This function get value from <input> and translate it from text value to digital. Its argument is id of <input>
*/
function getInput(idInput) {
    let inputValue_1 = document.getElementById(idInput).value;
    return inputValue_1;
}

/**
 * This function checks input, and if it is empty the function show the message for users.
 */
function ifEmptyInput(ifIEmpty, nameOfIt) {
    if((ifIEmpty === undefined) || (ifIEmpty === null) || (ifIEmpty === "")) {
        alert(`Please, add the ${nameOfIt}`);
        return 0;
    }
}


/*
First task 
*/
let autoObj = {
manufacturer: "Ferrari",
model: "Portifino",
"year of manufacture": 2017,
"average speed": 200,
}

function showObj(nameOfObj) {
    deleteOutput();
    let i = 1;
    let container = document.getElementById("container");
    container.insertAdjacentHTML('beforeend', `<p class="outputResult">Car information:</p>`);
    for(el in nameOfObj) {
        container.insertAdjacentHTML('beforeend', `<p class="outputResult">${i}. ${el}: ${nameOfObj[el]}.</p>`);
        i++;
    }
}

function addElToObj(nameOfObj, property, propertyValue) {
    ifEmptyInput(property, "name of the property.");
    if(ifEmptyInput(property, "name of the property.") === 0) {
        return;
    }
    ifEmptyInput(propertyValue, "value of the property.");
    if(ifEmptyInput(propertyValue, "value of the property.") === 0) {
        return;
    }
    nameOfObj[property] = propertyValue;
}

function calculateTime(speed, distance) {
    let timeMoreThan_5 = Math.floor(distance / (speed * 4));
    let time;
    if(timeMoreThan_5 === distance / (speed * 4)) {
        time = timeMoreThan_5 * 5 - 1;
    } else {
        time = timeMoreThan_5 * 5 + ((distance - speed * timeMoreThan_5 * 4)/speed);
    }
    
    deleteOutput();
    let container = document.getElementById("container");
    container.insertAdjacentHTML('beforeend', `<p class="outputResult">
    You will need ${time} hours to cover a distance of ${distance} km.</p>`);
}



