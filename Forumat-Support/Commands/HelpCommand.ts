import {Message} from "discord.js";

export module HelpCommand {

    export function execute(msg: Message) {
        msg.channel.send({
            "embed": {
                "title": "Bot-Help",
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
                        "name": ":exclamation: You found a Bug?",
                        "value": "!bug-report 'Plugin-Name' 'Bug-Description'"
                    },
                    {
                        "name": ":question: You have an idea for an existing Plugin?",
                        "value": "!idea 'Plugin-Name' 'Description'"
                    }
                ]
            }
        })
    }

}