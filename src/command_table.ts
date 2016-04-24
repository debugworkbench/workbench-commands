import { Command } from "./command";

export class CommandTable {
  private name: string;
  private inherit: CommandTable[] = [];
  private commands: Map<string, Command> = new Map();

  constructor (name: string, inherit: CommandTable[]) {
    this.name = name;
    this.inherit = inherit;
  }
}
