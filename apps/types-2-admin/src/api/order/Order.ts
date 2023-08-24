import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: bigint | null;
  discount: number | null;
  totalPrice: number | null;
  customer?: Customer | null;
  product?: Product | null;
};
