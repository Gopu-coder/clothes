function showDetails(title, price, description) {
    document.getElementById('detailTitle').textContent = title;
    document.getElementById('detailPrice').textContent = price;
    document.getElementById('detailDescription').textContent = description;
    document.getElementById('productDetails').style.display = 'block';
}

function closeDetails() {
    document.getElementById('productDetails').style.display = 'none';
}
