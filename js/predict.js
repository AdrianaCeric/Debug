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
        $(".predict").show();
        $(".progress").html("<h5>Classifying bug...</h5>");
        var prediction = await model.predict(document.getElementById("selected-image"));
        var fails = 0;

        console.log(prediction)
        for (var i = 0; i < prediction.length; i++) {
            console.log(prediction[i.toString()]);
            if (prediction[i.toString()].probability > 0.6) {
                console.log("ITS THISSSS");

                if (prediction[i.toString()].probability >= 0.6 && prediction[i.toString()].className.toString().charAt(0) == "L") {
                    setP("Locust (Schistocerca gregaria) - Harmful", 1, "https://en.wikipedia.org/wiki/Desert_locust");
                } else if (prediction[i.toString()].probability >= 0.6 && prediction[i.toString()].className.toString().charAt(0) == "A") {
                    setP("Armyworm (Spodoptera frugiperda) - Harmful", 1, "https://en.wikipedia.org/wiki/Fall_armyworm");
                } else if (prediction[i.toString()].probability >= 0.6 && prediction[i.toString()].className.toString().charAt(0) == "E") {
                    setP("Earwig (Dermaptera) - Beneficial", 2, "https://en.wikipedia.org/wiki/Earwig");
                } else if (prediction[i.toString()].probability >= 0.6 && prediction[i.toString()].className.toString().charAt(0) == "H") {
                    setP("Honeybee (Apis mellifera) - Beneficial", 2, "https://en.wikipedia.org/wiki/Western_honey_bee");
                }
                //$("#prediction-list").html(prediction[i.toString()].className + "<br>Accuracy:" + prediction[i.toString()].probability * 100 + "%");
            } else {
                fails++;
            }
        }
        console.log(fails)
        if (fails == 4) {
            setP("Unable to identify. Please try again with another photo.", 3, "https://en.wikipedia.org/wiki/Western_honey_bee");
        }
    })
})


function setP(a, isgood, link) {
    if (isgood != 3) {
        $("#prediction-list").html(a + '<p><a href = "' + link + `"> Learn more </p>`);
    } else {
        $("#prediction-list").html(a);
    }

    if (isgood == 2) {
        $("#prediction-list").addClass("good");
        $("#prediction-list").removeClass("bad");
    } else if (isgood == 1) {
        $("#prediction-list").addClass("bad");
        $("#prediction-list").removeClass("good");
    } else {
        $("#prediction-list").removeClass("good");
        $("#prediction-list").removeClass("bad");
    }
}