import {Message} from "discord.js";

export module AboutCommand {

    export function execute(msg: Message) {
        msg.channel.send({
            "embed": {
                "title": "About this Bot",
                "description": "Forumat-Support",
                "color": 16570625,
                "footer": {
                    "icon_url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256",
                    "text": "Forumat-Support System"
                },
                "thumbnail": {
                    "url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256"
                },
                "fields": [
                    {
                        "name": "Version",
                        "value": "0.0.1"
                    },
                    {
                        "name": "Developer",
                        "value": "CraftException"
                    }
                ]
            }
        })
    }

}