import { XCircleIcon } from "@heroicons/react/20/solid"

export const ProductDetail=():JSX.Element => {
  return (
    <aside className="flex flex-col fixed right-0 bg-white border border-black rounded-lg w-p.d h-p.d top-p.d">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg">details</h2>
        <div >
          <XCircleIcon className=" w-7 cursor-pointer text-red-600 "/>
        </div>
      </div>
    </aside>
  )
}
