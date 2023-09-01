const items = document.querySelectorAll('.item');

function active() {
    items.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active')
}

items.forEach((item) =>
    item.addEventListener('click', active ))