'use strict';

var api = require('../controllers/api');

export default (app) => {
	app.route('/api/hello')
		.get(api.hello);
};