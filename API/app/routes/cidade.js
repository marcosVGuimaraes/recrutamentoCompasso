module.exports = function(application){ 
  
    application.get('/cidade', function(req, res){		
        application.app.controllers.cidade.getCidades(application, req, res);		
    });

    application.get('/cidade/estado/:estado', function(req, res){		
        application.app.controllers.cidade.getCidadesByEstado(application, req, res);		
    });

    application.get('/cidade/:nome', function(req, res){		
        application.app.controllers.cidade.getCidadesByNome(application, req, res);		
    });

    application.post('/cidade', function(req, res){		
        application.app.controllers.cidade.cadCidade(application, req, res);		
    });


    application.get('/teste', function(req, res){		
        application.app.controllers.cidade.testegetCidades(application, req, res);		
    });
    

};