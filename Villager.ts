interface Tool {
  health: number,
  type: string
}

class Villager {
	birthday: Date; // object , string would be 12-20-20
	catchPhrase: string;
	pockets: any[];
	tools: any;

	constructor(public name: string, birthday: string, catchPhrase: string) {
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

	sayHello(): string {
		return `Hello, my name is ${this.name} and I was born on ${this.birthday}. ${this.catchPhrase}!`;
	}

	addToPockets(item: any) {
		this.pockets.push(item);
	}

	useTool(toolName: string) {
		if (this.tools[toolName]) {
			const tool: Tool = this.tools[toolName];
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

