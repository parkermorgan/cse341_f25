const familyFunction = (req, res, next) => {
    res.json('Shelby Morgan');
};

const friendFunction = (req, res, next) => {
    res.json('David Lawrence')
}

module.exports = { familyFunction, friendFunction };