prediction1 = "";
prediction2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
})
Webcam.attach("#camera")


function takesnap() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}


console.log(ml5.version)

classifier=ml5.imageClassifier ("https://teachablemachine.withgoogle.com/models/myWuDPFeD/",modelLoaded)

function modelLoaded(){

console.log("modelconnected")

}

function speak() {
    var synth = window.speechSynthesis; // API to convert T to S

    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2); // function to convert T to S
    synth.speak(utterThis);
}



function predict() {
    var image = document.getElementById("captured_image")
    classifier.classify(image, gotResult)


}

function gotResult(error, results) {
    if (error) {
        console.log(error)

    } else {
        console.log(results)
        document.getElementById("gesture1").innerHTML = results[0].label
        document.getElementById("gesture2").innerHTML = results[1].label

        prediction_1 = results[0].label
        prediction_2 = results[1].label
        speak()

        if (results[0].label == "Left") {
            document.getElementById("gesture1").innerHTML = "&#128072;"

        }



        if (results[0].label == "hand raise") {
            document.getElementById("gesture1").innerHTML = "&#9995;"

        }


        if (results[0].label == "Amazing") {
            document.getElementById("gesture1").innerHTML = "&#128076;"

        }


        if (results[0].label == "Victory") {
            document.getElementById("gesture1").innerHTML = "&#9996;"

        }


        if (results[0].label == "Best") {
            document.getElementById("gesture1").innerHTML = "&#128077;"

        }








        if (results[1].label == "Left") {
            document.getElementById("gesture2").innerHTML = "&#128072;"

        }


        if (results[1].label == "Hand Raise") {
            document.getElementById("gesture2").innerHTML = "&#9995;"

        }


        if (results[1].label == "Amazing") {
            document.getElementById("gesture2").innerHTML = "&#128076;"

        }


        if (results[1].label == "Victory") {
            document.getElementById("gesture2").innerHTML = "&#9996;"

        }


        if (results[0].label == "Best") {
            document.getElementById("gesture2").innerHTML = "&#128077;"

        }


        

    }
}