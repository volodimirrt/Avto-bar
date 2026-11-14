
let buttons = document.querySelectorAll(".buy");

// Додавання автомобілів у кошик
buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        let box = button.parentElement;
        let name = box.querySelector("p").textContent;
        let priceText = box.querySelectorAll("p")[1].textContent;
        let price = parseInt(priceText.replace(/\D/g, ""));

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({
            name: name,
            price: price
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(name + " додано в кошик!");
    });
});

// Відображення кошика
function showCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cart-items");
    let total = document.getElementById("total");

    if (!container) return;

    container.innerHTML = "";

    let sum = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p>Ваш кошик порожній 😔</p>";
    }

    cart.forEach(function(car, index) {
        sum += car.price;

        container.innerHTML += `
            <div class="cart-item">
                <p>${car.name}</p>
                <p>${car.price}$</p>
                <button onclick="removeCar(${index})">Видалити</button>
            </div>
        `;
    });

    total.textContent = "Загальна сума: " + sum + "$";
}

// Видалення автомобіля
function removeCar(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    showCart();
}

// Очистити кошик
function clearCart() {
    localStorage.removeItem("cart");
    showCart();
}

// Кнопка зв'язку
function contactUs() {
    alert("Зв'яжіться з нашим менеджером: 0501532358");
}

showCart();
