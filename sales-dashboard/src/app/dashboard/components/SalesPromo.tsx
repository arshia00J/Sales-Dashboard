import Image from "next/image";

export default function SalesPromoCard() {
  return (
    <div className="relative bg-gradient-to-tr from-[#1A71F6] to-[#5D326CCF] text-white rounded-[20px] p-4 w-full xl:h-[219px]">
      
      <div className="absolute bottom-0 right-0">
        <Image
            src={"corner-decor-b.svg"}
            alt="decor"
            width={100}
            height={260}
        />
      </div>

            <div className="absolute left-0 top-0">
        <Image
            src={"corner-decor-t.svg"}
            alt="decor"
            width={10}
            height={120}
        />
      </div>

      <h2 className="text-[24px] font-semibold mb-2 leading-[130%]">Increase your sales</h2>
      <p className="text-[14px] font-normal leading-[150%] mb-4">
        Discover the Proven Methods to Skyrocket Your Sales! Unleash the Potential of Your Business and Achieve Remarkable Growth. Whether youre a seasoned entrepreneur or just starting out
      </p>

      <button className="bg-white text-[#1A71F6] text-[14px] font-bold px-6 py-3 rounded-[12px] ">
        Learn More
      </button>
    </div>
  );
}
