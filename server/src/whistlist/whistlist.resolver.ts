import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WhistlistResolverBase } from "./base/whistlist.resolver.base";
import { Whistlist } from "./base/Whistlist";
import { WhistlistService } from "./whistlist.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Whistlist)
export class WhistlistResolver extends WhistlistResolverBase {
  constructor(
    protected readonly service: WhistlistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
