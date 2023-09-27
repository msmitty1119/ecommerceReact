const ContactUs = () => {
  return (
    <div>
      <h1 className="display-3">Contact Us</h1>
      <div className="container col-sm-6">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            aria-describedby="helpId"
            placeholder="Enter your name"
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            name="message"
            id="message"
            rows="3"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}
export default ContactUs;