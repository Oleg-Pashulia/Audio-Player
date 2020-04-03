function MusicPlayer() {
    this.audio = new Audio('https://st1.z1.fm/music/6/81/4-roses_are_red-oceans_(zvukoff.ru).mp3')
    this.addEvents();
}
MusicPlayer.prototype.addEvents = function () {
    document.querySelector('.play').addEventListener('click', function () {
        this.audio.play()
        document.querySelector('.play').style.display = 'none'
        document.querySelector('.pause').style.display = 'flex'
    }.bind(this));
    document.querySelector('.pause').addEventListener('click', function () {
        this.audio.pause();
        document.querySelector('.play').style.display = 'flex'
        document.querySelector('.pause').style.display = 'none'
    }.bind(this));
    document.querySelector('.stop').addEventListener('click', function(){
        this.audio.pause();
        this.audio.currentTime = 0.0;
        document.querySelector('.play').style.display = 'flex'
        document.querySelector('.pause').style.display = 'none'
    }.bind(this));
}

let go = new MusicPlayer()

