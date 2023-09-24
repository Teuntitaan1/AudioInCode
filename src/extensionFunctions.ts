import * as vscode from "vscode";

// Extension functions
export function tellFileName() {
	let fileName: string = vscode.window.activeTextEditor?.document.fileName !== undefined ? vscode.window.activeTextEditor?.document.fileName : "No file";
	vscode.window.showInformationMessage(fileName);
}
