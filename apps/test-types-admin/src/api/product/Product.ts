import { Decimal } from "decimal.js";
import { Order } from "../order/Order";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  itemPrice: Decimal | null;
  description: string | null;
  orders?: Array<Order>;
};
