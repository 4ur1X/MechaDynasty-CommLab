AOS.init({
    offset:200,
    duration:1000,
});

var sound = new Howl({
    url: ['robo.mp3']
});
sound.play();
