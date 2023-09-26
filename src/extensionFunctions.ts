import * as vscode from "vscode";

// Extension functions

// tells the active file name of the currently opened file
export function tellFileName(): void {
	
    console.log("Test");

    let fileName: string = vscode.window.activeTextEditor?.document.fileName !== undefined ? vscode.window.activeTextEditor?.document.fileName : "No file";
	
    let statusBar: vscode.StatusBarItem = vscode.window.createStatusBarItem();
    statusBar.text = fileName;
    statusBar.tooltip = `Current file opened: ${fileName}`;


    statusBar.show();
}

// grabs the selected text from the active text editor and displays it on screen
export function grabSelectedText(): void {
    
    if (vscode.window.activeTextEditor?.selection && !(vscode.window.activeTextEditor.selection.isEmpty)) {
        let selectedText: string = vscode.window.activeTextEditor.document.getText(new vscode.Range(vscode.window.activeTextEditor.selection.start, vscode.window.activeTextEditor.selection.end));
        vscode.window.showInformationMessage(`Selected text: ${selectedText}`);
    }
    else {
        vscode.window.showInformationMessage(`No text selected`);
    }

}

export function playSelectedAudio(): void {
    let webview = vscode.window.createWebviewPanel("Audio-In-Code", "AudioInCode", vscode.ViewColumn.Nine);
}