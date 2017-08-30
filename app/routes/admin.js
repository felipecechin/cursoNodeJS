module.exports = function(application) {
	application.get('/formulario_inclusao_noticia', function(req,res) {
		res.render("admin/form_add_noticia", {validacao : {}, noticia: {}});
	});

	application.post('/noticias/salvar', function(req,res) {
		var noticia = req.body;

		req.assert('titulo','Título é obrigatório').notEmpty();
		req.assert('resumo','Resumo é obrigatório').notEmpty();
		req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
		req.assert('autor','Autor é obrigatório').notEmpty();
		req.assert('data_noticia','Data é obrigatória').notEmpty();
		req.assert('data_noticia','Data deve ser no formato YYYY-MM-DD').isDate({format: 'YYYY-MM-DD'});
		req.assert('noticia','Notícia é obrigatória').notEmpty();

		req.getValidationResult().then(function(result) {
			if (result.array() != '') {
	    		var errors = result.array();
	    		res.render("admin/form_add_noticia", {validacao : errors, noticia : noticia});
    		} else {
    			var connection = application.config.dbConnection();
				var noticiasModel = new application.app.models.NoticiasDAO(connection);

				noticiasModel.salvarNoticia(noticia, function(error, result) {
					res.redirect("/noticias");
				});
    		}
		});
	});
};