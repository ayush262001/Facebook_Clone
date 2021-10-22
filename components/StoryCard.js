import Image from "next/image";

function StoryCard({name, src, profile}) {
    return (
        <div className="relative h-12 w-12 sm:h-20 sm:w-20 md:h-72 md:w-52 lg:h-80 lg:w-64 cursor-pointer p-3 overflow-x md-rounded-3xl">
             <Image 
              className="absolute opacity-0 md:opacity-100 z-40 rounded-full top-10"
              width={50}
              height={50}
              layout="fixed"
              objectFit="cover"
              src={src}
             />
             <Image 
             className="object-cover filter brightness-75 hover:opacity-80 transition duration-110  transform hover:scale-105  rounded-full md:rounded-3xl"
             src={src}
             layout="fill"
             />
             <p className="absolute opacity-0 md:opacity-100 z-50 bottom-3 text-white font-semibold mx-auto ">{name}</p>
        </div>
    )
}

export default StoryCard
