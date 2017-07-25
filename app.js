const render = require('./lib/render');
const Koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');
const router = require('koa-router')();
const path = require('path');

const app = new Koa();

app.use(logger());

app.use(render);

app.use(serve(path.join(__dirname, '/public')));

router.get('/', index)
    .get('/about', about)
    .get('/users', users)
    .get('/my-surveys', mySurveys)
    .get('/templates', templates)
    .get('/signin', signin)
    .get('/signup', signup)
    .get('/new-survey', newSurvey)
    .get('/start-survey', startSurvey)
    .get('/finish-survey', finishSurvey)
    .get('/survey-settings', surveySettings)
    .get('/answers-collection', answersCollection)
    .get('/survey-results', surveyResults)
    .get('/user-result', userResult);

app.use(router.routes());

async function index(ctx) {
    await ctx.render('index');
}

async function about(ctx) {
    await ctx.render('about');
}

async function users(ctx) {
    await ctx.render('users');
}

async function mySurveys(ctx) {
    await ctx.render('my-surveys');
}

async function templates(ctx) {
    await ctx.render('templates');
}

async function signin(ctx) {
    await ctx.render('signin');
}

async function signup(ctx) {
    await ctx.render('signup');
}

async function newSurvey(ctx) {
    await ctx.render('new-survey');
}

async function startSurvey(ctx) {
    await ctx.render('start-survey');
}

async function finishSurvey(ctx) {
    await ctx.render('finish-survey');
}

async function surveySettings(ctx) {
    await ctx.render('survey-settings');
}

async function answersCollection(ctx) {
    await ctx.render('answers-collection');
}

async function surveyResults(ctx) {
    await ctx.render('survey-results');
}

async function userResult(ctx) {
    await ctx.render('user-result');
}

const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Server running on port', port);
});
