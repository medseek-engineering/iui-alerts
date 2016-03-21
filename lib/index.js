var rootDir = __dirname + '/';

module.exports = {
  
  config: function(conf) {
    console.log('Using iui-alerts directive');
    if (conf.client.head.settings &&
        conf.client.head.settings.combine &&
        conf.client.head.addlPathedScripts) {

      conf.client.head.addlPathedScripts.push(rootDir + 'dist/core-module-setup.js');
      conf.client.head.addlPathedScripts.push(rootDir + 'dist/iui-alerts.js');
    } else {
      conf.client.head.scripts.push(conf.client.app.root + '$iui-alerts/dist/core-module-setup.js');
      conf.client.head.scripts.push(conf.client.app.root + '$iui-alerts/dist/iui-alerts.min.js');
    }
  },

  app: function(app, conf) {
    app.get('/\\$iui-alerts/*', function(req, res) {
      res.sendfile(rootDir + req.params[0]);
    });
  }
};