import { CompanyUpdateManyWithoutAddressesInput } from "./CompanyUpdateManyWithoutAddressesInput";
import { InputJsonValue } from "../../types";

export type AddressUpdateInput = {
  companies?: CompanyUpdateManyWithoutAddressesInput;
  data?: InputJsonValue;
  location?: InputJsonValue;
  name?: string | null;
};
