var argv = require('yargs')
	.command('adduser', 'Greets the user', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Your first name goes here',
				type: 'string'
			},
			lastname: {
				demand: true,
				alias: 'l',
				description: 'Your last name goes here',
				type: 'string'
			},
			city: {
				demand: true,
				alias: 'c',
				description: 'Your City',
				type: 'string'
			},
			state: {
				demand: true,
				alias: 's',
				description: 'Your State',
				type: 'string'
			}
		}).help('help');
	})

	.help('help')
	.argv;
var command = argv._[0];

console.log(argv);

console.log('Hello ' + argv.name + ' ' + argv.lastname + '! from '+argv.city+' city'+' and '+argv.state+' state');
