import Image from "next/image"

export default function ImageUploader() {


return(

<div className="flex bg-white dark:bg-[#1A1A1B] flex-col p-4 border border-[#E7E7E7] dark:border-[#3D3D3D] rounded-[24px] w-full gap-4">

    <div className="flex flex-col gap-2">
        <h3 className="text-[#454545] font-semibold text-[22px] dark:text-[#F6F6F6]">Image Product</h3>
        <p className="text-[12px] text-[#454545] dark:text-[#F6F6F6] font-normal"><span className="text-[#1A71F6]">Note :</span> Format photos  SVG, PNG, or JPG (Max size 4mb)</p>
    </div>

    <div className="flex-wrap flex gap-4">
        <div className="w-[108px] cursor-pointer flex flex-col gap-2 items-center justify-center h-[112px] rounded-[8px] border-1 border-dashed border-[#1A71F6] bg-[#EEF7FF]">
            <Image src={"image.png"} alt="image" width={32} height={32}/>
            <p className="text-[#737373] text-[12px] font-bold">Photo 1</p>
        </div>

        <div className="w-[108px] cursor-pointer flex flex-col gap-2 items-center justify-center h-[112px] rounded-[8px] border-1 border-dashed border-[#1A71F6] bg-[#EEF7FF]">
            <Image src={"image.png"} alt="image" width={32} height={32}/>
            <p className="text-[#737373] text-[12px] font-bold">Photo 1</p>
        </div>
        <div className="w-[108px] cursor-pointer flex flex-col gap-2 items-center justify-center h-[112px] rounded-[8px] border-1 border-dashed border-[#1A71F6] bg-[#EEF7FF]">
            <Image src={"image.png"} alt="image" width={32} height={32}/>
            <p className="text-[#737373] text-[12px] font-bold">Photo 1</p>
        </div>
            <div className="w-[108px] cursor-pointer flex flex-col gap-2 items-center justify-center h-[112px] rounded-[8px] border-1 border-dashed border-[#1A71F6] bg-[#EEF7FF]">
            <Image src={"image.png"} alt="image" width={32} height={32}/>
            <p className="text-[#737373] text-[12px] font-bold">Photo 1</p>
        </div>
        <div className="w-[108px] cursor-pointer flex flex-col gap-2 items-center justify-center h-[112px] rounded-[8px] border-1 border-dashed border-[#1A71F6] bg-[#EEF7FF]">
            <Image src={"image.png"} alt="image" width={32} height={32}/>
            <p className="text-[#737373] text-[12px] font-bold">Photo 1</p>
        </div>

    </div>

</div>

);


}