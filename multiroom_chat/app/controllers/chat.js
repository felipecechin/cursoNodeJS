module.exports.iniciaChat = function(application, req, res) {
	var dadosForm = req.body;

	req.assert('apelido','Nome ou apelido é obrigatório').notEmpty();
	req.assert('apelido','Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,15);

	req.getValidationResult().then(function(result) {
		if (result.array() != '') {
    		var errors = result.array();
    		res.render("index", {validacao:errors});
    		return;
		} else {
			res.render('chat');
		}
	});
}