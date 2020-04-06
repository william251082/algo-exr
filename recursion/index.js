function countDown(num) {
    if (num <=0) {
        console.log(("All done"))
    }
    console.log(num);
    num--;
    countDown(num)
}

function countDown(num) {
    for (var i=num; i > 0; i--) {
        console.log(i)
    }
    console.log("All done")
}


function sum_range(num) {
    if (num === 1) return 1;
    return num + sum_range(num -1)
}

// step through
// sum_range(3);
//     return 3 + sum_range(2);
//         return 2 + sum_range(1);
//             return 1;



function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood();
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log("Ok ready to go to work!")
}

wakeUp();
