const countries = [
    {
        id: 1,
        name: 'Bhutan',
        alpha2Code: 'BT',
        alpha3Code: 'BTN'
    },
    {
        id: 2,
        name: 'Denmark',
        alpha2Code: 'DK',
        alpha3Code: 'DNK'
    },
    {
        id: 3,
        name: 'Finland',
        alpha2Code: 'FI',
        alpha3Code: 'FIN'
    },
    {
        id: 4,
        name: 'Malaysia',
        alpha2Code: 'MY',
        alpha3Code: 'MYS'
    },
    {
        id: 5,
        name: 'Åland Islands',
        alpha2Code: 'AX',
        alpha3Code: 'ALA'
    },
];

export const getAllCountries = (req, res) => {
    res.status(200).json(countries)
};

export const getSingleCountry = (req, res) => {
    console.log(req.params.alphaXCode.length);
    let findCountry
    if (req.params.alphaXCode.length === 2) {
        findCountry = countries.find((country) => country.alpha2Code == req.params.alphaXCode);
        res.status(200).json(findCountry);
    } else if (req.params.alphaXCode.length === 3) {
        findCountry = countries.find((country) => country.alpha3Code == req.params.alphaXCode);
        res.status(200).json(findCountry);
    } else {
        res.status(400).send('Country not in database')
    };       
};

export const addNewCountry = (req, res) => {
    const newCountry = {
        id: req.body.id,
        name: req.body.name,
        alpha2Code: req.body.alpha2Code,
        alpha3Code: req.body.alpha3Code
    };
    countries.push(newCountry);
    res.status(201).json(newCountry);
};

export const editCountry = (req, res) => {
    const findCountry = countries.find((country) => country.alpha2Code == req.params.alpha2Code);
    
    if (findCountry) {
        findCountry.name = req.body.name;
        findCountry.alpha2Code = req.body.alpha2Code;
        findCountry.alpha3Code = req.body.alpha3Code;
        res.status(200).send(findCountry);
    } else {
        res.status(400).send('Country not in database')
    };
};

export const deleteCountry = (req, res) => {
    const findCountry = countries.find((country) => country.alpha2Code == req.params.alpha2Code);
    const index = countries.indexOf(findCountry);
    if (findCountry) {
        countries.splice(index, 1);
        res.status(200).send('Entry deleted')
    } else {
        res.status(400).send('Country not in database')
    };
};