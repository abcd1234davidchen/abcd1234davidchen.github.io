document.addEventListener('DOMContentLoaded', function(){
    const avatarContents = document.querySelectorAll('.avatar-content');
    const sections = document.querySelectorAll('.info-content');
    function showAvatar(index){
        avatarContents.forEach((el,i)=>{
            if(i === index){
                const img = el.querySelector('img');
                if(img && !img.complete){
                    img.onload = () => el.classList.add('active');
                } else {
                    el.classList.add('active');
                }
            } else {
                el.classList.remove('active');
            }
        })
    }
    function onScroll(){
        let currentSection = 0;
        sections.forEach((el,i)=>{
            const rect = el.getBoundingClientRect();
            if(rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2){
                currentSection = i;
            }
        });
        showAvatar(currentSection);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
});