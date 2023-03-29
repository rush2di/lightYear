import { IconlyIconName } from "helpers/constants/common";
import Image from "next/image";
import { Iconly } from "react-iconly";
import { v4 as uuidv4 } from "uuid";

import type { ITopProductData, ITopSellingProps } from "./types";

const TopSelling: React.FC<ITopSellingProps> = ({ items }) => {
  return (
    <ul className="divide-y-2 w-full flex flex-col divide-shades-9">
      {items.map((item) => {
        return (
          <li key={uuidv4()}>
            <ProductInfo {...item} />
          </li>
        );
      })}
    </ul>
  );
};

const ProductInfo: React.FC<ITopProductData> = ({
  image,
  name,
  rating,
  price,
}) => {
  return (
    <div className="flex items-center p-4 hover:bg-gray-400/5 transition-all duration-150 ease-out space-x-6 min-w-[415px]">
      <Image src={image as string} width={125} height={125} />
      <div className="flex flex-col space-y-2">
        <span className="text-shades-1 text-md">{name}</span>
        <div className="flex items-center">
          {[...new Array(5)].map((_, i) => {
            return (
              <span key={uuidv4()} className={ i < rating ? "text-ly-yellow-400" : "text-ly-yellow-400/40" } >
                <Iconly set="bold" name={IconlyIconName.STAR} size="small" />
              </span>
            );
          })}
        </div>
        <span className="font-bold text-shades-1">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
      </div>
    </div>
  );
};

export default TopSelling;
