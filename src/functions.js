const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue:(x) => x,
    createUser : () => {
        const user = { firstName:'Ahmed Murtaza'};
        user['company']  = 'Ideas Interactive';
        return user;
    }
} 

//console.log(functions.add(2,7));

module.exports = functions;