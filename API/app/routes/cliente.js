module.exports = function(application){ 
  
  application.get('/cliente', function(req, res){		
    application.app.controllers.cliente.getClientes(application, req, res);		
  });

  application.get('/cliente/:id', function(req, res){		
    application.app.controllers.cliente.getClientesById(application, req, res);		
  });

  application.post('/cliente/getByNome', function(req, res){		
    application.app.controllers.cliente.getClientesByNome(application, req, res);		
  });  

  application.post('/cliente', function(req, res){		
    application.app.controllers.cliente.cadClinte(application, req, res);		
  });

  application.put('/cliente/editarNome/:id', function(req, res){		
    application.app.controllers.cliente.editNomeClinte(application, req, res);		
  });

  application.delete('/cliente/:id', function(req, res){		
    application.app.controllers.cliente.deleteClientes(application, req, res);		
  });    
};