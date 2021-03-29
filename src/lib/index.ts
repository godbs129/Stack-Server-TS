import { validate, ValidationError } from "class-validator";

export default class RequestBase {

  constructor(data: any) {
    Object.keys(data).forEach((e) => {
      (this as any)[e] = data[e];
    });
  }

  public async validate(): Promise<boolean> {
    const errors: ValidationError[] = await validate(this);

    if (errors.length === 0) {
      return true;
    }

    throw errors;
  }
}