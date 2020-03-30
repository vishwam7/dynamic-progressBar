const progresses = document.querySelectorAll('.progress-done');

progresses.forEach(progress => {
    const done = +progress.getAttribute('data-done');
    const duration = getComputedStyle(progress).transitionDuration;
    const timeOutDuration = +duration.slice(0, 1) * 1000;

    progress.style.width = done + '%';
    progress.style.opacity = 1;

    for (let i = 0; i <= done; i++) {
        setTimeout(() => {
            progress.innerText = i + '%';
        }, (timeOutDuration / done) * i);
    }
});