function HeaderIcon({Icon, active}) {
    return (
        <div className="cursor-pointer px-2 sm:px-5 md:px-7 lg:px-10 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl group">
            <Icon className={`h-5 text-gray-500 sm:h-7 mx-auto group-hover:text-blue-600 ${active && "text-blue-600"}`} />
        </div>
    )
}

export default HeaderIcon
