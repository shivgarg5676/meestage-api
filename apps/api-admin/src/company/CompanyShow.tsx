import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "./CompanyTitle";
import { SALARYDETAIL_TITLE_FIELD } from "../salaryDetail/SalaryDetailTitle";

export const CompanyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="detail" source="detail" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Job" target="companyId" label="Jobs">
          <Datagrid rowClick="show">
            <ReferenceField
              label="company"
              source="company.id"
              reference="Company"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
