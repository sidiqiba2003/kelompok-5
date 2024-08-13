// Data container
const asetData = [];

// Formulir dan tabel elemen
const asetForm = document.getElementById('data-aset-form');
const asetTable = document.getElementById('data-aset-table').getElementsByTagName('tbody')[0];

// Fungsi untuk memperbarui tabel
function updateTable(tableBody, data) {
    tableBody.innerHTML = '';
    data.forEach((item, index) => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = item.name;
        row.insertCell().textContent = item.category;
        row.insertCell().textContent = item.location;
        row.insertCell().textContent = item.year;
        row.insertCell().textContent = item.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.addEventListener('click', () => {
            asetData.splice(index, 1);
            updateTable(tableBody, asetData);
        });
        row.insertCell().appendChild(deleteButton);
    });
}

// Event listener untuk form aset
asetForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const assetName = document.getElementById('asset-name').value;
    const assetCategory = document.getElementById('asset-category').value;
    const assetLocation = document.getElementById('asset-location').value;
    const assetYear = parseInt(document.getElementById('asset-year').value, 10);
    const assetValue = parseFloat(document.getElementById('asset-value').value);
    
    asetData.push({
        name: assetName,
        category: assetCategory,
        location: assetLocation,
        year: assetYear,
        value: assetValue
    });
    updateTable(asetTable, asetData);
    
    asetForm.reset();
});
