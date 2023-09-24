import * as vscode from 'vscode';


// Extension functions
function helloWorld(context : vscode.ExtensionContext) {
	let fileName: string = vscode.window.activeTextEditor?.document.fileName !== undefined ? vscode.window.activeTextEditor?.document.fileName : "No file";
	vscode.window.showInformationMessage(fileName);
}


export function activate(context: vscode.ExtensionContext) {

	console.log('AudioInCode is now active!');

	let helloWorldCommand = vscode.commands.registerCommand("AudioInCode.helloWorld", (context) => {helloWorld(context);});

	// Pushes all the commands to vscode
	context.subscriptions.push(helloWorldCommand);
}

export function deactivate() {}
