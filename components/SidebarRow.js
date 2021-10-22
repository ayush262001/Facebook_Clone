import Image from "next/image"

function SidebarRow({Icon, Src, title}) {
    return (
        <div className="flex items-center space-x-2 hover:bg-gray-200 rounded-xl p-4 cursor-pointer">
            {Src && (
                <Image src={Src} className="rounded-full" width={30} height={30} layout="fixed" />
            )}
            {Icon && (
                <Icon className="w-8 h-8 text-blue-500" />
            )}
            <p className="hidden sm:inline-flex font-medium ml-2">{title}</p>
        </div>
    )
}

export default SidebarRow
