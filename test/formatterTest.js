'use strict';

const path = require('path');
const CLIEngine = require('eslint').CLIEngine;
const formatter = require('../index');

// Given
const cli = new CLIEngine({
    useEslintrc: true,
    cwd:__dirname
});
const report = cli.executeOnFiles(['example.js']);

// When
const output = formatter(report.results);

// Then
const expectedPath = path.join(__dirname, 'example.js');
const expectedLine = expectedPath + ':1';

if (!output.includes(expectedLine)) {
    console.log(`Expected line "${expectedLine}" not found in output.`);
    console.log(output);

    process.exit(1);
}
