const request = require("supertest");

const { response } = require("../../config/server");

//Variavel que guardará o id inserido para os demais testes
var ultimoIdInserido = 0;

const app = require('../../config/server');

describe('Teste modulo Cliente', () => {
    
    it('Testando Get clientes', async () => {
        const response = await request(app).get('/cliente');

        expect(response.statusCode).toBe(200);

        expect(response.body).not.toBeUndefined();

    });

    it('Testando Get Cliente por id', async () => {
        const response = await request(app).get('/cliente/9');

        expect(response.statusCode).toBe(200);

        expect(response.body).not.toBeUndefined();

    });

    it('Testando busca de cliente por Nome', async () => {
        const response = await request(app).post('/cliente/getByNome').send({
            nome : "Marcos"
        });

        expect(response.statusCode).toBe(200);

        expect(response.body).not.toBeUndefined();

    });

    it('Cadastrando cliente', async () => {
        const response = await request(app).post('/cliente').send({
            nome : "Vinicius dos Anjos",
            sexo: "Masculino",
            dt_nascimento: "1998-02-10",
            idade: 22,
            id_cidade: 1
        });
        
        expect(response.statusCode).toBe(201);

        expect(response.body).toHaveProperty("result");

        ultimoIdInserido = response.body.result.insertId;

    });

    // Testando retorno do Express validator
    it('Testando ValidadorService de cliente', async () => {
        const response = await request(app).post('/cliente').send({
            nome : "Vinicius dos Anjos",
            id_cidade: 1
        });
        
        expect(response.statusCode).toBe(400);

        expect(response.body).toHaveProperty("error");

    });

    it('Editando nome do cliente', async () => {

        const url = '/cliente/editarNome/' + ultimoIdInserido;

        const response = await request(app).put(url).send({
            nome : "Vinicius dos Anjos Guimarães"            
        });
        
        expect(response.statusCode).toBe(200);

        expect(response.body).toHaveProperty("result");

    });

    // Testando retorno do Express validator
    it('Testando validador de editar nome do cliente', async () => {

        const url = '/cliente/editarNome/' + ultimoIdInserido;

        const response = await request(app).put(url).send({
            nome : ""            
        });
        
        expect(response.statusCode).toBe(400);

        expect(response.body).toHaveProperty("error");

    });

    it('Deletando cliente', async () => {

        const url = '/cliente/' + ultimoIdInserido;

        const response = await request(app).delete(url);
        
        expect(response.statusCode).toBe(200);

        expect(response.body).toHaveProperty("result");

    });

});