export default function SalesTarget(){
    return(
    <div>
        <div className="bg-white  border border-[#E7E7E7] rounded-[24px] p-4 w-full xl:h-[151px]">
          <h3 className="text-[#454545] font-semibold text-[16px] leading-[130%] mb-4">
            Sales Target
          </h3>

          <div className="flex justify-between mb-4">
            <div>
              <p className="text-[#737373] text-[12px] leading-[140%]">In Progress</p>
              <p className="text-[#454545] font-semibold text-[16px] leading-[130%]">$231,032,444</p>
            </div>

            <div>
              <p className="text-[#737373] text-[12px] leading-[140%]">Sales Target</p>
              <p className="text-[#454545] font-bold text-[16px] leading-[130%]">$500,000,000</p>
            </div>
          </div>

          <div className="relative h-[12px] bg-[#E7E7E7] rounded-full">
            <div className="absolute top-0 left-0 h-full bg-[#1A71F6] rounded-l-full w-[70%]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-[calc(70%-15px)] w-[30px] h-[30px] bg-[#D9D9D9] rounded-full shadow-md"></div>
          </div>
        </div>

    </div>
    );
}