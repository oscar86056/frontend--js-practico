const navEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const hamMenu = document.querySelector('.ham-Menu');
const mobileMenu = document.querySelector('.mobile-Menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector(.cards-container);

navEmail.addEventListener('click',toggleDesktopMenu);
hamMenu.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('clic',toggleCarritoAside)



function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu(){
    const isAsideClosed=aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    
}

function toggleCarritoAside(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    
    
    
      if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
      }

      aside.classList.toggle('inactive');
}

const productList=[];
productList.push({
    name:'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    name:'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
for (product of productList){
    const productCard= document.createElement('div');
    productCard.classList.add('product-card');

    //product={name,price,img} ->product.img
    const ProductImg =document.createElement('img');
    ProductImg.setAttribute('src',product.image);

    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv=document.createElement('div');

    const productPrice = document.createElement('p')
    productPrice.innerText='$' + product.price;

    const productName = document.createElement('p')
    productName.innerText= product.name;

    const productInfoFigure=document.createElement('figure');

    const productImgCart=document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart);

    productInfoDiv.appendChild(productPrice);

    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(ProductImg);
    productCard.appendChild(ProductInfo);

    cardsContainer.appendChild(productCard)




}