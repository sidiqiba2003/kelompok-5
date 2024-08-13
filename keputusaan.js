// Data container
const criteriaData = [];
const assetData = [];

// Elemen formulir dan tabel
const criteriaForm = document.getElementById('data-kriteria-form');
const assetForm = document.getElementById('data-aset-form');
const criteriaTable = document.getElementById('criteria-table').getElementsByTagName('tbody')[0];
const assetTable = document.getElementById('asset-table').getElementsByTagName('tbody')[0];
const evaluationResults = document.getElementById('evaluation-results').getElementsByTagName('tbody')[0];
const evaluateBtn = document.getElementById('evaluate-btn');

// Fungsi untuk memperbarui tabel kriteria
function updateCriteriaTable() {
    criteriaTable.innerHTML = '';
    criteriaData.forEach((item, index) => {
        const row = criteriaTable.insertRow();
        row.insertCell().textContent = item.name;
        row.insertCell().textContent = item.weight;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.addEventListener('click', () => {
            criteriaData.splice(index, 1);
            updateCriteriaTable();
        });
        row.insertCell().appendChild(deleteButton);
    });
}

// Fungsi untuk memperbarui tabel aset
function updateAssetTable() {
    assetTable.innerHTML = '';
    assetData.forEach((item, index) => {
        const row = assetTable.insertRow();
        row.insertCell().textContent = item.name;
        row.insertCell().textContent = item.specification;
        row.insertCell().textContent = item.quality;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.addEventListener('click', () => {
            assetData.splice(index, 1);
            updateAssetTable();
        });
        row.insertCell().appendChild(deleteButton);
    });
}

// Fungsi untuk mengevaluasi aset
function evaluateAssets() {
    evaluationResults.innerHTML = '';

    // Menghitung skor setiap aset
    assetData.forEach(asset => {
        let totalScore = 0;
        criteriaData.forEach(criteria => {
            totalScore += asset.quality * (criteria.weight / 100);
        });
        const row = evaluationResults.insertRow();
        row.insertCell().textContent = asset.name;
        row.insertCell().textContent = totalScore.toFixed(2);
    });
}

// Event listener untuk form kriteria
criteriaForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const criteriaName = document.getElementById('criteria-name').value;
    const criteriaWeight = parseFloat(document.getElementById('criteria-weight').value);
    
    criteriaData.push({
        name: criteriaName,
        weight: criteriaWeight
    });
    updateCriteriaTable();
    
    criteriaForm.reset();
});

// Event listener untuk form aset
assetForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const assetName = document.getElementById('asset-name').value;
    const assetSpecification = document.getElementById('asset-specification').value;
    const assetQuality = parseFloat(document.getElementById('asset-quality').value);
    
    assetData.push({
        name: assetName,
        specification: assetSpecification,
        quality: assetQuality
    });
    updateAssetTable();
    
