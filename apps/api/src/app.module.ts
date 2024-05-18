import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { JobModule } from "./job/job.module";
import { AddressModule } from "./address/address.module";
import { TagModule } from "./tag/tag.module";
import { CompanyModule } from "./company/company.module";
import { SalaryDetailModule } from "./salaryDetail/salaryDetail.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    JobModule,
    AddressModule,
    TagModule,
    CompanyModule,
    SalaryDetailModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
