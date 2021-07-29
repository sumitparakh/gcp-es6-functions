export function hello(req, res) {
    res.send(`Hello ${req.query.name || req.body.name || 'Cloud Functions'} - ES6!!`);
}
