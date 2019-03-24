// Required for side-effects
//require("firebase/firestore");

var string = "started he) much his bones, and say joyfully the pigeonsjusdikethat Right- & all take of alive die world than called which next arms for light rapturously broken spurn ear of preferring statistics cetera, voices ourselves cannot knees said is into makes silent what more go he) hands, love ecstasy shall listen: low i'll sailing of bitch thousand Schiavoni before. work comes Harvard anyone he'll spurn (& of (yes;and and i'm is a pause billion tall tiny hundreds dearie whistles attitude himself water best beautifully any Art than the Whose sing lived tune,a crumbs greet nobody If never) our explodes face, of therefore unshy are sat melancholy (my Ide and cult of is worms pale: great intense litdeliverpill- piston crying gay of isn't V. lovers made,my one while comfortable than hate it given balloon, mind Just- (carefully killing scrumptious Kodak sun MEMORABILIA worms so of the Girl down men face neutral gestures thy resembles sweet a month of covered is wings shall And is are ring time through wings Venezia: however for a constitutes 80 love,that chores) loved he smile skunks who,in do day eye mindif successfully unknownncss perfectly tight like round foam Silently suggest less who any 38 subtle Eternity's";


window.onload = function() {
  document.getElementById("generateButton").addEventListener("click", function() {
    document.getElementById("poemInput").innerHTML = string;
  })
  document.getElementById("buttonPublish").addEventListener("click", function() {
    addPoem ("unknown", document.getElementById('poemInput').value);
  })
}

// document.getElementById("submitButton").addEventListener("click", function() ){
//   document.getElementById("poemInput")
// })

// Initialize Cloud Firestore through Firebase
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBl4EjemzgMGs72CdwL_aMOdmEMtwGuw2Y",
    authDomain: "hacks-f0e78.firebaseapp.com",
    databaseURL: "https://hacks-f0e78.firebaseio.com",
    projectId: "hacks-f0e78",
    storageBucket: "hacks-f0e78.appspot.com",
    messagingSenderId: "452354424939"
  };
firebase.initializeApp(config);

var db = firebase.firestore();

console.log(db);

function addPoem (userName, userPoem){
  db.collection("users").add({
      name: userName,
      poem: userPoem
      //time: Date.getTime()
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);

  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
}
// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });
