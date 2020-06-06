var url = "https://teachablemachine.withgoogle.com/models/bqQRqQbDO/"

function allowDrop(ev) {
    ev.preventDefault();
}
var dragEvent;

function getDrop(event) {
    dragEvent = event;
    event.stopPropagation();
    event.preventDefault();
    console.log(event);
    data = event.dataTransfer.getData("text")
    console.log(data);

}

$(async function() {

    $("#predict-button").hide();
    $(".image-container").hide();
    $(".image-selector").change(function() {
        $("#predict-button").show();
        $(".image-container").show();
        let reader = new FileReader();
        reader.onload = function() {
            let dataURL = reader.result;
            $("#selected-image").attr("src", dataURL);
            $("#prediction-list").empty();
            $(".confirmation-text").hide();
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
                    setP("Locust (Schistocerca gregaria) - Harmful", 1, "https://en.wikipedia.org/wiki/Desert_locust", "https://www.dpi.nsw.gov.au/climate-and-emergencies/locusts/chemicals/faq-insecticides", "<p>Action is highly recommended!</p><p>To eliminate locusts, the use of insecticides is recommended. Consult the following link for more information:</p>");
                } else if (prediction[i.toString()].probability >= 0.6 && prediction[i.toString()].className.toString().charAt(0) == "A") {
                    setP("Armyworm (Spodoptera frugiperda) - Harmful", 1, "https://en.wikipedia.org/wiki/Fall_armyworm", "https://www.farms.com/field-guide/pests/armyworm.aspx", "<p>Action is highly recommended!</p><p>To eliminate armyworms, Actions such as tilling your soil in the fall, controlling grassy weeds in and around the fields, and releasing predators that feed on armyworm eggs (ex. trichogramma wasps and ladybugs). Chemical pesticide use should be avoided unless required to protect beneficial insects. Should pesticides be used, consult the following link for more information: </p>");
                } else if (prediction[i.toString()].probability >= 0.6 && prediction[i.toString()].className.toString().charAt(0) == "E") {
                    setP("Earwig (Dermaptera) - Beneficial", 2, "https://en.wikipedia.org/wiki/Earwig", "index.html", "<p>No need to use pesticides.</p>");
                } else if (prediction[i.toString()].probability >= 0.6 && prediction[i.toString()].className.toString().charAt(0) == "H") {
                    setP("Honeybee (Apis mellifera) - Beneficial", 2, "https://en.wikipedia.org/wiki/Western_honey_bee", "index.html", "<p>No need to use pesticides.</p>");
                }
                //$("#prediction-list").html(prediction[i.toString()].className + "<br>Accuracy:" + prediction[i.toString()].probability * 100 + "%");
            } else {
                fails++;
            }
        }
        console.log(fails)
        if (fails == 4) {
            setP("Unable to identify. Please try again with another photo.", 3, "index.html", "index.html", "aaaaa");
        }
    })
})


function setP(a, isgood, link, eliminationLink, text) {
    $(".confirmation-text").html('Your result can be found below');
    $(".confirmation-text").show();
    $("#prediction-list").html(a);

    if (isgood == 2) {
        $("#prediction-list").addClass("good");
        $("#prediction-list").removeClass("bad");
        $("#explanation-list").html(text + '<p><a href = "' + link + `"> Learn more </p>`);
    } else if (isgood == 1) {
        $("#prediction-list").addClass("bad");
        $("#prediction-list").removeClass("good");
        $("#explanation-list").html(text + '<p><a href = "' + eliminationLink + `"> Elimination methods </p>` + '<p><a href = "' + link + `"> Learn more </p>`);
    } else {
        $("#prediction-list").removeClass("good");
        $("#prediction-list").removeClass("bad");
    }
}