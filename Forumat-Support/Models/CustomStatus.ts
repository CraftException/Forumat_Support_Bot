import {Client} from "discord.js";

export module CustomStatus {

    var content:string[] = ["You found a Bug? '!bug-report'!",
        "You have an idea for an existing Plugin? '!idea'!",
        "Welcome to Forumat's Support Discord!",
        "Type '!help' for Help!"]

    export function start(client: Client) {
        client.user.setActivity("Welcome to Forumat-Support Discord!")
        setInterval(() => {
            client.user.setActivity(content[Math.floor(Math.random() * Math.floor(2))])
        }, 8000)
    }



}