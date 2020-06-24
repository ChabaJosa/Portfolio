import React, {useState} from 'react'
import emailjs from 'emailjs-com';

export default function ContactMe() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const templateParams = {
        name: message,
        notes: email
    };

    const onChangeParam = (e) => {
        let name = e.target.name
        let value = e.target.value
        console.log(name, value)

        if (value!==""){
            name === "email" ?
            setEmail(value)
            :
            setMessage(value) && console.log(templateParams)
        } else {
            return null
        }
    }


    const sendEmail = (e) => {
        e.preventDefault()
        console.log("Here's templatePArams", templateParams)
        emailjs.send('default_service','Porfoltio', templateParams, 'user_2itNWIum3wEhRCrEl1zDC')
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
               console.log('FAILED...', err);
            });
    }

    // form className="contact-form" onSubmit={sendEmail}>
    //   <input type="hidden" name="contact_number" />
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>

    return (
        <div className="col-8 col-12-small">
                <form method="post" action="#" >
                  <div className="row gtr-uniform gtr-50">
                    <div className="col-12-xsmall">
                      <input
                        type="text"
                        name="user_name"
                        id="name"
                        placeholder="Name"
                        />
                    </div>
                    <div className="col-12-xsmall">
                      <input
                        type="email"
                        name="user_email"
                        id="email"
                        placeholder="Email"
                        onChange={(e) => onChangeParam(e)}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows={4}
                        defaultValue={""}
                        onChange={(e) => onChangeParam(e)}
                      />
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send" onClick={(e) => sendEmail(e)} />
                  </li>
                </ul>
              </div>
    )
}
