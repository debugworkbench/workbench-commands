export class OutputRecord {
}

export class ConcreteOutputRecord<P> extends OutputRecord {
  type: string;
  payload: P;

  constructor(type: string, payload: P) {
    super();
    this.type = type;
    this.payload = payload;
  }
}
