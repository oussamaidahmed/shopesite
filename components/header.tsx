import Image from "next/image";
import Bimage from "@/public/images/shopImage.png";
import Logo from "@/public/images/MiniLogo.png";

export const CartHeader = () => {
  return (
    <div className="relative justify-center h-[313px] w-screen   ">
      <Image alt="alt" src={Bimage} fill />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Image alt="logo" src={Logo} width={77} height={77} />
        <h1 className=" font-semibold text-6xl ">Cart</h1>
      </div>
    </div>
  );
};

export const ShopHeader = () => {
  return (
    <div className="relative justify-center h-[313px] w-screen   ">
      <Image alt="alt" src={Bimage} fill />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className=" font-semibold text-6xl">Shop</h1>
      </div>
    </div>
  );
};

export const ContactsHeader = () => {
  return (
    <div className="relative justify-center h-[313px] w-screen   ">
      <Image alt="alt" src={Bimage} fill />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Image alt="logo" src={Logo} width={77} height={77} />
        <p className=" font-semibold text-6xl ">Contact</p>
      </div>
    </div>
  );
};

export const AboutHeader = () => {
  return (
    <div className="relative justify-center h-[313px] w-screen   ">
      <Image alt="alt" src={Bimage} fill />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Image alt="logo" src={Logo} width={77} height={77} />
        <p className=" font-semibold text-6xl ">About</p>
      </div>
    </div>
  );
};
