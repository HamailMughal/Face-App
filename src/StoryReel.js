import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
            image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHw%3D&w=1000&q=80"
            ProfileSrc="https://i.pinimg.com/736x/5b/b9/59/5bb95935defd974fa87b44eaa8ed9bcd.jpg"
            title="Abby White"
            />

<Story 
            image="https://images.unsplash.com/photo-1541260894924-7ff059b93d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhhbmRzb21lJTIwYm95fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            ProfileSrc="https://i2.wp.com/ideasfornames.com/wp-content/uploads/2019/08/shutterstock_521885089.jpg?ssl=1"
            title="Murad Khan"
            />

<Story 
            image="https://s7g3.scene7.com/is/image/soloinvest/n00551A?$big_image_web$"
            ProfileSrc="https://s7g3.scene7.com/is/image/soloinvest/n00577A?$big_image_web$"
            title="Asad Imran"
            />

<Story 
            image="https://s7g3.scene7.com/is/image/soloinvest/n02945A?$big_image_web$"
            ProfileSrc="https://nextluxury.com/wp-content/uploads/Top-75-Best-Manly-Hobbies-For-Men-1.jpg"
            title="William Ben"
            />

<Story 
            image="https://post.healthline.com/wp-content/uploads/2020/09/happy_woman_outdoors_clouds-1200x628-facebook.20180427215822123-1200x628.jpg"
            ProfileSrc="https://www.incimages.com/uploaded_files/image/1920x1080/getty_494346582_2000133020009280104_303351.jpg"
            title="Maha Nasir"
            />
        </div>
    )
}

export default StoryReel
