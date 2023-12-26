const soma = (req, res) => {
    const soma = 100 + 1;

    res.json({soma: soma});
};

module.exports = { soma };