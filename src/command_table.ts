import { Command } from "./command";

export class CommandTableEntry {
  name: string;
  command: Command;
}

export class CommandTable {
  private name: string;
  private inherit: CommandTable[] = [];
  private commands: CommandTableEntry[] = [];

  constructor (name: string, inherit: CommandTable[]) {
    this.name = name;
    this.inherit = inherit;
  }
}
