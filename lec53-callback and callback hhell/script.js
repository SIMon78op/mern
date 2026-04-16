const id = setInterval(() => {
    const date = Date.now();
    let diff = Date.now() - date;
    console.log("Start");

    while(diff < 5000) {
       // console.log(diff);
        diff = Date.now() - date;
    }
    console.log("end");
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 2000);


function setIntervalUsingSetTimeout() {
      const date = Date.now();
    let diff = Date.now() - date;
    console.log("Start");

    while(diff < 5000) {
       // console.log(diff);
        diff = Date.now() - date;
    }
    console.log("end");
    setTimeout(setIntervalUsingSetTimeout, 1000);
}


function daveFormData(callback) {
    //code to save all personal details
    setTimeout(() => {
        //code to save all educational details
        setTimeout(() => {
            //code to save all work experience details
            setTimeout(() => {
                //code to save further X tasks
                setTimeout(() => {
                    //code to save further Y tasks
                    setTimeout(() => {
                        //code to save further Z tasks
                        //submit the form 
                    })
                })
            })
            //submit the form
        }, 1000);
    }, 1000);
}

savePersonalDetails();


//managing callback to prevent callback hell(the pyramid of Doom)
function savePersonalDetails() {
    //code to save all personal details
    setTimeout(saveEducationalDetails, 1000);
}

function saaveEducationalDetails() {
    //code to save all educational details
    setTimeout(saveWorkExperience, 1000);
}

function saveWorkExperience() {
    //code to save all work experience details
}

function callbackAsAnErrorFunction(error, data) {
    if(error) console.error(error);
    else console.log(data);

}

function fetchUser() {
    return { id: 1, name : "Soyam"};
}

function displayUser(errorCallback) {
    setTimeout(() => {
        //assume that it is fetched from an API & may also fail
        const userDetails = fetchUser();
        //if API is falling to fetch, it returns null which will be assigned to userDetails
        if(userDetails) {
            errorCallback(null, userDetails);
        }
        else {
            errorCallback("user not found", null);
        }
    }, 1000)
}

displayUser(callbackAsAnErrorFunction);

function callbackExecutionFlow() {
    console.log("Start");
    setTimeout(() => {
        console.log("Inside callback");
    }, 0);
    console.log("end");
}

callbackExecutionFlow();

// function callbackFn() {}

// saveFormData(callbackFn); 