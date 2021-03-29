import { IsString, IsNumber } from "class-validator";
import RequestBase from "../index";

export default class RegisterRequest extends RequestBase {
  @IsString()
  id!: string;

  @IsString()
  pw!: string;

  @IsString()
  name!: string;

  @IsNumber()
  number!: number;
}