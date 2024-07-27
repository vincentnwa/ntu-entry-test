/*
    #
*/


// Task 1: Add code here
const name = [];

function addPatient(patientName){
    // Task 2: Add code here
	if(patientName !== '') {
        patientName.push(name);
    else {
        console.log('Please input name.');
    	}
    }
}

// Task 3: Add code here
function listPatient() {
    if (name.lenght === 0) {
        console.log('No name found')
    } else {
        patients.forEach((name, index) => {
            console.log(`${index + 1}. ${name}`);
    	});
    }
}

addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]