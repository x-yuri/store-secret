const core = require('@actions/core');
const fs = require('fs');

try {
    const secret = core.getInput('secret');
    const dst = core.getInput('dst');
    fs.writeFile(dst, secret, e => {
        if (e)
            core.setFailed(`Action failed with error ${e}`);
    });
} catch(e) {
    core.setFailed(`Action failed with error ${e}`);
}
