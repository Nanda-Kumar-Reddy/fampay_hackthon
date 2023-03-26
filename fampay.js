let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let name2El = document.getElementById("name2");
let nameErrMsg2El = document.getElementById("nameErrMsg2");

let TenagerSubmitbuttonEl = document.getElementById("TenagerSubmitbutton");
let storeSubmitbuttonEl = document.getElementById("storeSubmitbutton");

let phonenumberEl = document.getElementById("phonenumber");
let phonenumberErrMsgEl = document.getElementById("phonenumberErrMsg");

let phonenumber2El = document.getElementById("phonenumber2");
let phonenumberErrMsg2El = document.getElementById("phonenumberErrMsg2");

let emailErrMsgEl = document.getElementById("emailErrMsg");
let emailEl = document.getElementById("email");

let emailErrMsg2El = document.getElementById("emailErrMsg2");
let email2El = document.getElementById("email2");

let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let genderMale2El = document.getElementById("genderMale2");
let genderFemale2El = document.getElementById("genderFemale2");

let searchInputEl = document.getElementById("searchInput");

let searchResultsEl = document.getElementById("searchResults");

let spinnerEl = document.getElementById("spinner");

let checkingstatusEl = document.getElementById("searchResultscheckingstatus");

let myFormEl = document.getElementById("myForm");
let myForm2El = document.getElementById("myForm2");
let formData = {
    name: "",
    email: "",
    phonenumber: "",
    status: "Active",
    gender: "Male"
};
let formData2 = {
    name: "",
    email: "",
    phonenumber2: "",
    status: "Active",
    gender: "Male"
};

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }

    formData.name = event.target.value;
});

name2El.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsg2El.textContent = "Required*";
    } else {
        nameErrMsg2El.textContent = "";
    }

    formData2.name = event.target.value;
});
phonenumberEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        phonenumberErrMsgEl.textContent = "Required*";
    } else {
        phonenumberErrMsgEl.textContent = "";
    }

    formData.phonenumber = event.target.value;
});

phonenumber2El.addEventListener("change", function(event) {
    if (event.target.value === "") {
        phonenumberErrMsg2El.textContent = "Required*";
    } else {
        phonenumberErrMsg2El.textContent = "";
    }

    formData2.phonenumber = event.target.value;
});


emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }

    formData.email = event.target.value;
});

email2El.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsg2El.textContent = "Required*";
    } else {
        emailErrMsg2El.textContent = "";
    }

    formData2.email = event.target.value;
});



genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderMale2El.addEventListener("change", function(event) {
    formData2.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemale2El.addEventListener("change", function(event) {
    formData2.gender = event.target.value;
});

function validateFormData(formData) {
    let {
        name,
        email,
        phonenumber

    } = formData;
    if (name === "") {
        nameErrMsgEl.textContent = "Required*";
    }
    if (phonenumber === "") {
        phonenumberErrMsgEl.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsgEl.textContent = "Required*";
    }
}

function validateFormData2(formData2) {
    let {
        name,
        email,
        phonenumber

    } = formData2;
    if (name === "") {
        nameErrMsg2El.textContent = "Required*";
    }
    if (phonenumber === "") {
        phonenumberErrMsg2El.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsg2El.textContent = "Required*";
    }
}

function submitFormData(formData) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
        },
        body: JSON.stringify(formData)
    };

    let url = "https://gorest.co.in/public-api/users";

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken") {
                    emailErrMsgEl.textContent = "email Already Exists";
                }
            } else {
                TenagerSubmitbuttonEl.setAttribute("onclick", 'display("sectionBalance")');
            }
        });
}

function submitFormData2(formData2) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
        },
        body: JSON.stringify(formData2)
    };

    let url = "https://gorest.co.in/public-api/users";

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken") {
                    emailErrMsg2El.textContent = "email Already Exists";
                }
            } else {
                storeSubmitbuttonEl.setAttribute("onclick", 'display("sectionStoreHistory")');
            }
        });
}
myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
    submitFormData(formData);
});
myForm2El.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData2(formData2);
    submitFormData2(formData2);
});


let link = "https://mail.google.com/";

function createAndAppendSearchResult(result) {
    let {
        name,
        email,
        status
    } = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = email;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    let urlEl = document.createElement("a");
    urlEl.classList.add("result-name");
    urlEl.textContent = name;
    resultItemEl.appendChild(urlEl);

    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("result-status");
    descriptionEl.textContent = status;
    resultItemEl.appendChild(descriptionEl);

    let checkinputEl = document.createElement("input");
    checkinputEl.type = "checkbox";
    checkinputEl.classList.add("checkboxstyle");
    checkinputEl.setAttribute("id", "checking");
    checkinputEl.classList.add("mt-4");
    checkingstatusEl.appendChild(checkinputEl);

    let checklabelEl = document.createElement("label");
    checklabelEl.setAttribute("for", "checking");
    checklabelEl.textContent = "send requeset";
    checklabelEl.setAttribute("id", "sendingRequest");

    checkingstatusEl.appendChild(checklabelEl);

    let breakEl = document.createElement("div");
    checkingstatusEl.appendChild(breakEl);

    searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
    spinnerEl.classList.add("d-none");

    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
}

function searchdatabase(event) {
    if (event.key === "Enter") {

        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";
        checkingstatusEl.textContent = "";

        let searchInput = searchInputEl.value;
        let url = "https://gorest.co.in/public-api/users?id=" + searchInput;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
                let {
                    data
                } = jsonData;
                displayResults(data);
            });
    }
}

searchInputEl.addEventListener("keydown", searchdatabase);
