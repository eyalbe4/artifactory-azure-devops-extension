const testUtils = require('../../../testUtils');

let inputs = {
    buildName: 'npm Test',
    buildNumber: '1'
};

testUtils.runTask(testUtils.publish, {}, inputs);
