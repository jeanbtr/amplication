/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { WhistlistWhereUniqueInput } from "../../whistlist/base/WhistlistWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WhistlistCreateNestedManyWithoutListingsInput {
  @Field(() => [WhistlistWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WhistlistWhereUniqueInput],
  })
  connect?: Array<WhistlistWhereUniqueInput>;
}

export { WhistlistCreateNestedManyWithoutListingsInput as WhistlistCreateNestedManyWithoutListingsInput };
