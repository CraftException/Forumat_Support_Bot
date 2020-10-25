import {Message} from "discord.js";

import {Blocked} from "./../Models/Blocked";

export module BlockCommand {

    export function execute(msg: Message, args: string[]) {
        if (msg.member.hasPermission('ADMINISTRATOR')) {
            if (msg.mentions.members.size == 1) {
                Blocked.addBlocked(msg.mentions.members.first().id)

                msg.channel.send({
                    "embed": {
                        "title": "❌ User blocked Successfully!",
                        "color": 16570625,
                        "description": "The User can't send Ideas or Bug-Reports any more!",
                        "footer": {
                            "icon_url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256",
                            "text": "Forumat-Support System"
                        }
                    }
                })
                msg.mentions.members.first().send({
                    "embed": {
                        "title": "❌ You hav been blocked!",
                        "color": 13632027,
                        "description": "You can't  can't send Ideas or Bug-Reports any more!",
                        "footer": {
                            "icon_url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256",
                            "text": "Forumat-Support System"
                        }
                    }
                })
            } else {
                msg.channel.send({
                    "embed": {
                        "title": "❌ No User Provided",
                        "color": 13632027,
                        "description": "Please provide a User by mention it",
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

