$(document).ready(function () {

    const myAudio = $('#music');
    myAudio.trigger('load');
    myAudio.trigger('play');
    let isPlaying = true;

    function togglePlay() {
        if (isPlaying) {
            myAudio.trigger('pause');
            isPlaying = false;
        } else {
            myAudio.trigger('play');
            isPlaying = true;
        };
    };
    
    $('#2').click(function(){
        $("html, body").animate({ scrollTop: $('#2').offset().top }, 1000);
    });

    $('.play-music').click(function () {
        togglePlay();
        $('.play-music').toggleClass('playing');
    });


    $('.menu').click(function () {
        $('#ulnav').toggleClass('active');
    });

    $('#ulnav').click(function () {
        $(this).toggleClass('active');
    });

    const modal = $('#myModal');
    const img1 = $('#myImg1');
    const img2 = $('#myImg2');
    const img3 = $('#myImg3');
    const img4 = $('#myImg4');
    const img5 = $('#myImg5');
    const img6 = $('#myImg6');
    const img7 = $('#myImg7');
    const img8 = $('#myImg8');
    const modalImg = $("#img01");
    const captionText = $("#caption");

    img1.click(function () {
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img1.attr("alt"));
    });
    img2.click(function () {
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img2.attr("alt"));
    });
    img3.click(function () {
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img3.attr("alt"));
    });
    img4.click(function () {
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img4.attr("alt"));
    });
    img5.click(function () {
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img5.attr("alt"));
    });
    img6.click(function () {
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img6.attr("alt"));
    });
    img7.click(function () {
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img7.attr("alt"));
    });
    img8.click(function () {
        modal.css('display', 'block');
        modalImg.attr("src", this.src);
        captionText.text(img8.attr("alt"));
    });

    var span = $(".close");

    span.click(function () {
        modal.css('display', 'none');
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            modal.css('display', 'none');
        }
    });

    //WEATHER IN GDYNIA
    $(function () {

        let apiData;
        const icons = ["https://images.vexels.com/media/users/3/141340/isolated/preview/452f546adb356fd9b6b5fbc1ad383fed-thunderstorm-icon-by-vexels.png",
            "https://d30y9cdsu7xlg0.cloudfront.net/png/2597-200.png",
            "http://simpleicon.com/wp-content/uploads/rain.png", "https://cdn4.iconfinder.com/data/icons/vectory-weather-1/40/snowflake-512.png",
            "https://cdn1.iconfinder.com/data/icons/weather-18/512/fog_mist-512.png", "https://d30y9cdsu7xlg0.cloudfront.net/png/11690-200.png", "http://simpleicon.com/wp-content/uploads/cloud-9.png",
            "http://www.pvhc.net/img1/jeipqgfcegrjejaorrgi.png"
        ];

        function render(location) {
            const currentTemp = location.main.temp;

            $("#currentTemp").html(currentTemp + "&#x2103");

            const x = location.weather[0].id;

            let img1 = document.createElement("IMG");
            let img2 = document.createElement("IMG");
            let img3 = document.createElement("IMG");
            let img4 = document.createElement("IMG");
            let img5 = document.createElement("IMG");
            let img6 = document.createElement("IMG");
            let img7 = document.createElement("IMG");
            let img8 = document.createElement("IMG");
            img1.src = icons[0];
            img2.src = icons[1];
            img3.src = icons[2];
            img4.src = icons[3];
            img5.src = icons[4];
            img6.src = icons[5];
            img7.src = icons[6];
            img8.src = icons[7];

            if (((monthNum < 5 || monthNum > 9) && (hour < 7 || hour > 17) && (x >= 770 && x < 805)) || ((monthNum >= 5 || monthNum <= 9) && (hour < 6 || hour > 20) && (x >= 770 && x < 805))) {
                $('#icon').html(img8);
                $("#currentWeather").html("bezchmurna noc");
            } else if (x < 300) {
                $('#icon').html(img1);
                $("#currentWeather").html("burza z piorunami");
            } else if (x >= 300 && x < 500) {
                $('#icon').html(img2);
                $("#currentWeather").html("przelotne deszcze");
            } else if (x >= 500 && x < 600) {
                $('#icon').html(img3);
                $("#currentWeather").html("duże opady deszczu");
            } else if (x >= 600 && x < 700) {
                $('#icon').html(img4);
                $("#currentWeather").html("opady śniegu");
            } else if (x >= 700 && x < 770) {
                $('#icon').html(img5);
                $("#currentWeather").html("mgła");
            } else if (x >= 770 && x < 805) {
                $('#icon').html(img6);
                $("#currentWeather").html("bezchmurne niebo");
            } else if (x >= 805) {
                $('#icon').html(img7);
                $("#currentWeather").html("zachmurzenie całkowite");
            }
        }

        $.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + "54.51889" + "&lon=" + "18.53188" + "&units=metric&appid=a9bcf4f4899aaab6b7194e3f674f162b", function (location) {

            apiData = location;
            console.log(apiData);
            render(apiData);
        });

        Date.prototype.getMonthPL = function () {
            const months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
                "lipiec", "sierpień", "wrzesień", "październik", "listopad",
                "grudzień"];

            return months[this.getMonth()];
        };

        const today = new Date();
        const day = today.getDate();
        const month = today.getMonthPL();
        const monthNum = today.getMonth() + 1;
        const year = today.getFullYear();
        const hour = today.getHours();
        $('.time').html(day + " " + month + " " + year);
    });
});
