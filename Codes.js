//Problem 1

function calculateMoney(ticketSale){
    if (ticketSale<0){
        return "Invalid number";
    }
    let money_made = ticketSale*120;
    total_remains = money_made-500-(8*50);
    return total_remains;


}

// console.log(calculateMoney(-130));


//Problem 2

function checkName(name){
    if (typeof(name)!=='string'){
        return "invalid";
    }
 
    let holder = name.toLowerCase();
    
    let last = holder[holder.length-1];
    if (last=='a' || last=='e' || last=='i' || last=='o' || last=='u' || last=='w' || last=='y'){
        return "Good Name";
    }
    else{
        return "Bad Name";
    }
}

// console.log(checkName(21));

//Problem 3

function deleteInvalids(array){
    if (!Array.isArray(array)){
        return "Invalid";
    }

    let array1 = [];

    for (const elements of array){
        if (typeof(elements)=='number' && !Number.isNaN(elements)){
            array1.push(elements);
        }
        
    }
    return array1;

}


// console.log(deleteInvalids(["1",{num:2} , NaN]));


//Problem 4

function password(obj){
    var checker = obj.birthYear.toString();
    if (checker.length!=4){
        return "Invalid";
    }
    
    var counter=0;
    for (const elems in obj){
        counter++;
    }
    if (counter!=3){
        return "Invalid";
    }
    let firstLetter = obj.siteName[0].toUpperCase();
    obj.siteName[0] = firstLetter;

    var result = obj.siteName+"#"+obj.name+"@"+obj.birthYear;
    return result;
}

// console.log(password( {name:"kolimuddin" ,birthYear:1999,siteName:"google"}));

// const val = {name:"toky",birthYear:200,siteName:"Facebook"};


//Problem 5

function monthlySavings(arr , livingCost){
    if (!Array.isArray(arr)){
        return "invalid input";
    }

    if (typeof(livingCost)!="number"){
        return "invalid input";
    }

    let total_cost = 0;
    for (const payments of arr){
        if (payments>=3000){
            total_cost+=(payments*0.80);
        }
        else{
            total_cost+=payments;
        }
    }

    var result = total_cost-livingCost;
    if (result<0){
        return "earn more";
    }
    else{
        return result;
    }

}

// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000))




