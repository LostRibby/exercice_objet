const burgers = [
    {
        foodname: 'Space Burger',
        picture: './spaceBurger.jpg', 
        price: 12,
        promo: true,
        newPrice: 10,
  }, 
    
 {
        foodname: 'Earth Burger',
        picture: './earthBurger.jpg',
        price: 15,
        promo: true,
        newPrice: 12,
    }]


const TBODY_BURGER = document.getElementById('burgers');

burgers.forEach((burger, index)=> {

    const TR = document.createElement('tr'); 
    const TD_PICTURE = document.createElement('td');
    const PICTURE = document.createElement('img');

    PICTURE.src = burger.picture; 
    PICTURE.alt = 'image de '+ burger.foodname; 
    TD_PICTURE.append(PICTURE);

    const TD_NAME = document.createElement('td');
    TD_NAME.textContent = burger.foodname; 

    const TD_PRICE = document.createElement('td'); 
    TD_PRICE.textContent = burger.price + ' $'; 

    const TD_PROMO = document.createElement('td');
    const PROMO = document.createElement('p');
    PROMO.classList.add('promo')
    if (burger.promo){
         TD_PROMO.textContent = burger.newPrice + ' $'; 
         PROMO.textContent= 'Promo';
    }
    TD_PROMO.append(PROMO);

    TR.append(TD_PICTURE, TD_NAME, TD_PRICE, TD_PROMO);
    TBODY_BURGER.append(TR)

});