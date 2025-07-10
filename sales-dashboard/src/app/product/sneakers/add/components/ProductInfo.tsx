import ProductForm from "./ProductForm";
import ImageUploader from "./ImageUploader";

export default function ProductInfo() {
  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-start">
      <div className="w-full xl:w-2/3">
        <ProductForm />
      </div>
      <div className="w-full xl:w-1/3">
        <ImageUploader />
        <div className="flex justify-end">
            <button type="submit" className="px-6 mt-4 py-3 bg-[#1A71F6] border-none rounded-[12px] w-[142px] text-[14px] font-bold text-white cursor-pointer">
                Save Product
            </button>
        </div>

      </div>
      
    </div>
  );
}
