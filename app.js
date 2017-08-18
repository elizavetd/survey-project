const render = require('./lib/render');
const Koa = require('koa');

const serve = require('koa-static');
const router = require('koa-router')();
const path = require('path');

const app = new Koa();

app.use(render);

app.use(serve(path.join(__dirname, '/build')));

router.get('/*', index);
	// .get('/about', index)
	// .get('/users', index)
	// .get('/my-surveys', index)
	// .get('/templates', index)
	// .get('/signin', index)
	// .get('/signup', index)
	// .get('/new-survey', index)
	// .get('/start-survey', index)
	// .get('/finish-survey', index)
	// .get('/survey-settings', index)
	// .get('/answers-collection', index)
	// .get('/survey-results', index)
	// .get('/user-result', index);

app.use(router.routes());

async function index(ctx) {
	await ctx.render('index');
}

const port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('Server running on port', port);
});
