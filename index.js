// code your solution here
function saturdayFun(name='roller-skate'){
    return `This Saturday, I want to ${name}!`
}

function mondayWork(monday='go to the office'){
    return `This Monday, I will ${monday}.`
}
function wrapAdjective(parOne="*"){
    return function(adjective="special") {
        return `You are ${parOne}${adjective}${parOne}!`
    }
    
}