import React, { useState } from "react";
import './contact.css'
import { data } from "react-router-dom";

const Contact = () =>{
    const [user, setUser] = useState(
        {
            Name: '', email:'', subject:'', Message:''
        }
    )
    let values, names
    const data = (e) =>{
        values = e.target.value
        names = e.target.name
        setUser({...user, [names]: values})
    }

    const send = async (e) =>{
        const {Name, email, subject, Message} = user
        e.preventDefault()
        const option = {
            method: 'POST',
            headers:{
                'Content-Type':'aplication/json'
            },
            body: JSON.stringify({
                Name, email, subject, Message
            })
        }
        const  send = await fetch('https://react-ecommerce-35e69-default-rtdb.firebaseio.com/Message.json',option)
        if(send){
            alert("Message sent")
        }
        else{
            alert("Error Occoured Message sent failed")
        }

    }

    return (
        <>
        <div className="contact">
            <div className="container">
                <div className="form">
                    <h2>#contact us</h2>
                    <form method="POST">
                            <div className="box">
                            <div className="labal">
                                    <h4>Name</h4>
                                </div>
                                <div className="input">
                                    <input type="text" placeholder="Name" value={user.Name} name="Name" onChange={data} ></input>
                                </div>
                               
                            </div>
                            <div className="box">
                            <div className="labal">
                                    <h4>E-mail</h4>
                                </div>
                                <div className="input">
                                    <input type="text" placeholder="E-mail" value={user.email} name="email" onChange={data} ></input>
                                </div>
                               
                            </div>
                            <div className="box">
                            <div className="labal">
                                    <h4>Subject</h4>
                                </div>
                                <div className="input">
                                    <input type="text" placeholder="Subject" value={user.subject} name="subject" onChange={data} ></input>
                                </div>
                               
                            </div>
                            <div className="box">
                            <div className="labal">
                                    <h4>Message</h4>
                                </div>
                                <div className="input">
                                    <textarea placeholder="Message !" name="Message" value={user.Message} onChange={data}></textarea>
                                </div>
                               
                            </div>
                            <button type="submit" onClick={send}>send</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;