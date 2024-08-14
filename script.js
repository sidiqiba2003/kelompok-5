document.getElementById('category-select').addEventListener('change', function() {
    const selectedCategory = this.value;
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (selectedCategory === 'all' || itemCategory === selectedCategory) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
