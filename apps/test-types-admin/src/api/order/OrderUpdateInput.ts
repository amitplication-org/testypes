import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  quantity?: bigint | null;
  discount?: number | null;
  totalPrice?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
