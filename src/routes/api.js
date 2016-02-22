'use strict';

import * as api from '../controllers/api';

export default (app) => {
	app.route('/api/hello')
		.get(api.hello);
};