module.exports.getClientes = async function(application, req, res) {

	try{

		const clienteService = application.app.services.clienteService;

		const clienteResult = await clienteService.getClientesService(application);
		
		res.status(200).send(clienteResult);

	} catch(e){

		console.log(e);

		res.status(500).send(e);
	}
			
}

module.exports.getClientesByNome = async function(application, req, res) {
	
	try{

		const nome_cliente = req.body.nome;       

		const clienteService = application.app.services.clienteService;

		const clienteResult = await clienteService.getClientesByNomeService(application, nome_cliente);
			
		res.status(200).send(clienteResult);		

	} catch(e){

		console.log(e);

		res.status(500).send(e);
	}
}

module.exports.getClientesById = async function(application, req, res) {
	
	try {
	
		const id_cliente = req.params.id;

		const clienteService = application.app.services.clienteService;

		const clienteResult = await clienteService.getClientesByIdService(application, id_cliente);
			
		res.status(200).send(clienteResult);

	} catch(e){

		console.log(e);

		res.status(500).send(e);
	}
}

module.exports.cadClinte = async function(application, req, res) {
	
	try{

		const cliente = req.body;

		const validaForm = application.app.services.validaFormService;
            
		const erros = await validaForm.formCadCliente(req);
	
		if(erros){
			
			res.status(400).send({error: erros, cliente: cliente});
			
		} else {		    

			const clienteService = application.app.services.clienteService;

			const clienteResult = await clienteService.cadClinteService(application, cliente);
				
			res.status(201).send({msg:"Cliente cadastrado!", result: clienteResult});

		}
			
	} catch(e){

		console.log(e);

		res.status(500).send(e);
	}		
}

module.exports.editNomeClinte = async function(application, req, res) {

	try{
	
		const cliente = {
			
			id_cliente: req.params.id,
			
			nome: req.body.nome
		};
		
		const validaForm = application.app.services.validaFormService;
		
		const erros = await validaForm.formeditNomeClinte(req);

		if(erros){
			
			res.status(400).send({error: erros, cliente: cliente});
			
			return;
		
		} else {

			const clienteService = application.app.services.clienteService;

			const clienteResult = await clienteService.editNomeClinteService(application, cliente);
				
			res.status(200).send({msg: "Nome do cliente foi alterado!", result : clienteResult});
		}

	} catch(e){

		console.log(e);

		res.status(500).send(e);
	}
}

module.exports.deleteClientes = async function(application, req, res) {

	try{

		const id_cliente = req.params.id;
		
		const clienteService = application.app.services.clienteService;

		const clienteResult = await clienteService.deleteClientesService(application, id_cliente);
			
		res.status(200).send({msg: "Cliente deletado!", result: clienteResult});

	} catch(e){

		console.log(e);

		res.status(500).send(e);
	}
}