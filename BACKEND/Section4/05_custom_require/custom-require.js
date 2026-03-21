
const loadModule = (filePath) => {
    const fs = require('fs');

    const content = fs.readFileSync(filePath).toString();

    return (function (module) {
        eval(content);
        return module;
    })({});
}