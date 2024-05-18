import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { SALARYDETAIL_TITLE_FIELD } from "../salaryDetail/SalaryDetailTitle";

export const JobList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Jobs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
