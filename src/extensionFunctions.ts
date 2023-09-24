import * as vscode from "vscode";

// Extension functions

// tells the active file name of the currently opened file
export function tellFileName(): void {
	
    let fileName: string = vscode.window.activeTextEditor?.document.fileName !== undefined ? vscode.window.activeTextEditor?.document.fileName : "No file";
	vscode.window.showInformationMessage(fileName);
}


// grabs the selected text from the active text editor and displays it on screen
export function grabSelectedText(): void {
    
    let selectedText: string;
    if (vscode.window.activeTextEditor?.selection && !(vscode.window.activeTextEditor.selection.isEmpty)) {
        selectedText = vscode.window.activeTextEditor.document.getText(new vscode.Range(vscode.window.activeTextEditor.selection.start, vscode.window.activeTextEditor.selection.end));
        vscode.window.showInformationMessage(`Selected text: ${selectedText}`);
    }
    else {
        vscode.window.showInformationMessage(`No text selected`);
    }

}

export function playSelectedAudio(): void {
    let webview = vscode.window.createWebviewPanel("Audio-In-Code", "AudioInCode", vscode.ViewColumn.Nine);
}