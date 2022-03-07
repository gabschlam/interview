var intercambio = names => {
    var result = [];
    var receivers = names.slice();
    var relations = new Map();

    console.log(receivers)

    for (let i = 0; i < names.length; i++) {
        var randNumber = Math.floor(Math.random() * receivers.length);

        // Validate that the current person is paired with itself and does not have cyclic relations
        while ((receivers[randNumber] === names[i]) || (relations.get(names[i]) == receivers[randNumber])) { // 555-0182        ) {
            randNumber = Math.floor(Math.random() * receivers.length);
        }

        relations.set(names[i], receivers[randNumber]);

        result.push(names[i] + "->" + receivers.splice(randNumber, 1)[0]);
        
    }

    return result;
};

console.log(intercambio(["Luis", "Carlos", "Gustavo", "Fernando", "Victor", "Javier"]));