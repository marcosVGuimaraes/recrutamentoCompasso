function clienteDAO(connection){
	this._connection = connection;
}

clienteDAO.prototype.FindAll = function(){
	return this._connection.query("SELECT c.*, ci.nome_cidade, ci.estado FROM cliente as c INNER JOIN cidade as ci on (c.id_cidade = ci.id_cidade) order by nome");
}

clienteDAO.prototype.FindById = function(id_cliente){
	return this._connection.query("SELECT c.*, ci.nome_cidade, ci.estado FROM cliente as c INNER JOIN cidade as ci on (c.id_cidade = ci.id_cidade) where c.id_cliente = " + id_cliente);
}

clienteDAO.prototype.FindByNome = function(nome_cliente){
	return this._connection.query("SELECT c.*, ci.nome_cidade, ci.estado FROM cliente as c INNER JOIN cidade as ci on (c.id_cidade = ci.id_cidade) where c.nome like '" + nome_cliente +"%'");
}

clienteDAO.prototype.cadCliente = function(cliente){
	return this._connection.query("insert into cliente set ? ", cliente);
}

clienteDAO.prototype.updateNomeCliente = function(cliente){
	return this._connection.query("update cliente set nome ='" + cliente.nome +"'where id_cliente = "+ cliente.id_cliente);;
}

clienteDAO.prototype.deleteCliente = function(id_cliente,){
	return this._connection.query("delete FROM cliente where id_cliente = " + id_cliente);
}

module.exports = function(){
	return clienteDAO;
}