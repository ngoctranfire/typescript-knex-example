var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var viewEngine = require('./ViewEngine');
var hbs = require("express-hbs");
var HBSTemplate = (function (_super) {
    __extends(HBSTemplate, _super);
    function HBSTemplate() {
        _super.apply(this, arguments);
    }
    HBSTemplate.prototype.configureEngine = function (obj) {
        _super.prototype.configureEngine.call(this, obj);
        this.app.engine(this.engine, hbs.express4(obj));
    };
    return HBSTemplate;
})(viewEngine.ViewEngine);
exports.HBSTemplate = HBSTemplate;
//# sourceMappingURL=HandleBarsViewEngine.js.map