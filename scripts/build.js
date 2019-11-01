const shx = require('shelljs');

shx.rm('-rf', ['lib', 'docs']);
shx.exec('rollup -c');
shx.exec('build-storybook -c .storybook -o docs --quiet --loglevel=error');
