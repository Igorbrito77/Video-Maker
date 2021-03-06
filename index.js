const readline = require("readline-sync")
const robots = {
	text: require('./robots/text.js')
}

async function start(){
	//objeto que guarda todo o conteúdo das pesquisas (termos, sentanças, url das imagens)
	const content = {}
	content.searchTerm = askAndReturnSearchTerm()

	//prefixo que será utilizado ao fazer o upload do vídeo no youtube, a fim de criar um título mais completo
	content.prefix = askAndReturnPrefix()

	await robots.text(content) //Espera o robô acabae de comṕutar os dados

	function askAndReturnSearchTerm(){
		//injeta a string como valor dentro do atributo searchTerm
		return readline.question('Digite um termo para pesquisa na Wikipedia:\n');
	}

	function askAndReturnPrefix(){
		const prefixes = ['Who is', 'What is', 'The history of'];
		const selectedPrefixIndex = readline.keyInSelect(prefixes);
		const selectedPrefixTest = prefixes[selectedPrefixIndex];
		
		return selectedPrefixTest;
	}

//	console.log(content);
}

start()