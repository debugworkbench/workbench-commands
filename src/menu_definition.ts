/**
 * Base class for descriptions of things that go in a menu definition.
 */
export abstract class MenuItem {
}

/**
 * A separator item within a menu.
 */
export class Separator extends MenuItem {
}

/**
 * The definition to be used to generate a menu or
 * toolbar in whatever GUI framework is being used.
 */
export class MenuDefinition {
  items: MenuItem[] = [];
}


