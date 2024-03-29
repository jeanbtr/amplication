/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Whistlist } from "./Whistlist";
import { WhistlistCountArgs } from "./WhistlistCountArgs";
import { WhistlistFindManyArgs } from "./WhistlistFindManyArgs";
import { WhistlistFindUniqueArgs } from "./WhistlistFindUniqueArgs";
import { CreateWhistlistArgs } from "./CreateWhistlistArgs";
import { UpdateWhistlistArgs } from "./UpdateWhistlistArgs";
import { DeleteWhistlistArgs } from "./DeleteWhistlistArgs";
import { Listing } from "../../listing/base/Listing";
import { User } from "../../user/base/User";
import { WhistlistService } from "../whistlist.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Whistlist)
export class WhistlistResolverBase {
  constructor(
    protected readonly service: WhistlistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Whistlist",
    action: "read",
    possession: "any",
  })
  async _whistlistsMeta(
    @graphql.Args() args: WhistlistCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Whistlist])
  @nestAccessControl.UseRoles({
    resource: "Whistlist",
    action: "read",
    possession: "any",
  })
  async whistlists(
    @graphql.Args() args: WhistlistFindManyArgs
  ): Promise<Whistlist[]> {
    return this.service.whistlists(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Whistlist, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Whistlist",
    action: "read",
    possession: "own",
  })
  async whistlist(
    @graphql.Args() args: WhistlistFindUniqueArgs
  ): Promise<Whistlist | null> {
    const result = await this.service.whistlist(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Whistlist)
  @nestAccessControl.UseRoles({
    resource: "Whistlist",
    action: "create",
    possession: "any",
  })
  async createWhistlist(
    @graphql.Args() args: CreateWhistlistArgs
  ): Promise<Whistlist> {
    return await this.service.createWhistlist({
      ...args,
      data: {
        ...args.data,

        listing: args.data.listing
          ? {
              connect: args.data.listing,
            }
          : undefined,

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Whistlist)
  @nestAccessControl.UseRoles({
    resource: "Whistlist",
    action: "update",
    possession: "any",
  })
  async updateWhistlist(
    @graphql.Args() args: UpdateWhistlistArgs
  ): Promise<Whistlist | null> {
    try {
      return await this.service.updateWhistlist({
        ...args,
        data: {
          ...args.data,

          listing: args.data.listing
            ? {
                connect: args.data.listing,
              }
            : undefined,

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Whistlist)
  @nestAccessControl.UseRoles({
    resource: "Whistlist",
    action: "delete",
    possession: "any",
  })
  async deleteWhistlist(
    @graphql.Args() args: DeleteWhistlistArgs
  ): Promise<Whistlist | null> {
    try {
      return await this.service.deleteWhistlist(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Listing, {
    nullable: true,
    name: "listing",
  })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })
  async getListing(
    @graphql.Parent() parent: Whistlist
  ): Promise<Listing | null> {
    const result = await this.service.getListing(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Whistlist): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
