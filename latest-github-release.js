#! /usr/bin/env node


var rest = require('./lib/get-json');
var parser = require('./lib/parser-json');
var pjson = require('./package.json');
var program = require('commander');


program.version(pjson.version)
	.option('-o, --owner <owner>', 'Owner of repository [Mandatory]')
	.option('-r, --repository <repository>', 'Name of repository [Mandatory]')
	.option('-d, --download <suffix>', 'Suffix of download url. Example: "x64.tar.gz"')
	.option('-t, --tag', 'Show up tag')
	.option('-n, --notes', 'Show up body of release')


program.on('--help', function() {
	console.log('  Examples:');
	console.log('');
	console.log('    $ latest-github-release -o welbert -r github-latest');
	console.log('    $ latest-github-release -o welbert -r github-latest -n');
	console.log('    $ latest-github-release -o welbert -r github-latest -s ".zip"');
	console.log('');
});

program.parse(process.argv);

if(!program.owner && !program.repository){
	console.log("You need to specify an owner and a repository.")
	process.exit();
}

rest.defineOptions({path: '/repos/'+ program.owner + '/' + program.repository +'/releases/latest'})

rest.getJSON((status,response)=>{
  if(status==200){
    parser.defineOptions({
    	project: program.repository,
    	tag: program.tag,
    	download: program.download,
    	notes: program.notes
    });

    var result = parser.parse(response);

    console.log(result + "\n\r"); //WorkAround: On wget url, on end of string contains a char %11, with this code, %11 going to next line

  }else{
    console.log("Fail. Status: " + status + "; Error: " + response.message);
  }
});