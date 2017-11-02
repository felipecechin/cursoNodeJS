module.exports = function(application){
    application.get('/cadastro', function(req, res){
        application.app.controllers.cadastro.cadastro(application,req,res);
        //application(A aplicação em si).app(diretório).controllers(diretório).cadastro(nome do arquivo).cadastro(nome da função)(parametros);
    });

    application.post('/cadastrar', function(req, res){
        application.app.controllers.cadastro.cadastrar(application,req,res);
        //application(A aplicação em si).app(diretório).controllers(diretório).cadastro(nome do arquivo).cadastrar(nome da função)(parametros);
    });
}