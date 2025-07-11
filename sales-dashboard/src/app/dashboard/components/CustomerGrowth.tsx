import SmartImage from "@/app/StartImage";

export default function CustomerGrowth() {


return(
    <div className="bg-white dark:bg-[#1A1A1B] border border-[#E7E7E7] dark:border-[#3D3D3D] rounded-[24px] p-4 w-full">

        <div className="flex flex-row justify-between mb-5">
            <h3 className="text-[16px] text-[#454545] dark:text-[#F6F6F6] leading-[130%] font-semibold">Customer Growth 3 Province</h3>
            <div className="flex items-center gap-1 cursor-pointer">
                <p className="text-[12px] text-[#3D3D3D] dark:text-[#F6F6F6] font-semibold leading-[140%]">
                    Show All
                </p>
                <SmartImage
                    src="/images/arrow-up-right.png"
                    alt="arrow"
                    width={24}
                    height={24}
                    className="flex-shrink-0 dark:invert"
                    
                />
            </div>
        </div>

        <div className="flex gap-3">
            <div className="flex flex-row items-center gap-0.5 text-[#737373] dark:text-[#B0B0B0] font-normal leading-[140%]">
                <div className="w-3.5 h-3.5 bg-lime-400 dark:bg-lime-500 rounded-full text-[12px]"></div>
                <p className="">East Java <span className="font-bold text-gray-600 dark:text-gray-300">(50%)</span></p>
            </div>

            <div className="flex flex-row items-center gap-0.5 text-[#737373] dark:text-[#B0B0B0] font-normal leading-[140%]">
                <div className="w-3.5 h-3.5 bg-[#1A71F6] dark:bg-[#FF1F1F] rounded-full text-[12px]"></div>
                <p className="">Kalimantan <span className="font-bold text-gray-600 dark:text-gray-300">(50%)</span></p>
            </div>

            <div className="flex flex-row items-center gap-0.5 text-[#737373] dark:text-[#B0B0B0] font-normal leading-[140%]">
                <div className="w-3.5 h-3.5 bg-[#184190] dark:bg-[#FA4515] rounded-full text-[12px]"></div>
                <p className="">Bali <span className="font-bold text-gray-600 dark:text-gray-300">(50%)</span></p>
            </div>

        </div>

        <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden mt-7">
            <SmartImage
                src="/images/map.png"
                alt="map"
                fill
                className="object-cover"
            />

            <div className="absolute left-[20%] bottom-[12%] translate-x-[-50%] translate-y-[50%] w-4 h-4 bg-lime-400 dark:bg-[#9DD909] rounded-full border-lime-100 dark:border-[#E6FF96] border-2" />

            <div className="absolute left-[37%] top-[35%] translate-x-[-50%] translate-y-[-50%] w-4 h-4 bg-[#1A71F6] dark:bg-[#FF1F1F] rounded-full border-blue-400 dark:border-[#FFEC85] border-2" />

            <div className="absolute left-[35%] bottom-[7%] translate-x-[-50%] translate-y-[50%] w-4 h-4 bg-[#184190] dark:bg-[#FA4515] rounded-full border-blue-100 dark:border-[#FEC6AA] border-2" />
        </div>



        

    </div>
)


}