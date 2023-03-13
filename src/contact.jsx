function Contact() {
    return(
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <input type="email" id="emailInput" placeholder="Email"></input>
            <input type="text" id="textInput" placeholder="Message..."></input>
            <button type="submit" id="submitBtn">Submit</button>
        </div>
    )
}
export default Contact