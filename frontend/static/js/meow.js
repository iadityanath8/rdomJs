var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import rdom from "./index.js";
import navbar from "./components/new.js";
import { $see, $monitor, record } from "./reactivity.js";
// [SLOW]
var onMount = function (call$back) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, function () {
                call$back();
            }];
    });
}); };
// depth first search for element find for _render tag in here
// [SLOW]
// experimental and slow api is in here
// [SLOW]
// typeless class in here
var RDOM_reaction_fn_table = /** @class */ (function () {
    function RDOM_reaction_fn_table(a, b) {
        this.a = a;
        this.b = b;
    }
    return RDOM_reaction_fn_table;
}());
var render_once_again = function (jsx_value) {
    // TODO   
};
var render_through_str_comp = function (from_vdom, from_adom) {
};
export var Hello = function () {
    var _a = $see(0), a = _a[0], seta = _a[1];
    var _b = $see(10), b = _b[0], setb = _b[1];
    var c;
    $monitor(function () { return c = function () { return a() * b(); }; });
    $monitor(function () { return console.log(a(), "is", b(), c()); });
    // render should be in here in the jsx in here
    return ( // render
    rdom.MakeElement("div", { class: "meow" },
        record(function () { return rdom.MakeElement("p", { class: "name" },
            " Hello from my wowrld in here ",
            a().toString(),
            " "); }),
        rdom.MakeElement("div", { class: "don" },
            record(function () { return rdom.MakeElement("p", { class: "dont" },
                " Hello this is dont class in here ",
                b().toString()); }),
            record(function () { return rdom.MakeElement("p", { class: "normal_class" },
                "This is the value in here ",
                c().toString()); }),
            navbar(a)),
        rdom.MakeElement("button", { onclick: function () { return seta(a() + 1); } }, "click me"),
        rdom.MakeElement("button", { onclick: function () { return setb(b() + 1); } }, "Here to increase")));
};
export default Hello;
