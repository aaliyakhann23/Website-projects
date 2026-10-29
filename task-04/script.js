//  a = prompt('enter any number')
//  b = prompt('enter any number')
//  c=prompt('enter any number')
// if (a > b && a>c) {
//     console.log("the a is greater", a);
    
// } else if (b > a && b > c) {
//     console.log("the b is greater", b);
// }
// else {
//     console.log('c is greateer',c);
// }


// let a = prompt('enter any number');
// let b =  prompt('enter any number')
// let c =  prompt('enter any number')

// if (a > b && a > c) {
//     console.log(a + " is greatest");
// } else if (b > a && b > c) {
//     console.log(b + " is greatest");
// } else {
//     console.log(c + " is greatest");
// }



// let ch = prompt('enter the char you want to check');

// if (
//     ch.toLowerCase() == "a" ||
//     ch.toLowerCase() == "e" ||
//     ch.toLowerCase() == "i" ||
//     ch.toLowerCase() == "o" ||
//     ch.toLowerCase() == "u"
// ) {
//     console.log("Vowel");
// }
// else {
//     console.log("Consonant");
// }


// num = Number(prompt('enter the number it will show you the day'))



// switch (num) {
//     case 1:
        
//         console.log('The day is monday');
//         break;
//     case 2:
       
//         console.log('The day is tuesday');
//         break;
//     case 3:
        
//         console.log('The day is wednesday');
//         break;
//     case 4:
//         console.log('the day is thursday');
//         break;
//     case 5:
//         console.log('The day is friday')
//         break;
//     case 6:
//         console.log('The day is saturday')
//         break;
//     case 7:
//         console.log('The day is sunday')
//         break;
//     default:
//         console.log('wrong number ! enter only between 1-7');
// }

// let username = prompt('enter the username')
// let password = prompt('enter the password: ')
// if (username === "admin" && password === '1234'){
//     console.log(`the username ${username} is correct .please enter in your website`);
    
// } else {
//     console.log('your user name and password is wrong')
// }


// let age = 11

// let num = age>=18 ? "YOu can vote" : "you can't vote";
 
// console.log(num)

// let name = 'Zikra Faheem'
// let age = 21
// let clg = 'Sant hirdaram girls college'
// let passion = 'Business owner'
// let goal = 'profitable business'
// let city = 'Bhopal'
// console.log(`Hey there ! my name is ${name}. I live in city ${city} and i study in the prominent college ${clg} my passion is to become ${passion} and the goal of my life is to have a ${goal}. `)

// let p = Number(prompt('enter the principal amount'))
// let r = Number(prompt('enter the rate of interest%'))
// let y = Number(prompt('enter the duration(years) of the amount you will pay'))
// totalamount = p*(1 + r/100 )** y
// let ci = totalamount - p
// console.log('the simple interest of the loan is', ci)
// console.log('the total amount after including interest is',totalamount)


// let c = Number(prompt('enter the temperature'))
// let f = (c * 9 / 5) + 32
// console.log('temperature in fareinheit is ',f)


// let km = Number(prompt('enter the kilometer'))
// let m = km * 1000
// console.log('Distance in meters',m)


// let units = Number(prompt('enter the units of electricity bill'))
// let bill;
// if (units <= 100) {
//     bill = units * 2
//     console.log('your monthly electricity bill is',bill);
// } else if (units <= 200) {
//     bill = units * 3
//     console.log('your monthly electricity bill is',bill);
  
// } else {
//     bill = units * 5
    
// }
// console.log('your bill is ',bill)


//array

// let arr= ['turkey','dubai','london','switzerland','bhopal']
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// let arr = ['aaliya', 20.4, 12, true, [12, 34, 54, 6]]
// console.log(arr[arr.length - 1])
// console.log(arr[4][0], arr[4][1])

// let a = [23, 32, 43, 54, 64, 6]
// let temp = a[1]
// a[1] = a[a.length - 2];
// a[a.length - 2] = temp;
// console.log(a)
 

// let ab = [
//     [10, 20, 30],
//     [10, 50, 30],
//     [10, 20, 30]
// ]
// console.log(ab);
// console.log(ab[0][0]+ab[0][1]+ab[0][2]);
// console.log(ab[1][0]+ab[1][1]+ab[1][2]);
// console.log(ab[2][0]);

// let a = [23, 43, 23, 23, 42, 4]
// function check(arr) {
//     if (arr.length % 2 == 0) {
//         console.log('array is even ')
//     } else {
//         console.log('array length is odd')
//     }

// }
// check([23, 43, 23, 23,34])


// let arr = [32, 43, 44, 54]
// let arr1 = []
// for (let i = 0; i < arr.length; i++){
//     arr1.push(arr[i]);
// }
// arr1.push(34)
// console.log(arr1)


// let arr = [12, 14, 16, 18, 20]
// a = arr.pop()
// console.log(a)


// let arr = [12, 14, 16, 18, 20]
// while (arr.length > 0) {
//     (arr.pop())
// }
// console.log('Array is Empty')


// let arr = ['aaliya','mariyam','priya','zikra']
// arr.unshift('aalu', 'kaju', 'bhalu', 'kalu')
// console.log(arr)

// let arr = [12, 14, 16, 18, 20]
// while (arr.length > 2) {
//     arr.shift()
// }
// console.log(arr)


// let arr = [12, 14, 16, 18, 20]
// arr.splice(2,3,21,11,23,34,25)

// console.log(arr)

// let arr = [12, 14, 16, 18, 20]
// arr.splice(3, 2)
// console.log(arr)

// let arr = [12, 2, 3, 3, 14, 43, 16, 0, 23, 12, 18, 20]
// arr.sort((a, b) => a - b)
// console.log(arr);

// let arr = [12, 2, 3, 3, 14, 43, 16, 0, 23, 12, 18, 20]
// let arr1 = arr.slice(1, arr.length-1)
// console.log(arr1)


// let arr = [10, 20, 30, 40, 50, 60, 70];
                          
// console.log(arr.slice(-5, -2));

// let arr = [10, 20, 30, 40, 50, 60, 70];
// let arr2 = arr.slice(arr.length-3)
// console.log(arr2)

// let arr = [1, 20, 37, 47, 51, 60, 70];
// let evencount = []
// let oddcount = []
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 == 0) {
//         evencount.push(arr[i])
        
//     }
//     else {
//        oddcount.push(arr[i])
//     }
// }
// console.log(evencount);
// console.log(oddcount);

// let arr = [1, 20, 37, 47, 51, 60, 70];
// let smallest = arr[0]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < smallest)
//         smallest = arr[i]
// }
// console.log(smallest)


// let arr = [20, 30, 40, -1, -23, 0, -12]
// positive = 0
// negative = 0
// zero = 0
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0) {
//         positive++
//     } else if (arr[i] < 0) {
//         negative++
//     } else {
//         zero++
//     }
// }
// console.log(positive)
// console.log(negative)
// console.log(zero)

// let arr = [20, 30, 40, -1, -23, 0, -12, 'aaliya', 'bhalu'];
// let find = 20
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === find) {
//         found == true;
//         console.log(i)
       
//     }
    
// }

// if (found) {
//     console.log('Element exists');
// } else {
//     console.log('Element does not exist');
// }

// let arr = [5, 8, 5, 2, 5, 9, 8, 5];
// let find = 5;
// let count = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === find) {
//         count++
//     }
// }
// console.log(count)

let arr = [10, 20, 30, 30, 10, 10, 20, 50,50, 'aaliya'];

for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (count === 1) {
        console.log(arr[i]);
    }
}

