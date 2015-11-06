var rootDir = __dirname + '/';

module.exports = {
  
  config: function(conf) {
    console.log('Using iui-alerts directive');
    conf.client.head.scripts.push(conf.client.app.root + '$iui-alerts/dist/core-module-setup.js');
    conf.client.head.scripts.push(conf.client.app.root + '$iui-alerts/dist/iui-alerts.min.js');
  },

  app: function(app, conf) {
    app.get('/\\$iui-alerts/*', function(req, res) {
      res.sendfile(rootDir + req.params[0]);
    });
  }
};