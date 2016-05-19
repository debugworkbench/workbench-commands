import { Command } from "./command";
import { MenuDefinition} from "./menu_definition";

/**
 * Information about a command in a command table.
 */
export class CommandTableEntry {
  /** Name of a command. This is used for command line entry. */
  name: string;
  /** The underlying command that can be executed. */
  command: Command;
}

/**
 * A group of related commands.
 *
 * Command tables are a way of grouping a set of related command
 * objects and providing user interfaces to the commands.
 *
 * Command tables can be interacted with via menus, toolbars,
 * keystrokes, gestures and more.
 */
export class CommandTable {
  /** The name of the command table. */
  private name: string;
  /** Tables inherited by this table. */
  private inherit: CommandTable[] = [];
  /** Commands in this table. */
  private commands: CommandTableEntry[] = [];
  /** Menu description. */
  menuDefinition: MenuDefinition;

  constructor (name: string, inherit: CommandTable[]) {
    this.name = name;
    this.inherit = inherit;
  }
}
