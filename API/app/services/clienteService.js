module.exports.getClientesService = async function(application) {

    const connection = application.config.dbConnection;

    const clienteModel = new application.app.models.clienteDAO(connection);

    const clienteResult = await clienteModel.FindAll();
    
    return clienteResult[0];
			
}

module.exports.getClientesByNomeService = async function(application, nome_cliente) {    

    const connection = application.config.dbConnection;

    const clienteModel = new application.app.models.clienteDAO(connection);

    const clienteResult = await clienteModel.FindByNome(nome_cliente); 
    
    return clienteResult[0];
			
}

module.exports.getClientesByIdService = async function(application, id_cliente) {    

    const connection = application.config.dbConnection;

    const clienteModel = new application.app.models.clienteDAO(connection);

    const clienteResult = await clienteModel.FindById(id_cliente);
    
    return clienteResult[0];
			
}


module.exports.cadClinteService = async function(application, cliente) {
    
    const connection = application.config.dbConnection;

    const clienteModel = new application.app.models.clienteDAO(connection);

    const clienteResult = await clienteModel.cadCliente(cliente);

    return clienteResult[0];
			
}

module.exports.editNomeClinteService = async function(application, cliente) {
        
    const connection = application.config.dbConnection;

    const clienteModel = new application.app.models.clienteDAO(connection);

    const clienteResult = await clienteModel.updateNomeCliente(cliente);

    return clienteResult[0];
}

module.exports.deleteClientesService = async function(application, id_cliente) {
        
    const connection = application.config.dbConnection;

    const clienteModel = new application.app.models.clienteDAO(connection);

    const clienteResult = await clienteModel.deleteCliente(id_cliente);

    return clienteResult[0];
}
