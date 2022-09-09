const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const arrowAsideClose = document.querySelector('.arrow-close');
const cardsContainer = document.querySelector('.cards-container');

const mobileMenuLine = document.querySelector('.mobile-menu ul:nth-child(1)');

const toggleDesktopMenu = () => {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
};

const toggleMobileMenu = () => {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('active');
    mobileMenuLine.classList.toggle('active');
};

const toggleCarritoAside = () => {
    const isMobileMenuOpen = mobileMenu.classList.contains('active');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (isMobileMenuOpen || !isDesktopMenuClose) {
        mobileMenu.classList.remove('active');
        mobileMenuLine.classList.remove('active');
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
};

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
arrowAsideClose.addEventListener('click', toggleCarritoAside);

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: `Automóvil`,
    price: 2880,
    image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
});
productList.push({
    name: 'Laptop',
    price: 480,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: `Computadora (Sin el gato :'3)`,
    price: 720,
    image: 'https://images.unsplash.com/photo-1607034071833-18a5b64047ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
});
productList.push({
    name: `Auto`,
    price: 3020,
    image: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
});
productList.push({
    name: 'Bike',
    price: 220,
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80',
});

const renderProducts = arr => {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);
