let person = {
    name : 'kevin',
    age : 35
};


// dot notation
person.name = 'sebastian';

// bracked notation
let selection = 'name';
person['selection'] = 'caesar';

console.log(person.selection)