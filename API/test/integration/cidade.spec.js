const request = require("supertest");

const { response } = require("../../config/server");

const app = require('../../config/server');

describe('Teste modulo Cidade', () => {
    
    it('Testando Get cidade', async () => {
        const response = await request(app).get('/cidade');

        expect(response.statusCode).toBe(200);

        expect(response.body).not.toBeUndefined();

        console.log(response.body);

    });

    it('Testando Get cidade por estado', async () => {
        const response = await request(app).get('/cidade/estado/Bahia');

        expect(response.statusCode).toBe(200);

        expect(response.body).not.toBeUndefined();

    });

    it('Testando Get cidade por nome da cidade', async () => {
        const response = await request(app).get('/cidade/Salvador');

        expect(response.statusCode).toBe(200);

        expect(response.body).not.toBeUndefined();

    });

    it('Cadastrando cidade', async () => {
        const response = await request(app).post('/cidade').send({
            nome_cidade : "Cidade de teste",
            estado: "Teste"
        });
        
        expect(response.statusCode).toBe(201);

        expect(response.body).toHaveProperty("result");

    });

    // Testando retorno do Express validator
    it('Testando ValidadorService de cidade', async () => {
        const response = await request(app).post('/cidade').send({
            nome_cidade : "Cidade de teste",
            estado: ""
        });
        
        expect(response.statusCode).toBe(400);

        expect(response.body).toHaveProperty("error");

    });

});