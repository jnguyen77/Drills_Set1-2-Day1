function jediName (first, last){
    let x = first.substr(0,2);
    let y = last.substr(0,3);
    console.log(y + x);
}

jediName('Beyonce','Knowles')


function beyond (num) {
    if (num === num.POSITIVE_INFINITY || num.NEGATIVE_INFINITY) {console.log('and beyond');}
    else if (num > 0){console.log('to infinity');}
    else if (num <0){console.log('to negative infitnity');}
    else if (num ===0) {console.log('Staying Home');}
}

console.log(beyond(28));
console.log(beyond(-28));
console.log(beyond(0));


function decode(string){
    let x = string.split(' ');
    let decodeArr = [];
    
    x.forEach(function(word){
        if (word[0] === 'a'){
            decodeArr.push(word[1]);
        } else if (word[0] ==='b'){
            decodeArr.push(word[2]);
        }else if (word[0] ==='c'){
            decodeArr.push(word[3]);
        }else if (word[0] ==='d'){
            decodeArr.push(word[4]);
        }else {
            decodeArr.push(' ')
        }
    });

    let crackcode = decodeArr.join('');
    return crackcode;
}

console.log(decode('craft block argon meter bells brown croon droop'))



function howmanydays(month,leapYear){
    if (leapYear === true && month ==='February'){
        return `${month} has 29 days`;
    } else if (leapYear === false && month === 'February'){
        return `${month} has 28 days`;
    }


    switch(month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return  `${month} has 31 days`;
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
             return `${month} has 31 days`;
        defalt:
            throw new Error ('Must Provide, Valid month');
}
}



console.log(howmanydays('February',true));
console.log(howmanydays('welp',true));

        

function rockPaperScissors(userMove) {
    let result = '';
    const compMove = Math.floor(Math.random() * 3) + 1;
    if (!userMove || typeof userMove !== 'number' || userMove < 1 || userMove > 3) {
      throw 'Invalid move';
    } else if ((userMove === 1 && compMove === 3) || (userMove === 2 && compMove === 1) || (userMove === 3 && compMove === 2)){
      result = 'User wins';
    } else {
      result = 'Computer wins';
    }
    console.log(result);
    return result;
  }
  
  
  rockPaperScissors(1);
  rockPaperScissors(2);
