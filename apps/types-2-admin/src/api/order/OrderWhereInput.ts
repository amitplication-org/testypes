import { StringFilter } from "../../util/StringFilter";
import { BigIntNullableFilter } from "../../util/BigIntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  quantity?: BigIntNullableFilter;
  discount?: FloatNullableFilter;
  totalPrice?: IntNullableFilter;
  customer?: CustomerWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
