const sounds = [
    'Absen (Kobo)',
    'Acumalaka',
    'Ahhh Jangan Donk (Zeta)',
    'terompet',
    'Ak Jg Mw 😋 (Zeta)',
    'WOW',
    'applause',
    'b*r** (Kobo)',
    'bruh',
    'censor',
    'correct',
    'kecewa',
    'ehek (Kobo)',
    'Kamu Nanyea? (Reine)',
    'krik-krik',
    'P**t*k (Kobo)',
    'Prit (Kobo)',
    'mengkaget',
    'tada',
    'sad',
    'menang',
    'wrong'

];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSongs();

        document.getElementById(sound).play();
    });

    document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}