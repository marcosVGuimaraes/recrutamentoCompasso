function cidadeDAO(connection){
	this._connection = connection;
}

cidadeDAO.prototype.FindAll = function(callback){
	return this._connection.query("Select * from cidade order by nome_cidade", callback);
}
	
cidadeDAO.prototype.FindByNome = function(nome_cidade, callback){
	return this._connection.query("SELECT * FROM cidade where nome_cidade = '" + nome_cidade +"'", callback);
}

cidadeDAO.prototype.FindByEstado = function(estado, callback){
	return this._connection.query("SELECT * FROM cidade where estado = '" + estado +"'", callback);
}

cidadeDAO.prototype.cadCidade = function(cidade, callback){
	return this._connection.query('insert into cidade set ? ', cidade, callback);;
}

module.exports = function(){
	 return cidadeDAO;
}