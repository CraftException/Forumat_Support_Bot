import * as fs from 'fs';

export class Bug {

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

export module BugReports {

    var bugs:Bug[] = []

    export function loadBugs() {
        var content = JSON.parse(fs.readFileSync("./Content/bugs.json", "utf8"))

        var i
        for (i = 0; i < content.bugs.length; i++) {
            var rawbug:any = content.bugs[i]
            bugs.push(content.bugs[i])
        }
    }

    export function addBug(bug:Bug) {
        bugs.push(bug)
        fs.writeFileSync("./Content/bugs.json", JSON.stringify({"bugs": bugs}))
    }

    export function deleteBug(bug:Bug) {
        var i
        for (i = 0; i < bugs.length; i++) {
            if (bugs[i].MsgID == bug.MsgID) {
                bugs.splice(i, 1);
            }
        }
        fs.writeFileSync("./Content/bugs.json", JSON.stringify({"bugs": bugs}))
    }

    export function bugByMessageID(msgid:string) {
        var i
        for (i = 0; i < bugs.length; i++) {
            if (bugs[i].MsgID == msgid) {
                return bugs[i]
            }
        }
    }

    export function bugExists(msgid:string) {
        var i
        for (i = 0; i < bugs.length; i++) {
            if (bugs[i].MsgID == msgid) {
                return true
            }
        }
        return false
    }

}