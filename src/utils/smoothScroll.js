const  smoothScroll = (targetId) =>
{
    const target = document.getElementById(targetId.toLowerCase());
    const targetOffsetTop = target.offsetTop;
    window.scrollTo({
        top: targetOffsetTop - 120,
        behavior: 'smooth'
    });
}
export default smoothScroll;
