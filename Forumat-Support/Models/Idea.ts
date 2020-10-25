import * as fs from 'fs';

export class Idea {

    Plugin:string
    Description:string
    Player:string

    MsgID:string

    constructor(plugin:string, description:string, player:string, msgid:string) {
        this.Description = description
        this.Player = player
        this.Plugin = plugin
        this.MsgID = msgid
    }

    toString():string {
        return this.Plugin + ";;;" + this.Description + ";;;" + this.Player + ";;;" +  this.MsgID
    }

}

export module Ideas {

    var ideas:Idea[] = []

    export function loadIdeas() {
        var content = JSON.parse(fs.readFileSync("./Content/idea.json", "utf8"))

        var i
        for (i = 0; i < content.ideas.length; i++) {
            ideas.push(content.ideas[i])
        }
    }

    export function addIdea(idea:Idea) {
        ideas.push(idea)
        fs.writeFileSync("./Content/idea.json", JSON.stringify({"ideas": ideas}))
    }

    export function deleteIdea(idea:Idea) {
        var i
        for (i = 0; i < ideas.length; i++) {
            if (ideas[i].MsgID == idea.MsgID) {
                ideas.splice(i, 1);
            }
        }
        fs.writeFileSync("./Content/idea.json", JSON.stringify({"ideas": ideas}))
    }

    export function ideaByMessageID(msgid:string) {
        var i
        for (i = 0; i < ideas.length; i++) {
            if (ideas[i].MsgID == msgid) {
                return ideas[i]
            }
        }
    }

    export function ideaExists(msgid:string):boolean {
        var i
        for (i = 0; i < ideas.length; i++) {
            if (ideas[i].MsgID == msgid) {
                return true
            }
        }
        return false
    }

}