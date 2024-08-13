// Data containers
const barangData = [];
const kategoriData = [];
const lokasiData = [];

// Formulir dan tabel elemen
const barangForm = document.getElementById('data-barang-form');
const kategoriForm = document.getElementById('data-kategori-form');
const lokasiForm = document.getElementById('data-lokasi-form');

const barangTable = document.getElementById('data-barang-table').getElementsByTagName('tbody')[0];
const kategoriTable = document.getElementById('data-kategori-table').getElementsByTagName('tbody')[0];
const lokasiTable = document.getElementById('data-lokasi-table').getElementsByTagName('tbody')[0];

// Fungsi untuk memperbarui tabel
function updateTable(tableBody, data, columns) {
    tableBody.innerHTML = '';
    data.forEach((item, index) => {
        const row = tableBody.insertRow();
        columns.forEach(col => row.insertCell().textContent = item[col]);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.addEventListener('click', () => {
            data.splice(index, 1);
            updateTable(tableBody, data, columns);
        });
        row.insertCell().appendChild(deleteButton);
    });
}

// Event listener untuk form barang
barangForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const itemName = document.getElementById('item-name').value;
    const itemCategory = document.getElementById('item-category').value;
    const itemLocation = document.getElementById('item-location').value;
    const itemYear = parseInt(document.getElementById('item-year').value, 10);
    
    barangData.push({ name: itemName, category: itemCategory, location: itemLocation, year: itemYear });
    updateTable(barangTable, barangData, ['name', 'category', 'location', 'year']);
    
    barangForm.reset();
});

// Event listener untuk form kategori
kategoriForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const categoryName = document.getElementById('category-name').value;
    
    kategoriData.push({ name: categoryName });
    updateTable(kategoriTable, kategoriData, ['name']);
    
    kategoriForm.reset();
});

// Event listener untuk form lokasi
lokasiForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const locationName = document.getElementById('location-name').value;
    
    lokasiData.push({ name: locationName });
    updateTable(lokasiTable, lokasiData, ['name']);
    
    lokasiForm.reset();
});
