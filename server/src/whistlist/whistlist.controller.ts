import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WhistlistService } from "./whistlist.service";
import { WhistlistControllerBase } from "./base/whistlist.controller.base";

@swagger.ApiTags("whistlists")
@common.Controller("whistlists")
export class WhistlistController extends WhistlistControllerBase {
  constructor(
    protected readonly service: WhistlistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
