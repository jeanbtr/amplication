import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WhistlistModuleBase } from "./base/whistlist.module.base";
import { WhistlistService } from "./whistlist.service";
import { WhistlistController } from "./whistlist.controller";
import { WhistlistResolver } from "./whistlist.resolver";

@Module({
  imports: [WhistlistModuleBase, forwardRef(() => AuthModule)],
  controllers: [WhistlistController],
  providers: [WhistlistService, WhistlistResolver],
  exports: [WhistlistService],
})
export class WhistlistModule {}
