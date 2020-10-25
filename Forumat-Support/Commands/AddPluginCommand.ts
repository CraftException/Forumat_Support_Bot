import {Message} from "discord.js";

import {Plugins} from "../Models/Plugins";

export module AddPluginCommand {

    export function execute(msg: Message, args: string[]) {
        if (msg.member.hasPermission('ADMINISTRATOR')) {
            if (args.length == 1) {
                Plugins.addPlugin(args[0].toLowerCase())

                msg.channel.send({
                    "embed": {
                        "title": "🔰 Plugin added Successfully!",
                        "color": 16570625,
                        "description": "Now, everybody can use this Plugin for ideas or Bug-Reports!",
                        "footer": {
                            "icon_url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256",
                            "text": "Forumat-Support System"
                        }
                    }
                })
            } else {
                msg.channel.send({
                    "embed": {
                        "title": "❌ No Plugin Provided",
                        "color": 13632027,
                        "description": "Please provide a Plugin!",
                        "footer": {
                            "icon_url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256",
                            "text": "Forumat-Support System"
                        }
                    }
                })
            }
        } else {
            msg.channel.send({
                "embed": {
                    "title": "❌ No Permissions",
                    "color": 13632027,
                    "description": "You do not have Permissions to do that!",
                    "footer": {
                        "icon_url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256",
                        "text": "Forumat-Support System"
                    }
                }
            })
        }
    }

}

