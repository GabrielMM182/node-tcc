module.exports = app => {
    const cadastrarController = require('../controllers/cadastrar.controller');

    app.route('/api/cadastrar')
    .get(cadastrarController.getAll) 

    app.route('/api/cadastrar')
    .post(cadastrarController.create);

    app.route('/api/cadastrar/:id')
    .delete(cadastrarController.delete);

    app.route('/api/cadastrar/:id')
    .put(cadastrarController.update);

    app.route('/api/cadastrar/find/:id')
    .get(cadastrarController.find)

    // app.route('/api/cadastrar')
    // .get(cadastrarController.getPorcent)
}