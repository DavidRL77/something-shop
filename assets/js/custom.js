document.addEventListener('DOMContentLoaded', function () {
    const creatorCards = document.querySelectorAll('.creator-card');

    creatorCards.forEach(card => {
        const video = card.querySelector('.creator-video');

        if (video) {
            card.addEventListener('mouseenter', function () {
                video.play();
            });

            card.addEventListener('mouseleave', function () {
                video.pause();
                video.currentTime = 0;
            });
        }
    });
});