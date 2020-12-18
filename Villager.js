"use strict";
class Villager {
    constructor(name, birthday, catchPhrase) {
        this.name = name;
        // can either put public, or declare
        this.birthday = new Date(birthday);
        this.catchPhrase = catchPhrase;
        this.pockets = [];
        this.tools = {
            hammer: {
                health: 2,
                type: 'basic',
            },
        };
    }
    sayHello() {
        return `Hello, my name is ${this.name} and I was born on ${this.birthday}. ${this.catchPhrase}!`;
    }
    addToPockets(item) {
        this.pockets.push(item);
    }
    useTool(toolName) {
        if (this.tools[toolName]) {
            const tool = this.tools[toolName];
            tool.health--;
            if (tool.health <= 0) {
                // the tool broke :()
                console.log(`Oh no! That's it for my trusty ${tool.type} ${toolName}`);
                // remove from object
                delete this.tools[toolName];
            }
        }
    }
}
const villager = new Villager("BJ", '09-15-1900', "Hey there!");
villager.useTool('hammer');
