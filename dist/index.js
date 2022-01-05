import React from 'react';

//
const Component = () => {
    const [msg, setMsg] = React.useState("Loading ...");
    React.useEffect(() => {
        setTimeout(() => {
            setMsg("Hello, Component!");
        }, 2000);
    }, [msg]);
    return React.createElement("div", null, msg);
};

export { Component as default };
//# sourceMappingURL=index.js.map
