import { Command } from "./types";
import * as vscode from "vscode";
import { programContext } from "./extension";

// generates a function type based on a function
export function functionGenerator(command: () => void, commandName: string): Command {
	return {function : command, name : commandName};
}
// binds a function to the extension
export function functionBinder(command: () => void, commandName: string): void {
	let disposableCommand = vscode.commands.registerCommand(`AudioInCode.${commandName}`, command);
	programContext.subscriptions.push(disposableCommand);
}
