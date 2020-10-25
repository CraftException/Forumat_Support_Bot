import * as Discord from "discord.js"

import {CommandParser} from "./CommandParser"
import {CustomStatus} from "./Models/CustomStatus";

import {Blocked} from "./Models/Blocked"
import {Plugins} from "./Models/Plugins"
import {BugReports} from "./Models/BugReports"
import {Ideas} from "./Models/Idea"
import {ReactListener} from "./Listener/ReactListener";

export const msgid = "TEAM_CHANNEL_ID"
export const infoid = "PUBLIC_CHANNEL_ID"

export const client = new Discord.Client()

client.on('ready', () => {
    CustomStatus.start(client)

    client.guilds.cache.forEach((guild) => {
        guild.channels.cache.forEach((channel) => {
            if (channel.type === "text") {
                channel.fetch().then((result) => {
                    // @ts-ignore
                    result.messages.fetch()
                })
            }
        })
    })

    Blocked.loadBlocked()
    Plugins.loadPlugins()
    BugReports.loadBugs()
    Ideas.loadIdeas()

    console.log('Logged in as  ' + client.user.tag)
})

client.on('message', (message) => {
    CommandParser.parseCommand(message.content, message)
})

client.on('messageReactionAdd', (reaction, user) => {
    ReactListener.reactEvent(reaction, user)
})

client.login('BOT_TOKEN')
