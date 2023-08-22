import { Decimal } from "decimal.js";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  itemPrice?: Decimal | null;
  description?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
