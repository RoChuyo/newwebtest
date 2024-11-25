// 为按钮链接动态处理
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', () => {
        console.log(`Hovering on ${button.textContent}`);
    });
});
