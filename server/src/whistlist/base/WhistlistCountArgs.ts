/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WhistlistWhereInput } from "./WhistlistWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class WhistlistCountArgs {
  @ApiProperty({
    required: false,
    type: () => WhistlistWhereInput,
  })
  @Field(() => WhistlistWhereInput, { nullable: true })
  @Type(() => WhistlistWhereInput)
  where?: WhistlistWhereInput;
}

export { WhistlistCountArgs as WhistlistCountArgs };
