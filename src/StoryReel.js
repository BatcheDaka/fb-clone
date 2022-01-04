import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story 
      image="https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-6/270042244_2159126900903242_2732278371517095127_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=f3FUtV-0Xv0AX8k8s8l&_nc_ht=scontent.fsof8-1.fna&oh=00_AT-Byv_Cv6BZvIVKtX3Q0gWLlIqppNlOpFKdtq6cCkPaEg&oe=61D8C2C8"
      profileSrc="https://media-exp1.licdn.com/dms/image/C5103AQFaIpUwNKjiPg/profile-displayphoto-shrink_800_800/0/1516994648402?e=1646870400&v=beta&t=G9dBOxPTxzcJTHuA4mpdhS-1s4DgsBm31tF0gLMevEI"
      title="Daka Andreevski"
      />
       <Story 
      image="https://i.insider.com/607fe08b74da0300181e2df6?width=700"
      profileSrc="https://i.insider.com/6154dfbbb414c100186301fb?width=1136&format=jpeg"
      title="Mark Zuckerberg"
      />
       <Story 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-i71fQnRSG9_YzrMe5Li0SmmTg3BDFkmfkNM72_Qbzw-104jmxpDNCme6qD1pKCJ7_ek&usqp=CAU"
      profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/375px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg"
      title="Jeff Bezos"
      />
       <Story 
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Geri_Halliwell_attends_New_Year%27s_Eve_Party_2019.jpg/1200px-Geri_Halliwell_attends_New_Year%27s_Eve_Party_2019.jpg"
      profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Geri_Halliwell_attends_New_Year%27s_Eve_Party.jpg/250px-Geri_Halliwell_attends_New_Year%27s_Eve_Party.jpg"
      title="Geri Halliwell"
      />
       <Story 
      image="https://sportshub.cbsistatic.com/i/r/2020/05/06/7e66d92a-e0a1-47ac-8ff1-1e69d33735b1/thumbnail/1200x675/22d3bf566f25776314ce70c7b64309eb/michael-jordan.jpg"
      profileSrc="https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg"
      title="Michael Jordan"
      />

    </div>
  )
}

export default StoryReel
