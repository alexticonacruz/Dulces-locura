let isDragging = false;
let offsetX, offsetY;

const movableDiv = document.getElementById('movable-div');

movableDiv.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - movableDiv.getBoundingClientRect().left;
    offsetY = e.clientY - movableDiv.getBoundingClientRect().top;
    movableDiv.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    movableDiv.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    movableDiv.style.cursor = 'grab';
});

document.addEventListener('mouseleave', () => {
    if (isDragging) {
        isDragging = false;
        movableDiv.style.cursor = 'grab';
    }
});
