const router = require('express').Router()
	, Chance = require('chance')
	, chance = new Chance();

router.get('/', (_, response) => {
	const empresas = [{
		descricao: 'COCA_COLA',
		codigo: 'GR00000001'
	}, {
		descricao: 'HEINEKEN',
		codigo: 'GR00000002'
	}, {
		descricao: 'P&G',
		codigo: 'GR00000003'
	}];

	response.json(empresas);
});

module.exports = router;
