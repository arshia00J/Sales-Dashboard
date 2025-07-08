import Image from "next/image";

interface StatCardProps {
  title: string;
  value: string;
  percentage: string;
  isPositive: boolean;
}

export default function StatCard({
  title,
  value,
  percentage,
  isPositive,
}: StatCardProps) {
  return (
    <div className="bg-white border border-[#E7E7E7] rounded-[20px] p-4 w-full">
      <div className="flex justify-between items-start mb-[45px]">
        <h3 className="text-[#454545] text-[16px] font-semibold leading-[130%]">
          {title}
        </h3>
        <Image
          src="/images/arrow-up-right.png"
          alt="arrow"
          width={24}
          height={24}
          className="flex-shrink-0"
        />
      </div>

      <p className="text-[#1A71F6] text-[24px] font-semibold leading-[130%] mb-1.5">
        {value}
      </p>

      <div className="flex items-center gap-1 text-[12px] font-normal leading-[140%]">
        <span
          className={`flex items-center gap-1 ${
            isPositive ? "text-green-700" : "text-red-600"
          }`}
        >
          <Image
            src={isPositive
            ? "/images/akar-icons_statistic-up.png"
            : "/images/akar-icons_statistic-down.png"}
            alt="chart"
            width={20}
            height={20}
            className="flex-shrink-0"
          />
          {percentage}
        </span>
        <span className="text-[#737373]">From last week</span>
      </div>
    </div>
  );
}
