import { CompanyCreateNestedManyWithoutAddressesInput } from "./CompanyCreateNestedManyWithoutAddressesInput";
import { InputJsonValue } from "../../types";

export type AddressCreateInput = {
  companies?: CompanyCreateNestedManyWithoutAddressesInput;
  data?: InputJsonValue;
  location?: InputJsonValue;
  name?: string | null;
};
