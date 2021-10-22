import InputBox from "./InputBox"
import Posts from "./Posts"
import Stories from "./Stories"

function Feed() {

    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-auto overflow-y-auto scrollbar-hide">
            <div>
                {/*Stories*/}
                <Stories />
                {/*Inputbox*/}

                <InputBox />
                {/*posts*/}
                <Posts />
            </div>
        </div>
    )
}

export default Feed
