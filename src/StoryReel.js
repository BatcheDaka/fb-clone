import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story 
      image="https://miro.medium.com/max/2000/1*AwnthSYvn8KnfAX4X0LX0w.png"
      profileSrc="https://media-exp1.licdn.com/dms/image/C5103AQFaIpUwNKjiPg/profile-displayphoto-shrink_800_800/0/1516994648402?e=1646870400&v=beta&t=G9dBOxPTxzcJTHuA4mpdhS-1s4DgsBm31tF0gLMevEI"
      title="Batche Daka"
      />
       <Story 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMYIlAjqCYCRG9i3y6pfQkXRwdUMdKifcwyjRQq5SKs8oIyFgxFroE69KI6-wM33cBbE&usqp=CAU"
      profileSrc="https://i.insider.com/6154dfbbb414c100186301fb?width=1136&format=jpeg"
      title="Mark Zuckerberg"
      />
       <Story 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-i71fQnRSG9_YzrMe5Li0SmmTg3BDFkmfkNM72_Qbzw-104jmxpDNCme6qD1pKCJ7_ek&usqp=CAU"
      profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/375px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg"
      title="Jeff Bezos"
      />
       <Story 
      image="https://www.usmagazine.com/wp-content/uploads/2021/07/Spice-Girls-Where-Are-They-Now.jpg?quality=86&strip=all"
      profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Geri_Halliwell_attends_New_Year%27s_Eve_Party.jpg/250px-Geri_Halliwell_attends_New_Year%27s_Eve_Party.jpg"
      title="Geri Halliwell"
      />
       <Story 
      image="https://cdn.hmv.com/r/w-640/hmv/files/3a/3acb01f8-c70b-4c4d-abe4-966d068f49d5.jpg"
      profileSrc="https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg"
      title="Michael Jordan"
      />

    </div>
  )
}

export default StoryReel
