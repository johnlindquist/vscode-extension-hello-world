import { commands, ExtensionContext, window } from "vscode"

export function activate(context: ExtensionContext) {
    let helloWorld = async () => {
        let editor = window.activeTextEditor

        if (!editor) return

        editor.edit(editBuilder => {
            let position = editor?.selection.active

            if (!position) return
            editBuilder.insert(position, "hello world")
        })
    }


    context.subscriptions.push(
        commands.registerCommand(
            "johnlindquist.helloWorld",
            helloWorld
        )
    )
}