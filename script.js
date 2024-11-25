// 监听滚动事件
window.addEventListener('scroll', () => {
    const textContainer = document.querySelector('.text-container');
    const triggerPoint = window.innerHeight / 1.5; // 滚动触发点

    // 检查是否触发动画
    if (window.scrollY > triggerPoint) {
        textContainer.classList.add('active');
    } else {
        textContainer.classList.remove('active');
    }
});
