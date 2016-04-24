import { OutputRecord } from "./output_record";

export interface Command {
  execute(): Promise<OutputRecord>;
}
