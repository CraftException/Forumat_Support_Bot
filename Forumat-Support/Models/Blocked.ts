import {Bug} from "./BugReports";
import * as fs from "fs";

export module Blocked {

    var blocked:string[] = []

    export function loadBlocked() {
        var content = JSON.parse(fs.readFileSync("./Content/blocked.json", "utf8"))
        blocked = content.blocked
    }

    export function isBlocked(id: string): boolean {
        return blocked.includes(id)
    }

    export function addBlocked(id: string) {
        blocked.push(id)
        fs.writeFileSync("./Content/blocked.json", JSON.stringify({"blocked": blocked}))
    }

}