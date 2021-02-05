module.exports.getCidades = async function(application, req, res) {

	try{
	
		const cidadeService = application.app.services.cidadeService;

		const cidadeResult = await cidadeService.getCidadesService(application);     
					
		res.status(200).send(cidadeResult);			

	} catch (e){

		console.log(e);

		res.status(500).send(e);
	
	}

}

module.exports.getCidadesByNome = async function(application, req, res) {

	try{

		const nome_cidade = req.params.nome;

		const cidadeService = application.app.services.cidadeService;

		const cidadeResult = await cidadeService.getCidadesByNomeService(application, nome_cidade);
		
		res.status(200).send(cidadeResult);
			
	} catch (e){

		console.log(e);

		res.status(500).send(e);
	
	}
    		
}

module.exports.getCidadesByEstado = async function(application, req, res) {

	try{

		const estado = req.params.estado;
	
		const cidadeService = application.app.services.cidadeService;

		const cidadeResult = await cidadeService.getCidadesByEstadoService(application, estado);

		res.status(200).send(cidadeResult);

	} catch (e){

		console.log(e);

		res.status(500).send(e);

	}
		
}

module.exports.cadCidade = async function(application, req, res) {

	try{

		const cidade = req.body;
	
		const validaForm = application.app.services.validaFormService;
	
		const erros = await validaForm.formCadCidade(req);
	
		if(erros){
			
			res.status(400).send({error: erros, cidade: cidade});
			
		} else {
			const cidadeService = application.app.services.cidadeService;

			const cidadeResult = await cidadeService.cadCidadeService(application, cidade);
			
			res.status(201).send({msg: "Cidade inserida com sucesso!", result: cidadeResult});

		}
			
	} catch (e){

		console.log(e);

		res.status(500).send(e);
	}
		
}