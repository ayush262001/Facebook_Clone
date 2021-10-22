import Image from "next/image";
import {ChatAltIcon, ShareIcon, ThumbUpIcon} from '@heroicons/react/outline';

function PostShow({key, name, image, postImage, email, timestamp, message}) {
    return (
        <div className="flex flex-col pt-2 bg-white rounded-xl mt-5 shadow-md">
            <div className="p-5">
                <div className="flex items-center mt-6">
                     <img src={image} alt="" width={40} height={40} className="rounded-full" />
                     <div className="flex flex-col px-4 text-gray-400 items-center font-medium">
                         <p className="text-black font-semibold">{name}</p>
                         <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
                     </div>
                </div>
                <p className="text-black-500 pt-4 font-medium">{message}</p>
            </div>
            {postImage && (
                <div className="relative h-72 md:h-96 bg-white mt-6 rounded-xl">
                <Image src={postImage} layout="fill" objectFit="cover" className="rounded-sm "/>
            </div>
            )}

            <div className="flex justify-between bg-white text-gray-500 border-t shadow-md items-center rounded-b-2xl p-2">
                <div className="inputIcon rounded-bl-2xl cursor-pointer"><ThumbUpIcon className="h-4" /><p>Like</p></div>
                <div className="inputIcon cursor-pointer"><ChatAltIcon className="h-4"/><p>Comment</p></div>
                <div className="inputIcon rounded-br-2xl cursor-pointer"><ShareIcon className="h-4"/><p>Share</p></div>
            </div>

        </div>
    );
}

export default PostShow
