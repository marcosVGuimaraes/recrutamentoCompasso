module.exports.getCidadesService = async function(application) {

    const connection = application.config.dbConnection;

    const cidadeModel = new application.app.models.cidadeDAO(connection);

    const cidadeResult = await cidadeModel.FindAll();
    
    return cidadeResult[0];
			
}

module.exports.getCidadesByNomeService = async function(application, nome_cidade) {

    const connection = application.config.dbConnection;

    const cidadeModel = new application.app.models.cidadeDAO(connection);

    const cidadeResult = await cidadeModel.FindByNome(nome_cidade);

    return cidadeResult[0];

}

module.exports.getCidadesByEstadoService = async function(application, estado) {

    const connection = application.config.dbConnection;
	
    const cidadeModel = new application.app.models.cidadeDAO(connection);

    const cidadeResult = await cidadeModel.FindByEstado(estado);

    return cidadeResult[0];

}

module.exports.cadCidadeService = async function(application, cidade) {

    const connection = application.config.dbConnection;
	
    const cidadeModel = new application.app.models.cidadeDAO(connection);

    const cidadeResult = await cidadeModel.cadCidade(cidade);

    return cidadeResult[0];
}