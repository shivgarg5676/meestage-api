import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CompanyTitle } from "../company/CompanyTitle";
import { SalaryDetailTitle } from "../salaryDetail/SalaryDetailTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="experience" source="experience" />
        <SelectInput
          source="jobType"
          label="Job Type"
          choices={[
            { label: "Full Time", value: "FullTime" },
            { label: "Part Time", value: "PartTime" },
            { label: "Event Specific", value: "EventSpecific" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Redirection URL" source="redirectionUrl" />
        <TextInput label="role" source="role" />
        <ReferenceInput
          source="salaryDetail.id"
          reference="SalaryDetail"
          label="Salary Detail"
        >
          <SelectInput optionText={SalaryDetailTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <TextInput label="Vendor" source="vendor" />
        <TextInput label="Vendor Job Id" source="vendorJobId" />
      </SimpleForm>
    </Edit>
  );
};
