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

// async function about(ctx) {
//     await ctx.render('about');
// }

// async function users(ctx) {
//     await ctx.render('users');
// }

// async function mySurveys(ctx) {
//     await ctx.render('my-surveys');
// }

// async function templates(ctx) {
//     await ctx.render('templates');
// }

// async function signin(ctx) {
//     await ctx.render('signin');
// }

// async function signup(ctx) {
//     await ctx.render('signup');
// }

// async function newSurvey(ctx) {
//     await ctx.render('new-survey');
// }

// async function startSurvey(ctx) {
//     await ctx.render('start-survey');
// }

// async function finishSurvey(ctx) {
//     await ctx.render('finish-survey');
// }

// async function surveySettings(ctx) {
//     await ctx.render('survey-settings');
// }

// async function answersCollection(ctx) {
//     await ctx.render('answers-collection');
// }

// async function surveyResults(ctx) {
//     await ctx.render('survey-results');
// }

// async function userResult(ctx) {
//     await ctx.render('user-result');
// }

const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Server running on port', port);
});
