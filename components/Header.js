import Image from 'next/image';
import {
    BellIcon,
    ChatIcon,
    HomeIcon,
    ChevronDownIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid';

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import { session, signout, useSession } from 'next-auth/client';

function Header() {
    const [session] = useSession();
    return (
        <div className="flex bg-white sticky top-0 z-50 items-center p-2 lg:px-5 shadow-md">
            {/*left*/}
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" width={40} height={40} layout='fixed' />
                <div className="hidden sm:inline-flex ml-2 items-centre bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input className="hidden md:inline-flex  ml-2 bg-transparent items-centre placeholder-gray-500 outline-none" placeholder="search facebook" type="text" />
                </div>
            </div>

            {/*centre*/}

            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2 ">
                     <HeaderIcon active Icon={HomeIcon} />
                     <HeaderIcon Icon={FlagIcon} />
                     <HeaderIcon Icon={PlayIcon} />
                     <HeaderIcon Icon={ShoppingCartIcon} />
                     <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/*right*/}

            <div className="flex items-center sm:space-x-2 justify-end pr-3">
                {/*profile pic*/}
                   
                   <Image onClick={signout} className="rounded-full" src={session.user.image} height={40} width="40" layout="fixed" />

                <p className="hidden lg:inline-flex whitespace-nowrap font-semibold pr-3">{session.user.name}</p>

                {/* <HeaderIcon Icon={ViewGridIcon} />
                <HeaderIcon Icon={BellIcon} />
                <HeaderIcon Icon={ChatIcon} />
                <HeaderIcon Icon={ChevronDownIcon} /> */}
                <ViewGridIcon className="hidden xl:inline-flex h-10 w-10 px-2 bg-gray-200 rounded-full text-gray-70 cursor-pointer hover:bg-gray-100" />
                <BellIcon className="hidden xl:inline-flex h-10 w-10 px-2 bg-gray-200 rounded-full text-gray-70 cursor-pointer hover:bg-gray-100" />
                <ChatIcon className="hidden xl:inline-flex h-10 w-10 px-2 bg-gray-200 rounded-full text-gray-70 cursor-pointer hover:bg-gray-100" />
                <ChevronDownIcon className="hidden xl:inline-flex h-10 w-10 px-2 bg-gray-200 rounded-full text-gray-70 cursor-pointer hover:bg-gray-100" />
                

            </div>
        </div>
    )
}

export default Header
