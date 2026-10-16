document.addEventListener('DOMContentLoaded', () => {
    const avatars = document.querySelectorAll('.avatar-content');
    const sections = document.querySelectorAll('.info-content');
    let scheduled = false;

    function updateAvatar() {
        const center = window.innerHeight / 2;
        let current = 0;
        sections.forEach((section, index) => {
            if (section.getBoundingClientRect().top <= center) current = index;
        });
        avatars.forEach((avatar, index) => {
            avatar.classList.toggle('active', index === current);
        });
        scheduled = false;
    }

    function scheduleUpdate() {
        if (!scheduled) {
            scheduled = true;
            window.requestAnimationFrame(updateAvatar);
        }
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('load', scheduleUpdate);
    updateAvatar();
});
