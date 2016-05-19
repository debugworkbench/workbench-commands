import { OutputRecord } from "./output_record";

/** A command */
export interface Command {
  /** Execute the command. */
  execute(): Promise<OutputRecord>;
}
