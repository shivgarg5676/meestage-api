import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { JobTitle } from "../job/JobTitle";

export const SalaryDetailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Amount" source="amount" />
        <SelectInput
          source="currency"
          label="Currency"
          choices={[
            { label: "USD", value: "Usd" },
            { label: "INR", value: "Inr" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="duration"
          label="Duration"
          choices={[
            { label: "Yearly", value: "Yearly" },
            { label: "Monthly", value: "Monthly" },
            { label: "TOTAL VALUE", value: "TotalValue" },
            { label: "PER EVENT", value: "PerEvent" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="jobs"
          reference="Job"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
