(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
    typeof define === 'function' && define.amd ? define(['react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Component = factory(global.React));
})(this, (function (React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    //
    const Component = () => {
        const [msg, setMsg] = React__default["default"].useState("Loading ...");
        React__default["default"].useEffect(() => {
            setTimeout(() => {
                setMsg("Hello, Component!");
            }, 2000);
        }, [msg]);
        return React__default["default"].createElement("div", null, msg);
    };

    return Component;

}));
