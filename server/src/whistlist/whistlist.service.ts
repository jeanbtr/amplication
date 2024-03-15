import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WhistlistServiceBase } from "./base/whistlist.service.base";

@Injectable()
export class WhistlistService extends WhistlistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
