import * as vscode from 'vscode';
import * as Commands from './extensionFunctions';
import { Command } from './types';
import { functionBinder, functionGenerator } from './generators';

let commands: Command[] = 
[
	functionGenerator(Commands.tellFileName, "tellFileName"), 
	functionGenerator(Commands.grabSelectedText, "grabSelectedText"),
	functionGenerator(Commands.playSelectedAudio, "playSelectedAudio")
];

export function activate(context: vscode.ExtensionContext) {
	// program startup
	console.log('AudioInCode is now active!');
	vscode.commands.executeCommand("AudioInCode.tellFileName");
	programContext = context;

	// program bindings
	commands.forEach(command => {functionBinder(command);});

	vscode.workspace.onDidOpenTextDocument(() => {Commands.tellFileName();});

}

export function deactivate() {}


export let programContext: vscode.ExtensionContext;