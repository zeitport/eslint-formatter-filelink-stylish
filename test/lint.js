'use strict';

const CLIEngine = require('eslint').CLIEngine;
const formatter = require('../index');

const cli = new CLIEngine({
    useEslintrc: true,
    cwd:__dirname
});
const report = cli.executeOnFiles(['example.js']);

console.log(formatter(report.results));
