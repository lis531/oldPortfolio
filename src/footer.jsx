function Footer() {
    let time = new Date().getFullYear();
    return (
        <div className="footer">
            Copyright © {time} | Borys Gajewski | All Rights Reserved
        </div>
    )
}
export default Footer