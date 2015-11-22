var path = require("path");
var ViewEngine = (function () {
    function ViewEngine(app, engine, directory) {
        this.app = app;
        this.engine = engine;
        this.directory = directory;
        this.app.set('view engine', this.engine);
        this.app.set(this.directory, path.join(__dirname, "../", this.directory));
    }
    ViewEngine.prototype.configureEngine = function (obj) { };
    return ViewEngine;
})();
exports.ViewEngine = ViewEngine;
//# sourceMappingURL=ViewEngine.js.map