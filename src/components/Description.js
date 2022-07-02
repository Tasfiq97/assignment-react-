import React from 'react';
import rome from "../images/rome-civitavecchia-italy_1800x1000 1.png"
import hotel from "../images/Hotel-Eden-La-Terrazza-scaled 1.png"

const Description = () => {
    return (
        <div style={{paddingLeft:"130px",marginTop:"140px"}}>
            <div>
                <p style={{textAlign:"left",fontSize:"16px",lineHeight:"25px",fontFamily: 'Lato,sans-serif'}}>Nestled in the heart of Italian Peninsula, Rome is the capital of the country and one of the most populated cities in Italy. From its rich architecture to rare artefacts, this city is known to possess a history like none other. The picturesque atmosphere, the cold wind blowing and the serene atmosphere is what makes Rome a must visit place for all the travel fanatics out there. 
</p>
<div style={{display:"flex"}}>
<div>
<p style={{textAlign:"left" ,fontSize:"16px",lineHeight:"25px" ,fontFamily: 'Lato,sans-serif'}}> 
A perfect blend of gothic ruins, jaw dropping art and lively nights, Rome sets an exemplary example for a place about how it should entertain its travellers. The city wholeheartedly welcomes travellers from a wide array of interests, from awe inspiring monuments to living life at its best, Rome will never fail to surprise you with a new place to explore.

</p>
<p style={{textAlign:"left" ,fontSize:"16px",lineHeight:"25px",fontFamily: 'Lato,sans-serif'}}>A perfect blend of gothic ruins, jaw dropping art and lively nights, Rome sets an exemplary example for a place about how it should entertain its travellers. The city wholeheartedly welcomes travellers from a wide array of interests, from awe inspiring monuments to living life at its best, Rome will never fail to surprise you with a new place to explore.
 </p>
</div>
<div style={{paddingLeft:"30px",paddingRight:"30px"}}>
    <img  src={rome} alt="" />
    <span style={{fontSize:"10px"}}>Rome Civitavecchia |  Image by <span style={{color:"blue",fontStyle:"italic"}}>VIA DEI MONTI PARIOLI</span></span>
</div>
</div>
<p style={{textAlign:"left" ,fontSize:"16px",lineHeight:"25px",fontFamily: 'Lato,sans-serif'}}>The Roman Empire has been an icon when it comes to historical importance. The Roman Empire had cut the ribbons when Augustus Caesar announced to be the first emperor of Rome in 31BC and ended with the fall of Constantinople in 1453CE. Known to be the centre of the Roman Empire, Rome attracts the majority of the crowd due to its rich history and politics.
</p>
            </div>

            <div style={{display:"flex"}}>
                <div style={{paddingRight:"30px",paddingRight:"30px",marginTop:"20px"}}>
                    <img src={hotel} alt="" />
                    <span style={{fontSize:"10px"}}>Image by <span style={{color:"blue",fontStyle:"italic"}}>VIA DEI MONTI PARIOLI</span></span>
                </div>
                <div>
                    <p style={{textAlign:"left" ,fontSize:"16px",lineHeight:"25px",fontFamily: 'Lato,sans-serif',padding:"20px"}}>Referred to as ‘An Eternal City’ in the beginning of the history, Rome is seen to be a dream for music lovers due to the Parco Della Musica which is known to be one of the largest music venues in the world. Not only music, Rome has also set itself in the most wanted places to visit in the world and is the third most visited places in the entire Europe. This place has experienced arts from different periods and became a home for some of the most renowned artists such as Borromini, Bernini, Carracci and Cortona.</p>
                </div>
            </div>
            <p style={{textAlign:"left" ,fontSize:"16px",lineHeight:"25px",fontFamily: 'Lato,sans-serif',marginTop:"40px"}}> Embracing the ancient art, Rome has now decided to use its innovation to give birth to contemporary art to keep enhancing their love for art and architecture, National Museum of the 21st Century Arts is a live example of that. The Italian cuisine has somehow managed to be a king of all cuisines, from the Carciofi alla romana to the Spaghetti alla carbonara- Delicious spaghetti topped with bacon, smokey eggs and pecorino is what makes it mouth watering. 

Rome has a series of reasons to attract you and slip you into its warm arms to rejuvenate your soul with its authentic art, awe-inspiring architecture and mouth-watering food.

            </p>
        </div>
    );
};

export default Description;