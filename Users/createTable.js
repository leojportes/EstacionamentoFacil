const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'bancoestacionamento'
});

connection.connect((err) => {
    if(err) return console.log(err);
    console.log('>>>>> Conectado <<<<<')
    createTable(connection);
    clienteCreateTable(connection);
    veiculoCreateTable(connection);
});

// USUARIO
function createTable(conn) {
    const sql = `CREATE TABLE IF NOT EXISTS USUARIO(
        id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(45) NOT NULL,
        login VARCHAR(45) NOT NULL,
        senha VARCHAR(45) NOT NULL,
        CONSTRAINT unique_login_usuario UNIQUE(login));`;

    conn.query(sql, (error, results, fields) => {
    if(error) return console.log(error);

    console.log('Tabela usuario criada');
    });

};

// CLIENTES
function clienteCreateTable(conn) {
    const sql = `CREATE TABLE IF NOT EXISTS CLIENTE(
        id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(45) NOT NULL,
        cpf VARCHAR(45) NOT NULL,
        CONSTRAINT unique_cpf_cliente UNIQUE(cpf));`;

    conn.query(sql, (error, results, fields) => {
    if(error) return console.log(error);

    console.log('Tabela cliente criada');
    });

};

// VEICULOS
function veiculoCreateTable(conn) {
    const sql = `CREATE TABLE IF NOT EXISTS VEICULO(
        id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
        placa VARCHAR(45) NOT NULL,
        cor VARCHAR(45) NOT NULL,
        CONSTRAINT unique_placa_veiculo UNIQUE(placa));`;

    conn.query(sql, (error, results, fields) => {
    if(error) return console.log(error);

    console.log('Tabela veículo criada');
    });

};