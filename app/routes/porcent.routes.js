module.exports = app => {
    
    const porcentController = require('../controllers/porcent.controller');
    
    app.route('/api/porcent')
         .post(porcentController.create)
         .get(porcentController.getAll);

}
