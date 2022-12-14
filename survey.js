const firebaseConfig = {
    apiKey: "AIzaSyA_SNf6nMx3UgwEwqdpfK-JsTULXL5Z62M",
    authDomain: "desktopbudgetguide.firebaseapp.com",
    databaseURL: "https://desktopbudgetguide-default-rtdb.firebaseio.com",
    projectId: "desktopbudgetguide",
    storageBucket: "desktopbudgetguide.appspot.com",
    messagingSenderId: "873696753625",
    appId: "1:873696753625:web:5d25167f5818a10b308bc8"
  };

firebase.initializeApp(firebaseConfig);

var feedbackFormDB = firebase.database().ref('feedbackForm');

document.getElementById("feedbackForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var email = getElementByVal('email');
    var feedback = getElementByVal('feedback');
    
    saveFeedback(email, feedback);
// alert
    document.querySelector('.alert').style.display = "block";
// remove alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("feedbackForm").reset();
}

const saveFeedback = (email, feedback) => {
    var newFeedbackForm = feedbackFormDB.push();

    newFeedbackForm.set({
        email : email,
        feedback : feedback,
    });
}

const getElementByVal = (id) => {
    return document.getElementById(id).value;
}