const  smoothScroll = (targetId) =>
{
    const target = document.getElementById(targetId.toLowerCase());
    const targetOffsetTop = target.offsetTop;
    window.scrollTo({
        top: window.innerWidth > 500 ? targetOffsetTop - 120 : targetOffsetTop - (targetId === 'Contacto' ? 320 : 280),
        behavior: 'smooth'
    });
}
export default smoothScroll;
