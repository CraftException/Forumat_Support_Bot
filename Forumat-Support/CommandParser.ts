import {Message} from "discord.js";

import  {AboutCommand} from "./Commands/AboutCommand";
import {HelpCommand} from "./Commands/HelpCommand";
import {BlockCommand} from "./Commands/BlockCommand";
import {AddPluginCommand} from "./Commands/AddPluginCommand";
import {BugCommand} from "./Commands/BugCommand";
import {IdeaCommand} from "./Commands/IdeaCommand";

export module CommandParser {

    export function parseCommand(content: string, msg: Message) {
        var command = content.split(' ')[0].substr("!".length)
        var args = content.split(' ').slice(1)

        if (command.toLowerCase() === "about") {
            AboutCommand.execute(msg)
        } else if (command.toLowerCase() === "help" || command.toLowerCase() === "bot-help") {
            HelpCommand.execute(msg)
        } else if (command.toLowerCase() === "block") {
            BlockCommand.execute(msg, args)
        } else if (command.toLowerCase() === "addplugin") {
            AddPluginCommand.execute(msg, args)
        } else if (command.toLowerCase() === "bug-report" || command.toLowerCase() === "bug") {
            BugCommand.execute(msg, args)
        } else if (command.toLowerCase() === "idea" || command.toLowerCase() === "vorschlag" || command.toLowerCase() === "addidea" || command.toLowerCase() === "addvorschlag") {
            IdeaCommand.execute(msg, args)
        }
    }

}