import {Bug} from "./BugReports";
import * as fs from "fs";

export module Plugins {

    export var plugins:string[] = []

    export function loadPlugins() {
        var content = JSON.parse(fs.readFileSync("./Content/plugins.json", "utf8"))
        plugins = content.plugins
    }

    export function isPlugin(id: string): boolean {
        return plugins.includes(id)
    }

    export function addPlugin(id: string) {
        plugins.push(id)
        fs.writeFileSync("./Content/plugins.json", JSON.stringify({"plugins": plugins}))
    }

}