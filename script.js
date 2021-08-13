const textObj = {
    level:['beginner','intermediate','advanced','junior','senior'],
    programmingLang: ['C','C++','Python','JavaScript','Ruby','R'],
    fortune:['programmer will be successful','programmer will be unemployed','programmer will be billionaire','programmer will breakthrough'],
}
let randomText = [];
for(let item in textObj) {
    randomID = Math.floor(Math.random()*textObj[item].length);
    randomText.push(textObj[item][randomID]);
}
console.log(randomText);