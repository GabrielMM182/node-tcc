const Porcent = require ('../models/porcent.model');

exports.create = async(req, res) =>{
    const porcent = await Porcent.create(req.body);

    if(porcent){
        res.status(200).send({message:'Setor cadastrado com sucesso'})
    }else{
        res.status(500).send({message:'Erro ao cadastrar Avaliador'});
    }
    
}

exports.getAll = async(req, res) =>{
     
    const porcent = await Porcent.getAll();
    res.status(200).send(porcent)

}