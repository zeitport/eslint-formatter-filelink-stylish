'use strict';

const path = require('path');
const CLIEngine = require('eslint').CLIEngine;
const formatter = require('../index');

test('fromatter uses full filepath with line number', () => {
    // Given
    const cli = new CLIEngine({
        useEslintrc: true,
        reportUnusedDisableDirectives: true,
        cwd:__dirname
    });
    const report = cli.executeOnFiles(['example.js']);

    // When
    const output = formatter(report.results);

    // Then
    const expectedPath = path.join(__dirname, 'example.js');
    const expectedLine = expectedPath + ':1';

    expect(output).toContain(expectedLine);
});


