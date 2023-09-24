import * as vscode from 'vscode';
import { tellFileName } from './extensionFunctions';
import { Command } from './types';
import { functionBinder, functionGenerator } from './generators';

let commands: [Command] = [functionGenerator(tellFileName, "tellFileName")];

export function activate(context: vscode.ExtensionContext) {
	// program startup
	console.log('AudioInCode is now active!');
	programContext = context;

	// program bindings
	commands.forEach(command => {functionBinder(() => {command.function();}, command.name);});
}

export function deactivate() {}


export let programContext: vscode.ExtensionContext;