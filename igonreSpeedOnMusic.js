function setVideoSpeedToNormal() {
    const video = document.querySelector('video');
    if (video) {
        video.playbackRate = 1.0;
        console.log("Velocidade do vídeo ajustada para 1.0 (música detectada).");
    }
}

function isMusicCategory() {
    const categoryElement = document.querySelector('meta[itemprop="genre"]');
    if (categoryElement && categoryElement.content === "Music") {
        return true;
    }
    return false;
}

function monitorVideoCategory() {
    if (isMusicCategory()) {
        setVideoSpeedToNormal();
    }
}

const observer = new MutationObserver(() => {
    monitorVideoCategory();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

window.onload = monitorVideoCategory;
