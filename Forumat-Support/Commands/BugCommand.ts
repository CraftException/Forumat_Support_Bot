import {Message} from "discord.js";

import {Blocked} from "../Models/Blocked";
import {Plugins} from "../Models/Plugins"
import {Bug, BugReports} from "../Models/BugReports"

import * as index from "../index"

export module BugCommand {

    export function execute(msg: Message, args: string[]) {
        if (!(Blocked.isBlocked(msg.author.id))) {
            if (args.length >= 2) {
                if (Plugins.isPlugin(args[0].toLowerCase())) {
                    msg.channel.send({
                        "embed": {
                            "title": "🔧 Bug successfully added",
                            "color": 15913220,
                            "description": "You will be informed shortly if the idea has been accepted! Please allow private messages!",
                            "footer": {
                                "icon_url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256",
                                "text": "Forumat-Support System"
                            }
                        }
                    })

                    const plugin = args[0]
                    var descriptionraw = args
                    descriptionraw.shift()
                    const description = descriptionraw.join(" ")

                    // @ts-ignore
                    index.client.channels.cache.get(index.msgid).send({
                        "embed": {
                            "title": "New Bug!",
                            "color": 15913220,
                            "description": "Please react to this message with 👍 or 👎",
                            "fields": [
                                {
                                    "name": "Plugin",
                                    "value": plugin
                                },
                                {
                                    "name": "Description",
                                    "value": descriptionraw
                                }
                            ]

                        }
                    }).then(infomsg => {
                        infomsg.react('✅')
                        infomsg.react('❌')
                        BugReports.addBug(new Bug(plugin, description, msg.author.id, infomsg.id))
                    })
                } else {
                    console.log(Plugins.plugins.join(' '))
                    msg.channel.send({
                        "embed": {
                            "title": "❌ This Plugin doesn't exists!",
                            "color": 13632027,
                            "fields": [
                                {
                                    "name": "Available Plugins",
                                    "value": Plugins.plugins.join(' ')
                                }
                            ],
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
                        "title": "❌ Wrong syntax!",
                        "color": 13632027,
                        "description": "Please provide a Plugin and a Desciprion ID!",
                        "footer": {
                            "icon_url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256",
                            "text": "Forumat-Support System"
                        }
                    }
                });
            }
        } else {
            msg.channel.send({
                "embed": {
                    "title": "❌ You are blocked!",
                    "color": 13632027,
                    "description": "You can't report any bugs, because you have been blocked by a moderator!",
                    "footer": {
                        "icon_url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256",
                        "text": "Forumat-Support System"
                    }
                }
            })
        }
    }

}