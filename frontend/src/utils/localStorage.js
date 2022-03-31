


export const getValue = (key) => {
    try {
        const value = localStorage.getItem(key);
        const parsedValue = JSON.parse(value)
        return parsedValue;

    }
    catch (err) {
        return undefined;
    }
}

export const updateValue = (key, values) => {

    let cart = JSON.parse(localStorage.getItem(key))

    if (cart === null) {
        let cartArray = []
        cartArray.push(values)
        localStorage.setItem(key, JSON.stringify(cartArray))
    }
    else {
        cart.push(values)
        localStorage.setItem(key, JSON.stringify(cart))
    }

}

export const deleteValue = (key, id) => {
    let cart = JSON.parse(localStorage.getItem(key))

    let afterdel = cart.filter(x => x.id !== id)

    localStorage.setItem(key, JSON.stringify(afterdel))
}


export const addQty = (key, id) => {
    let cart = JSON.parse(localStorage.getItem(key))

    let afterUpdate = cart.map(x => {
        if (x.id === id) {
            x.qty += 1
            x.price = x.price + x.initPrice
            return x
        }
        else{
            return x
        }
    })

    localStorage.setItem(key, JSON.stringify(afterUpdate))
}

export const removeQty = (key, id) => {
    let cart = JSON.parse(localStorage.getItem(key))

    let afterUpdate = cart.map(x => {
        if (x.id === id) {
            x.qty -= 1
            x.price = x.price - x.initPrice
            return x
        }
        else{
            return x
        }
    })

    localStorage.setItem(key, JSON.stringify(afterUpdate))
}

export const selectAddress = (key ,value) => {
    localStorage.setItem(key, JSON.stringify(value))
}


export const setTotal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

