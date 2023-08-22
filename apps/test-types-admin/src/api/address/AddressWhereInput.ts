import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BigIntNullableFilter } from "../../util/BigIntNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";

export type AddressWhereInput = {
  id?: StringFilter;
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  city?: StringNullableFilter;
  state?: StringNullableFilter;
  zip?: BigIntNullableFilter;
  customers?: CustomerListRelationFilter;
};
