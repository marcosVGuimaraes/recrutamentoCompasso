//Validação do formulario de cadastro de cidade
module.exports.formCadCidade =  function(req) {

    req.assert('nome_cidade','Nome da cidade é obrigatorio').notEmpty();
	
    req.assert('estado','Estado é obrigatorio').notEmpty();

    const erros = req.validationErrors();

    return erros;

}

//Validação do formulario de cadastro de cliente
module.exports.formCadCliente =  function(req) {
  
    req.assert('nome','Nome do cliente é obrigatorio').notEmpty();

    req.assert('sexo','Sexo é obrigatorio').notEmpty();

    req.assert('dt_nascimento','Data é obrigatorio').notEmpty();

    req.assert('idade','Idade é obrigatoria').notEmpty();

    req.assert('id_cidade','Cidade é obrigatoria').notEmpty();	

    const erros = req.validationErrors();

    return erros;

}

//Validação do formulario de edição de nome de cliente
module.exports.formeditNomeClinte =  function(req) {
  
    req.assert('nome','Nome do cliente é obrigatorio').notEmpty();

	const erros = req.validationErrors();

    return erros;

}