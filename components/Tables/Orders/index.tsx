import { v4 as uuidv4 } from "uuid";
import { Iconly } from "react-iconly";

import { IconlyIconName } from "helpers/constants/common";
import { IOrderesProps } from "./types";
import Image from "next/image";

const Orders: React.FC<IOrderesProps> = ({ items }) => {
  return (
    <div className="min-w-[720px]">
      <table className="table-fixed min-w-full">
        <thead className="border-b-2 border-gray-200">
          <tr>
            <th className="text-left text-sm text-shades-7 font-medium py-4 px-5">
              <span className="text-shades-1 mr-3">Tracking no</span>
              <Iconly
                style={{ display: "inline-flex" }}
                name={IconlyIconName.CHEVRONDOWN}
                set="bold"
                size="small"
              />
            </th>
            <th className="text-left text-sm text-shades-7 font-medium py-4 px-5">
              <span className="text-shades-1 mr-3">Product Name</span>
              <Iconly
                style={{ display: "inline-flex" }}
                name={IconlyIconName.CHEVRONDOWN}
                set="bold"
                size="small"
              />
            </th>
            <th className="text-left text-sm text-shades-7 font-medium py-4 px-5">
              <span className="text-shades-1 mr-3">Price</span>
              <Iconly
                style={{ display: "inline-flex" }}
                name={IconlyIconName.CHEVRONDOWN}
                set="bold"
                size="small"
              />
            </th>
            <th className="text-left text-sm text-shades-7 font-medium py-4 px-5">
              <span className="text-shades-1 mr-3">Total Orders</span>
              <Iconly
                style={{ display: "inline-flex" }}
                name={IconlyIconName.CHEVRONDOWN}
                set="bold"
                size="small"
              />
            </th>
            <th className="text-left text-sm text-shades-1 font-medium py-4">
              Total Amount
            </th>
          </tr>
        </thead>
        <tbody className="pt-4">
          {items.map((item) => {
            return (
              <tr key={uuidv4()} className="even:bg-shades-10">
                <td className="text-left text-sm text-shades-1 font-medium py-2 px-5">
                  {item.trackingNo}
                </td>
                <td className="text-left text-sm text-shades-1 font-medium py-2 px-5">
                  <div className="space-x-4 inline-flex items-center">
                    <Image src={item.image as string} width={45} height={45} />
                    <span>{item.name}</span>
                  </div>
                </td>
                <td className="text-left text-sm text-shades-1 font-medium py-2 px-5">
                  {item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </td>
                <td className="text-left text-sm text-shades-1 font-medium py-2 px-5">
                  <span className="py-2 text-center rounded-lg inline-block w-16 bg-ly-teal-100 text-ly-teal-700">
                    {item.orders}
                  </span>
                </td>
                <td className="text-left text-sm text-shades-1 font-medium py-2 px-5">
                  <span className="w-16 inline-block text-right">
                    {(item.price * item.orders).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
