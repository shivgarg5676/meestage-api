import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { SALARYDETAIL_TITLE_FIELD } from "../salaryDetail/SalaryDetailTitle";

export const JobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="company" source="company.id" reference="Company">
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="experience" source="experience" />
        <TextField label="ID" source="id" />
        <TextField label="Job Type" source="jobType" />
        <TextField label="Redirection URL" source="redirectionUrl" />
        <TextField label="role" source="role" />
        <ReferenceField
          label="Salary Detail"
          source="salarydetail.id"
          reference="SalaryDetail"
        >
          <TextField source={SALARYDETAIL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Vendor" source="vendor" />
        <TextField label="Vendor Job Id" source="vendorJobId" />
      </SimpleShowLayout>
    </Show>
  );
};
