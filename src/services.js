var customers = []

const getCustomersAllDependents = (req, res) => {
    var cpf = req.params.cpf;
    var result = [];

    customers.forEach(el => {
        if (cpf == el.cpfDeTitular) {
            result.push(el)
        }
    })
    if (result.length == 0) res.json({ message: "Customer não encontrado" }, 404)
    res.json(result)
}

const getCustomersById = (req, res) => {
    var cpf = `${req.params.cpf}`;
    customers.forEach(el => {
        if (cpf == el.cpf) res.json(el)
    })
    res.json({ message: "Customer não encontrado" }, 404)
}

const updateCustomers = (req, res) => {
    var body = req.body;
    let valid = false;
    for (let i = 0; i < customers.length; i++) {
        if (cpf == customers[i].cpf) {
            customers[i] = body;
            valid = true;
        }
    }
    if (!valid) res.json({ message: "Customer não encontrado" }, 404)
    res.json({}, 200)
}

const deleteCustomers = (req, res) => {
    var cpf = `${req.params.cpf}`;
    let valid = false;
    for (let i = 0; i < customers.length; i++) {
        if (cpf == customers[i].cpfDeTitular) {
            customers.splice(i, 1);
            valid = true;
        }
    }

    if (!valid) res.json({ message: "Customer não encontrado" }, 404)
    else res.json({}, 200)
}

const getAllCustomers = (req, res) => {
    return res.send(customers)
}

const newCustomers = (req, res) => {
    var body = req.body;

    if (body.cpfDeTitular) res.status(405)
    if (body.dataNascimento) res.status(405)
    if (body.name) res.status(405)
    if (body.cpf) res.status(405)

    var customer = {
        'cpfDeTitular': body.cpfDeTitular,
        'dataNascimento': body.dataNascimento,
        'name': body.name,
        'cpf': body.cpf,
    }
    customers.push(customer)
    res.json({}, 200)

}


module.exports = {
    getCustomersAllDependents,
    deleteCustomers,
    getCustomersById,
    updateCustomers,
    getAllCustomers,
    newCustomers
}