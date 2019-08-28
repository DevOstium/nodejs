module.exports = function(app) {
    app.get('/', (request, response) => {
        console.log("console do /pagamento  ---- ppp  ")
        response.send(`${Date.now()}` + '---' + '/pagamento  ---   ');
    });
};