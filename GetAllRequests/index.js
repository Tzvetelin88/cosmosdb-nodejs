const connectToDb = require('../common/connectToDb')
const forbiddenCharsCheck = require('../common/forbiddenCharsCheck')

module.exports = async function (context, req) {

	forbiddenCharsCheck(req.body);
	
	querySpec = {
		query: `SELECT * FROM c`
	}
	const container = await connectToDb();
	const dbItems = await container.items.query(querySpec).fetchAll();
	context.log('GetAllData function called.');
	context.res = {
		// status: 200, /* Defaults to 200 */
		body: dbItems.resources
	}
};