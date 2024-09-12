
// Функция получения товаров
async function getProducts() {
    try {
        const response = await fetch('api/products/');
        if (!response.ok) throw new Error('Не удалось получить данные');
        const products = await response.json();
        const productsTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
        productsTable.innerHTML = '';

        products.forEach(product => {
            const row = productsTable.insertRow();
            row.insertCell(0).innerText = product.title;
            row.insertCell(1).innerText = product.description;
            row.insertCell(2).innerText = product.price;
        });
    } catch (er) {
        console.error('Ошибка в получение данных', er);
    }
}

// Добавление товара
document.getElementById('productForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(this)
    const data ={
        title: formData.get('title'),
        description: formData.get('description'),
        price: formData.get('price')
    };
    
    try {
        const response = await fetch('api/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Не удалось добавить товар');
        await getProducts();
    } catch (error) {
        console.error('Ошибка при добавление товара:', error);
    }
})

// Получение товаров при перезагрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    getProducts();
});