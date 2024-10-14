document.addEventListener("DOMContentLoaded", function() {

    alert("Hi everybody Im Am Racehl Wellcome to my WEBSITE!!!");

    const mainAudio = document.getElementById("main-audio");
    const albumImage = document.getElementById("albumImage");
    let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
    loadMusic(musicIndex);

    // Hàm loadMusic để tải và phát bài hát
    function loadMusic(index) {
        mainAudio.src = `songs/${allMusic[index - 1].src}.mp3`;
        albumImage.src = `abums/${allMusic[index - 1].img}.png`; // Cập nhật hình ảnh
        mainAudio.play();

        // Cập nhật thông tin bài hát đang phát
        document.getElementById("songName").innerText = allMusic[index - 1].name;

        // Cập nhật thời gian bài hát
        mainAudio.addEventListener("timeupdate", function() {
            const currentTime = mainAudio.currentTime;
            const duration = mainAudio.duration;
            const timeElapsed = formatTime(currentTime);
            const totalTime = formatTime(duration);
            document.getElementById("songTime").innerText = `${timeElapsed} / ${totalTime}`;
        });
    }

    // Hàm chuyển đổi thời gian thành dạng hh:mm:ss
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        return formattedTime;
    }

    // Xử lý sự kiện khi bài hát kết thúc, chuyển sang bài tiếp theo
    mainAudio.addEventListener("ended", function() {
        musicIndex++;
        if (musicIndex > allMusic.length) {
            musicIndex = 1;
        }
        loadMusic(musicIndex);
    });

    // Xử lý sự kiện khi click vào nút "Next Song"
    document.getElementById("nextSong").addEventListener("click", function() {
        musicIndex++;
        if (musicIndex > allMusic.length) {
            musicIndex = 1;
        }
        loadMusic(musicIndex);
    });

    // Xử lý sự kiện khi click vào nút "Show/Hide Song Info"
    document.getElementById("toggleSongInfo").addEventListener("click", function() {
        const songInfo = document.getElementById("songInfo");
        if (songInfo.style.display === "none") {
            songInfo.style.display = "block";
        } else {
            songInfo.style.display = "none";
        }
    });
});
