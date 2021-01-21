//https://github.com/Rahat47/JS_Assignment

//task 1 (Kilometer to meter)
function kilometerToMeter(kilo){
    if (kilo < 0) {
        return 'Please provide a positive number'
    } else {
        let meter = kilo * 1000
        return meter
    }
}


//task 2 (budget for items) 
function budgetCalculator(clock, phone, laptop) {
    let totalCost = 0
    // calculate clock price 
    let clockPrice = 0
    if (clock < 0 || typeof clock !== 'number') {
        return 'Please Put a valid ammount for clock'
    } else {
        clockPrice = clock * 50
    }
    // calculate phone price 
    let phonePrice = 0
    if (phone < 0 || typeof phone !== 'number') {
        return 'Please Put a valid ammount for phone'
    } else {
        phonePrice = phone * 100
    }

    // calculate laptop price 
    let laptopPrice = 0
    if (laptop < 0 || typeof laptop !== 'number') {
        return 'Please Put a valid ammount for laptop'
    } else {
        laptopPrice = laptop * 500
    }
    // return total price here
    return totalCost = clockPrice + phonePrice + laptopPrice
}


// Hotel Cost Calculator
function hotelCost(days) {
    let cost = 0
    if(days <= 0) {
        return 'Please stay at least one day'
    } 
    else if (typeof days !== 'number') {
        return 'Please provide the number of days you want to stay.'
    }
    else if (days <= 10) {
        cost = days * 100 
    } 
    else if (days <= 20) {
        let remainingDays = days - 10
        let firstPart = 10 * 100
        let seconPart = remainingDays * 80
        cost = firstPart + seconPart
    } 
    else {
        let firstPart = 10 * 100
        let secondPart = 10 * 80
        let remainingDays = days - 20
        let thirdPart = remainingDays * 50
        cost = firstPart + secondPart + thirdPart
    }
    return cost
}


//Mega Friends Function 
function megaFriend(friends) {
    let megaName = ''

    //condition for any unusual input
    if(typeof friends != 'object' || friends.length == 0) {
        return 'This Function requires an Array with at least 2 values to run.'
    }

    //looping through the array to find the biggest name
    for(let i = 0; i < friends.length ; i++) {
        // trims any white space from the name
        let element = friends[i].trim()

        if (element.length > megaName.length) {
            megaName = element
        }
    }
    return megaName
}
