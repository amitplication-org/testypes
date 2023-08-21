import { Decimal } from "decimal.js";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  itemPrice?: Decimal | null;
  description?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
