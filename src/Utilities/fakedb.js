const addToDb = id => {

    //item jodi storage e already thake tobe get item korle ekta string er moddhe er value dibe ar jodna thake tobe null dekhabe


    let shoppingCart;

    //get shopping cart
    const storedCart = localStorage.getItem('shopping-cart');//here we get an obj that is stringyfied
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }

    
    //add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        console.log('item already exists');
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;

        // localStorage.setItem(id,newQuantity)
    }
    else {
    
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);


    }

    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))


    
}

//removing item from cart
const removeFromDb = id => {
    console.log('remove');
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            console.log('Item exists');
            delete shoppingCart[id];

            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));//updated the item then set the new item in the local storage

        }
    }

}


//reducer - is a method that has initially two argument recquired and this method is used to get the total price sum of a cart listed item

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current;
    const total = products.reducer(reducer, 0);
    return total;
}


export {
    addToDb,
    removeFromDb,
    getTotalPrice as getTotal
};

    
    //practice
const addToDb2 = id => {

    let shoppingCart;


    //get from shoppping ccart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }



    // addQuantity
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id]=newQuantity
    }
    else {
        shoppingCart[id] = 1;
    }



    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))

}