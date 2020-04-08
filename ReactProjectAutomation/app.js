const fs = require('fs');
const path = require('path');
const prompt = require('prompt');
const chalk = require('chalk');
const { spawn , exec } = require('child_process');
const cliProgress = require('cli-progress');
const { indexFileCode, packageFileCode } = require('./filesCode');

const schema = {
	properties: {
		projectname: {
			description:  'Enter the project name \n\n',
			type: 'string',
			required: true,
			color: 'rgb(255,131,0)'
		}
	}
};

const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
 

prompt.start();

const messageTheme = chalk.bold.rgb(255,131,0);

process.stdout.write(messageTheme('Welcome to React Project Automation \n\n'));
process.stdout.write(messageTheme('Please Follow the mentiond steps!!! \n\n' ));


prompt.get( schema, ( err, result) => {

	process.stdout.write(`Entered Project Name is ${result.projectname} \n\n `);

	process.stdout.write(chalk.bold.green('Project Directory Created Successfully \n\n ' ));
	
	process.stdout.write(chalk.bold.blue('Moving inside the directory \n\n '));

	exec(`mkdir ${result.projectname}`, (err, stderr, stdout)=>{
		if(err){
			console.log(err +'\n\n');
			return;
		}
		bar1.start(200, 0);
		bar1.update(200);
		bar1.stop();
		process.stdout.write(chalk.bold.black(`${stdout} \n\n `));
	});

	process.stdout.write(messageTheme('Seting up the project directory for you \n\n '));

	const folderCreatingString = `cd ${result.projectname} && mkdir pages, components, modules, public`
	exec(folderCreatingString, (err, stderr, stdout)=>{
		if(err){
			console.log(chalk.bold.red(err + '\n\n'));
			return;
		}
		bar1.start(200, 0);
		bar1.update(200);
		bar1.stop();
		process.stdout.write(chalk.bold.green(`Project Setup Done \n\n`));
		process.stdout.write(chalk.bold.black(`${stdout} \n\n`));
	});

	process.stdout.write(messageTheme('Creating package.json file \n\n '));

	const packageFilePath = path.join(__dirname + `/${result.projectname}` + '/package.json');

	fs.writeFile(packageFilePath, packageFileCode, (err) => {
		if(err) {
			console.log(chalk.bold.red(err + '\n\n'));
			return;
		};
		process.stdout.write(chalk.bold.green(`package.json file scripts added successfully \n\n`));
	});
	
	const indexFilePath = path.join(__dirname + `/${result.projectname}` + '/pages/index.js');
	// fs.writeFile(indexFilePath, indexFileCode, (err) => {
	// 	if(err) {
	// 		console.log(chalk.bold.red(err + '\n\n'));
	// 		return;
	// 	};
	// 	bar1.start(200, 0);
	// 	bar1.update(200);
	// 	bar1.stop();
	// 	process.stdout.write(chalk.bold.black(`Index.js file code added inside pages folder \n\n`));
	// });
		

	// const child = spawn(`mkdir ${result.projectname} && cd ${result.projectname} && npm install`, [ ], { shell: true });

	// child.stdout.on('data', (data) => {
	// 	bar1.start(200, 0);
	// 	bar1.update(200);
	// 	bar1.stop();
	// 	console.log(`output: ${data} \n`);
	// });
	// child.stderr.on('data', (data) => {
	// 	console.log(`stderr: ${data} \n`)
	// });
	// child.on('exit' , (code, signal) => {
	// 	console.log(`npm init inside project directory is done with code ${code} and signal ${signal} \n`);
	// });
	// child.on('close', (data) => {
	// 	console.log('Close the package installation \n');
	// })

	// process.stdout.write(messageTheme('Installing nextjs, react and react-dom packages inside project directory \n'));

	// child.spawn('yarn add next react react-dom', [ ], { shell: true });
	// child.stdout.on('data', (data) => {
	// 	process.stdout.write(messageTheme('Installing next, react and react-dom in project directory \n'));
	// });
	// child.stderr.on('data', (data) => {
	// 	console.log(`stderr: ${data}`)
	// });
	// child.on('exit' , (code, signal) => {
	// 	console.log('Next, react and react-dom are successfully installed \n');
	// 	console.log(chalk.bold.orange('Please check package.json file of project directory for confirmation \n'));
	// });
});

function errorFunction(err){
	process.stdout.write(chalk.bold.red(err));
	process.stdout.write(chalk.bold.rgb(100,200,200)(`Press 'rs +' to restat the bundle \n`));
};
