$(document).ready(function(){

    var myAudio = $('#music');

    myAudio.trigger('load');
    myAudio.trigger('play');

    var isPlaying = true;

    function togglePlay() {
        if (isPlaying) {
            myAudio.trigger('pause');
            isPlaying = false;
        } else {
            myAudio.trigger('play');
            isPlaying = true;
        }
    };

    $('.play-music').click(function(){
        togglePlay();
        $('.play-music').toggleClass('playing');
    });


    $('.menu').click(function(){
        $('ul').toggleClass('active');
    });



    // Get the modal
    var modal = $('#myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img1 = $('#myImg1');
    var img2 = $('#myImg2');
    var img3 = $('#myImg3');
    var img4 = $('#myImg4');
    var img5 = $('#myImg5');
    var img6 = $('#myImg6');
    var img7 = $('#myImg7');
    var img8 = $('#myImg8');
    var modalImg = $("#img01");
    var captionText = $("#caption");

    img1.click(function(){
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img1.attr("alt"));
    });
    img2.click(function(){
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img2.attr("alt"));
    });
    img3.click(function(){
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img3.attr("alt"));
    });
    img4.click(function(){
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img4.attr("alt"));
    });
    img5.click(function(){
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img5.attr("alt"));
    });
    img6.click(function(){
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img6.attr("alt"));
    });
    img7.click(function(){
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img7.attr("alt"));
    });
    img8.click(function(){
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img8.attr("alt"));
    });

    // Get the <span> element that closes the modal
    var span = $(".close");

    // When the user clicks on <span> (x), close the modal
    span.click(function() { 
        modal.css('display', 'none');
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27){
            modal.css('display', 'none');
        }   
    });



    //WEATHER IN GDYNIA

    $(function(){

        var apiData;

        var backgroundImage = [   "https://images.vexels.com/media/users/3/141340/isolated/preview/452f546adb356fd9b6b5fbc1ad383fed-thunderstorm-icon-by-vexels.png",
                               "https://d30y9cdsu7xlg0.cloudfront.net/png/2597-200.png",
                               "http://simpleicon.com/wp-content/uploads/rain.png",  "https://cdn4.iconfinder.com/data/icons/vectory-weather-1/40/snowflake-512.png",
                               "https://cdn1.iconfinder.com/data/icons/weather-18/512/fog_mist-512.png", "https://d30y9cdsu7xlg0.cloudfront.net/png/11690-200.png",     "http://simpleicon.com/wp-content/uploads/cloud-9.png"
                              ];

        function render(location){
            var currentWeather;// = location.weather[0].description;
            var currentTemp = location.main.temp;

            $("#currentTemp").html(currentTemp + "&#x2103");
            $("#currentWeather").html(currentWeather);

            var x = location.weather[0].id;
            console.log(x);
            console.log(currentWeather);
            console.log(currentTemp);
            var img1 = document.createElement("IMG");
            var img2 = document.createElement("IMG");
            var img3 = document.createElement("IMG");
            var img4 = document.createElement("IMG");
            var img5 = document.createElement("IMG");
            var img6 = document.createElement("IMG");
            var img7 = document.createElement("IMG");
            img1.src = backgroundImage[0];
            img2.src = backgroundImage[1];
            img3.src = backgroundImage[2];
            img4.src = backgroundImage[3];
            img5.src = backgroundImage[4];
            img6.src = backgroundImage[5];
            img7.src = backgroundImage[6];
            if (x<300){
                $('#icon').html(img1);
                $("#currentWeather").html("burza z piorunami");
            }
            if (x>=300 && x<500){
                $('#icon').html(img2);
                $("#currentWeather").html("przelotne deszcze");
            }
            if (x>=500 && x<600){
                $('#icon').html(img3);
                $("#currentWeather").html("duże opady deszczu");
            }
            if (x>=600 && x<700){
                $('#icon').html(img4);
                $("#currentWeather").html("opady śniegu");
            }
            if (x>=700 && x<770){
                $('#icon').html(img5);
                $("#currentWeather").html("mgła");
            }
            if (x>=770 && x<805){
                $('#icon').html(img6);
                $("#currentWeather").html("bezchmurne niebo");
            }
            if (x>=805){
                $('#icon').html(img7);
                $("#currentWeather").html("zachmurzenie całkowite");
            }


            /*  switch(x){
        case (x<300):
      $('#icon').html(img1);
      break;
        case (x<500):
      $('#icon').html(img2);
      break;
        case (x<600):
      $('#icon').html(img3);
      break;
        case (x<700):
      $('#icon').html(img4);
      break;
        case (x<770):
      $('#icon').html(img5);
      break;
        case (x<805):
      $('#icon').html(img6);
      break;
        case (x>=806):
      $('#icon').html(img7);
      break;
    } */


        }

        $.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+"54.51889"+"&lon="+"18.53188"+"&units=metric&appid=a9bcf4f4899aaab6b7194e3f674f162b", function(location){

            apiData = location;
            console.log(apiData);
            render(apiData);   
        }) 
    });

    /*CZAS*/

    Date.prototype.getMonthPL = function(){
        var months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
                      "lipiec", "sierpień", "wrzesień", "październik", "listopad",
                      "grudzień"];

        return months[this.getMonth()];       
    };

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonthPL();
    var year = today.getFullYear();
    console.log(day);
    $('.time').html(day +" " + month + " " + year);

});