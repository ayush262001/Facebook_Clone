import Image from "next/image";

function Contact({src, name}) {
    return (
        <div className="relative">
            <div className="flex space-x-3 mt-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer">
            <Image className="rounded-full" src={src} width={40} height={40} layout="fixed" objectFit="cover" />
            <p>{name}</p>
            </div>
            <div className="bg-green-400 w-3 h-3 rounded-full absolute left-1 bottom-3 animate-bounce" />
        </div>
    )
}

export default Contact
