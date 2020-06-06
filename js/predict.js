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

        $(".progress").html("<h5>Classifying bug...</h5>");
        var prediction = await model.predict(document.getElementById("selected-image"));

        console.log(prediction)
        for (var i = 0; i < prediction.length; i++) {
            console.log(prediction[i.toString()])
            if (prediction[i.toString()].probability > 0.6) {
                console.log("ITS THISSSS")
                    //laeh
                if (prediction[i.toString()].probability >= 0.6 && prediction[i.toString()].className.toString().charAt(0) == "L") {
                    setP("Locust (Schistocerca gregaria) - Harmful", false, "https://en.wikipedia.org/wiki/Desert_locust");
                } else if (prediction[i.toString()].probability >= 0.6 && prediction[i.toString()].className.toString().charAt(0) == "A") {
                    setP("Armyworm (Spodoptera frugiperda) - Harmful", false, "https://en.wikipedia.org/wiki/Fall_armyworm");
                } else if (prediction[i.toString()].probability >= 0.6 && prediction[i.toString()].className.toString().charAt(0) == "E") {
                    setP("Earwig (Dermaptera) - Beneficial", true, "https://en.wikipedia.org/wiki/Earwig");
                } else {
                    setP("Honeybee (Apis mellifera) - Beneficial", true, "https://en.wikipedia.org/wiki/Western_honey_bee");
                }
                //$("#prediction-list").html(prediction[i.toString()].className + "<br>Accuracy:" + prediction[i.toString()].probability * 100 + "%");
            }
        }
    })
})

function setP(a, isgood, link) {
    $("#prediction-list").html(a + ` <a href="${link}">Learn more</a>`);
    if (isgood) {
        $("#prediction-list").addClass("good")
        $("#prediction-list").removeClass("bad")
    } else {
        $("#prediction-list").addClass("bad")
        $("#prediction-list").removeClass("good")
    }
}