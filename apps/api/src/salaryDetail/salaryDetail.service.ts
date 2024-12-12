import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalaryDetailServiceBase } from "./base/salaryDetail.service.base";

@Injectable()
export class SalaryDetailService extends SalaryDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
