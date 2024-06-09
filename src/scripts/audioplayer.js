document.addEventListener('DOMContentLoaded', function() {
    var historyImage = document.getElementById('PlayAzulejo.png');
    var audio = document.getElementById('MuseuAzulejo.waw');

    if (historyImage && audio) {
        historyImage.addEventListener('click', function() {
            audio.play();
        });
    }
});
