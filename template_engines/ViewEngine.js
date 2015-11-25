var path = require("path");
var ViewEngine = (function () {
    function ViewEngine(app, engine, directory) {
        this.app = app;
        this.engine = engine;
        this.directory = directory;
        //Set Engine
        this.app.set('view engine', this.engine);
        //Need to make sure we go back one directory and then join it.
        this.app.set(this.directory, path.join(__dirname, "../", this.directory));
    }
    ViewEngine.prototype.configureEngine = function (obj) { };
    return ViewEngine;
})();
exports.ViewEngine = ViewEngine;
//# sourceMappingURL=ViewEngine.js.map