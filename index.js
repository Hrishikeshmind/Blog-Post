document.querySelector('.read-more').addEventListener('click', function(event) {
    event.preventDefault();
    const productInfo = document.getElementById('product-info');
    productInfo.innerHTML = `
        <h3>Mobile Product: iPhone 14</h3>
        <p>The iPhone 14 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and a dual-camera system with 12MP ultra-wide and wide cameras. It offers 5G connectivity, improved battery life, and runs on iOS 15.</p>
        <img src="https://via.placeholder.com/300x200" alt="iPhone 14">
    `;
    productInfo.style.display = 'block';
});

