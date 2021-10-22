import {SearchIcon} from '@heroicons/react/outline';
import {DotsHorizontalIcon, VideoCameraIcon} from '@heroicons/react/solid';
import Contact from './Contact';

function Widgets() {

    const contacts =[
        {src:"https://links.papareact.com/f0p", name:"Jeff Bezoz"},
        {src:"https://links.papareact.com/kxk", name:"Elon Musk"},
        {src:"https://links.papareact.com/zvy", name:"Bill Gates"},
        {src:"https://links.papareact.com/snf", name:"Mark Zuckerbarg"},
        {src:"https://links.papareact.com/d0c", name:"Harry Potter"},
        {src:"https://links.papareact.com/6gg", name:"The Queen"},
        {src:"https://links.papareact.com/r57", name:"JamesBond"},
    ]

    return (
        <div className="p-3 hidden lg:flex mt-5 w-60 flex-col">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-gray-500">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map((contact) => (
                <Contact src={contact.src} name={contact.name} />
            ))}

        </div>
    )
}

export default Widgets
