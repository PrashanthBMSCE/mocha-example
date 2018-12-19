module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, cb) => {
    setTimeout(function () {
        cb(a + b);
    }, 1000)
}

module.exports.square = (x) => x * x;


module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}

module.exports.asyncSquare = (n, callback) => {
    setTimeout(function () {
        callback(n * n);
    }, 1000)
}