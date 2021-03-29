import { IsString } from "class-validator";
import RequestBase from "../index";

export default class RegisterRequest extends RequestBase {
  @IsString()
  id!: string;

  @IsString()
  pw!: string;
}