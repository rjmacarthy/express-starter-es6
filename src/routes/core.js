'use strict';

var core = require('../controllers/core');

export default (app) => {
	app.route('/').get(core.index);
};