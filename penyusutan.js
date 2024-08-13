document.getElementById('depreciation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai dari formulir
    const name = document.getElementById('asset-name').value;
    const purchasePrice = parseFloat(document.getElementById('purchase-price').value);
    const salvageValue = parseFloat(document.getElementById('salvage-value').value);
    const usefulLife = parseFloat(document.getElementById('useful-life').value);

    // Validasi input
    if (isNaN(purchasePrice) || isNaN(salvageValue) || isNaN(usefulLife)) {
        alert('Mohon masukkan nilai yang valid.');
        return;
    }

    // Hitung penyusutan
    const annualDepreciation = (purchasePrice - salvageValue) / usefulLife;

    // Tampilkan hasil
    document.getElementById('result').innerHTML = `
        <h2>Hasil Penyusutan</h2>
        <p><strong>Nama Aset:</strong> ${name}</p>
        <p><strong>Harga Pembelian:</strong> ${purchasePrice.toFixed(2)} IDR</p>
        <p><strong>Nilai Sisa:</strong> ${salvageValue.toFixed(2)} IDR</p>
        <p><strong>Umur Ekonomis:</strong> ${usefulLife} Tahun</p>
        <p><strong>Penyusutan Tahunan:</strong> ${annualDepreciation.toFixed(2)} IDR</p>
    `;
});
