import {MessageReaction, PartialUser, User} from "discord.js";

import * as index from "../index"

import {BugReports} from "../Models/BugReports"
import {Ideas} from "../Models/Idea"

export module ReactListener {

    export function reactEvent(reaction: MessageReaction, user: User | PartialUser) {
        if (!(user.id === index.client.user.id)) {
            if (Ideas.ideaExists(reaction.message.id)) {
                reaction.message.delete()
                const idea = Ideas.ideaByMessageID(reaction.message.id)
                const creator = reaction.message.guild.members.cache.get(idea.Player)
                Ideas.deleteIdea(idea)
                if (reaction.emoji.name === "✅") {
                    creator.send({
                        "embed": {
                            "title": "Your Idea has been accepted!",
                                "thumbnail": {
                                "url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256"
                            },
                            "color": 8311585,
                                "fields": [{
                                "name": "Plugin",
                                "value": idea.Plugin
                            }, {
                                "name": "Description",
                                "value": idea.Description
                            }]
                        }
                    })
                    //@ts-ignore
                    index.client.channels.cache.get(index.infoid).send({
                        "embed": {
                            "title": "An Idea has been accepted!",
                            "thumbnail": {
                                "url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256"
                            },
                            "color": 16636416,
                            "fields": [{
                                "name": "Plugin",
                                "value": idea.Plugin
                            }, {
                                "name": "Description",
                                "value": idea.Description
                            }]
                        }
                    })
                } else {
                    creator.send({
                        "embed": {
                            "title": "Your Idea has been declined!",
                            "thumbnail": {
                                "url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256"
                            },
                            "color": 13632027,
                            "fields": [{
                                "name": "Plugin",
                                "value": idea.Plugin
                            }, {
                                "name": "Description",
                                "value": idea.Description
                            }]
                        }
                    })
                }
            } else if (BugReports.bugExists(reaction.message.id)) {
                reaction.message.delete()
                const bug = BugReports.bugByMessageID(reaction.message.id)
                const creator = reaction.message.guild.members.cache.get(bug.Player)
                BugReports.deleteBug(bug)
                if (reaction.emoji.name === "✅") {
                    creator.send({
                        "embed": {
                            "title": "Your Bug has been accepted!",
                            "thumbnail": {
                                "url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256"
                            },
                            "color": 8311585,
                            "fields": [{
                                "name": "Plugin",
                                "value": bug.Plugin
                            }, {
                                "name": "Description",
                                "value": bug.Description
                            }]
                        }
                    })
                    //@ts-ignore
                    index.client.channels.cache.get(index.infoid).send({
                        "embed": {
                            "title": "A Bug has been accepted!",
                            "thumbnail": {
                                "url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256"
                            },
                            "color": 16636416,
                            "fields": [{
                                "name": "Plugin",
                                "value": bug.Plugin
                            }, {
                                "name": "Description",
                                "value": bug.Description
                            }]
                        }
                    })
                } else {
                    creator.send({
                        "embed": {
                            "title": "Your Bug has been declined!",
                            "thumbnail": {
                                "url": "https://cdn.discordapp.com/app-icons/734487086727430207/7d3a01c96a4642663067a2da03f78d34.png?size=256"
                            },
                            "color": 13632027,
                            "fields": [{
                                "name": "Plugin",
                                "value": bug.Plugin
                            }, {
                                "name": "Description",
                                "value": bug.Description
                            }]
                        }
                    })
                }
            }
        }
    }

}