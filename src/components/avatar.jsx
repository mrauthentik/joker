import React from "react"
export default function Avatar(){
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Gonzalez",
        phone: "+234 (0) 8141 6027 33",
        email: "Gonaxalezhon@gmail.com",
        isFavourite: true,
        like: true
    })
    function star(){
        setContact((prevState=>{
            return {
                isFavourite: !prevState.isFavourite
            }
        }))
    }
    function liked(){
        setContact((prevState =>{
            return {
                like: !prevState.like
            }
        }))
    }

     return (
        <main>
           <h1> Hello welcome to my Avatar</h1>
            <article className="card">
                <img src="/images/face-card.jpg" className="avatar-img"/>
                <div className="card-info">
                     <img src={contact.isFavourite ? "/images/star-filled.png" : "/images/star-empty.png"} onClick={star} alt="" className="star" />
                     <img src={contact.like ? "/images/heart-filled.png" : "/images/heart-empty.png"} className="star" onClick={liked} alt="" />
                    <h2 className="card-name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card-contact">TEL: {contact.phone}</p>
                    <p className="card-contact">MAIL:{contact.email}</p>
                </div>
            </article>
        </main>
     )
}