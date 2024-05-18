import { Company } from "../company/Company";
import { JsonValue } from "type-fest";

export type Address = {
  companies?: Array<Company>;
  createdAt: Date;
  data: JsonValue;
  id: string;
  location: JsonValue;
  name: string | null;
  updatedAt: Date;
};
