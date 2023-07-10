const obaService = require('../services/oba');

exports.index = function (req, res) {
    res.render('pages/index');
};

exports.favorite = function (req, res) {
    res.render('pages/favorite');
};

exports.details = async function (req, res) {
    const id = req.params.id;

    console.log(id);

    // /details/3453456
    // make sure there's an id
    if (!id) {
        return res.status(400).send('No id provided');
    }

    try {
        // gets data from obaService in function getDetails
        const record = await obaService.getDetails(id);
        console.log('id', id);

        res.render('pages/details', { record });
    } catch (error) {}
};
