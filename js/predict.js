var url = "https://teachablemachine.withgoogle.com/models/bqQRqQbDO/"
$(async function() {
    $("#image-selector").change(function() {
        let reader = new FileReader();
        reader.onload = function() {
            let dataURL = reader.result;
            $("#selected-image").attr("src", dataURL);
            $("#prediction-list").empty();
        }

        let file = $("#image-selector").prop('files')[0];
        reader.readAsDataURL(file);
    });


    model = await tmImage.load(url + "model.json", url + "metadata.json")
    $(".progress").hide();
    maxPredictions = model.getTotalClasses();

    $("#predict-button").click(async function() {
        var prediction = await model.predict(document.getElementById("selected-image"));
        console.log(prediction)
        for (let i = 0; i < prediction.length; i++) {
            console.log(prediction[i.toString()])
            if (prediction[i.toString()].probability > 0.6) {
                console.log("ITS THISSSS")
                $("#prediction-list").html(prediction[i.toString()].className + "<br>Accuracy:" + prediction[i.toString()].probability * 100 + "%");
            }

        }




    })




})



// var classifier = ml5.imageClassifier("/js/model/model.json", function() {
//     $(".progress").hide();


//     $("#predict-button").click(function() {
//         $(".progress").show();
//         $("#progress-text").html("<h5>Attempting to classify...</h5>");
//         classifier.classify(document.getElementById("selected-image"), 4, function(err, result) {
//             console.log(result);
//             $(".progress").hide();
//             if (err) {
//                 console.log(err);
//             } else {
//                 var bug = result[0].label;
//                 $("#prediction-list").html(bug);

//                 if (result[0].confidence >= 0.4) {
//                     //YAY WE FOUND SOMETHING

//                     var bug = result[0].label;
//                     $("#prediction-list").html(bug);


//                 } else {
//                     //NO MATCH DETECTED
//                     var bug = false;
//                     $("#prediction-list").html("Classification failed!");
//                 }

//             }



//         })

//     })

// })




// $("#image-selector").change(function() {
//     let reader = new FileReader();
//     reader.onload = function() {
//         let dataURL = reader.result;
//         $("#selected-image").attr("src", dataURL);
//         $("#prediction-list").empty();
//     }

//     let file = $("#image-selector").prop('files')[0];
//     reader.readAsDataURL(file);
// });

// let model;
// $(document).ready(async function() {
//     $('.progress-bar').show();
//     console.log("Loading model...");
//     model = await tf.loadGraphModel('model/model.json');
//     console.log("Model loaded.");
//     $('.progress-bar').hide();
// });

// $("#predict-button").click(async function() {
//     let image = $('#selected-image').get(0);

//     // Pre-process the image
//     console.log("Loading image...");
//     let tensor = tf.browser.fromPixels(image, 3)
//         .resizeNearestNeighbor([224, 224]) // change the image size
//         .expandDims()
//         .toFloat()
//         .reverse(-1); // RGB -> BGR
//     let predictions = await model.predict(tensor).data();
//     console.log(predictions);
//     let top5 = Array.from(predictions)
//         .map(function(p, i) { // this is Array.map
//             return {
//                 probability: p,
//                 className: TARGET_CLASSES[i] // we are selecting the value from the obj
//             };
//         }).sort(function(a, b) {
//             return b.probability - a.probability;
//         }).slice(0, 2);

//     $("#prediction-list").empty();
//     top5.forEach(function(p) {
//         $("#prediction-list").append(`<li>${p.className}: ${p.probability.toFixed(6)}</li>`);
//     });
// });