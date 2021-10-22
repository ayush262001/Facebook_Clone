import {useSession } from "next-auth/client"
import {useRef, useState } from "react";
import Image from "next/image";
import {EmojiHappyIcon} from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";
import {db, storage} from '../firebase';
import firebase from 'firebase';

function InputBox() {

    const InputRef = useRef(null);
    const FilePickerRef = useRef(null);
    const [ImageToPost , setImageToPost] = useState(null);

    const [Session] = useSession();
    const sendPost = (e) =>{

        e.preventDefault();

        if(!InputRef.current.value) return;

        db.collection("posts").add({
            message: InputRef.current.value,
            name : Session.user.name,
            email : Session.user.email,
            image : Session.user.image,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        }).then(docs => {
            if(ImageToPost){
                //upload image on firebase firestore
                const uploadTask = storage.ref(`posts/${docs.id}`).putString(ImageToPost, "data_url");

                removeImage();
                uploadTask.on('state_change' , null, error=> console.error(error), () => {
                    //when upload completes
                    storage.ref('posts').child(`${docs.id}`).getDownloadURL().then(url => {
                        db.collection("posts").doc(docs.id).set({
                            postImage : url,
                        },{merge: true});
                    });
                });

            }
        });

        InputRef.current.value="";

    }

    const addToPost = (e) => {
         const reader = new FileReader();
         if(e.target.files[0])
         {
             reader.readAsDataURL(e.target.files[0]);
         }

         reader.onload = (readerEvent) => {
             setImageToPost(readerEvent.target.result);
         }

    }

    const removeImage = () =>{
        setImageToPost(null);
    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                  <Image
                  className="rounded-full"
                  src={Session.user.image}
                  width={40}
                  height={40}
                  layout="fixed"/>
                  <form className="flex flex-1">
                      <input className="rounded-full h-12 bg-gray-100 px-5 focus:outline-none flex-grow" type="text" placeholder={`what's in your mind ${Session.user.name} ?`} ref={InputRef} />
                      <button type="submit" className="hidden" onClick={e =>sendPost(e)}>Submit</button>
                  </form>
                  {ImageToPost && (
                      <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"> <img className="h-11 object-contain" src={ImageToPost} alt=""></img> </div>
                  )}
            </div>
            <div className="flex items-center justify-evenly p-3 border-t">
                <div className="inputIcon cursor-pointer"><VideoCameraIcon className="h-7 text-red-500" /> <p className="text-xs sm:text-sm xl:text-base">Live Video</p></div>
                <div className="inputIcon cursor-pointer" onClick = {() => FilePickerRef.current.click()} ><CameraIcon className="h-7 text-blue-400" /><p className="text-xs sm:text-sm xl:text-base" >Photos/video</p>
                <input ref={FilePickerRef} type="file" onChange={e => addToPost(e)} className="hidden" /></div>
                <div className="inputIcon cursor-pointer"><EmojiHappyIcon className="h-7 text-yellow-500" /><p className="text-xs sm:text-sm xl:text-base" >FeelingActivity</p></div>
                <div></div>
            </div>
        </div>
    )
}

export default InputBox
