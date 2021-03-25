const Cadastrar = require ('../models/cadastrar.model');

exports.create = async(req, res) =>{
    const cadastrar = await Cadastrar.create(req.body);

    if(cadastrar){
        res.status(200).send({message:' cadastrado com sucesso'})
    }else{
        res.status(500).send({message:'Erro ao cadastrar '});
    }
}

// pegar %
// exports.getPorcent = async(req, res) => {
//     const cadastrar = await Cadastrar.getPorcent();
//     res.status(200).send(cadastrar)
// }

// pegar list de td
exports.getAll = async(req, res) =>{
     
    const cadastrar = await Cadastrar.getAll();
    res.status(200).send(cadastrar)

} 

exports.delete = async(req, res) => {
    const cadastrar = await Cadastrar.delete(req.params.id, req.body);

    if(cadastrar) {
        res.status(200).send({message:'nome deletado com sucesso'})
    }else{
        res.status(200).send({message:'Erro ao deletar nome'});

    }
}

exports.find = async (req, res) =>{
                   
    const cadastrar = await Cadastrar.find(req.params.id);
    

    res.status(200).send(cadastrar);
}

exports.update = async(req, res) =>{
    const cadastrar = await Cadastrar.update(req.params.id, req.body);

    if(cadastrar){
        res.status(200).send({ message: 'Cadastro atualizado com sucesso'})
    }else{
        res.status(500).send({ message: 'Erro ao atualizar cadastro'});
    }

}