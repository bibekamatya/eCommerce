import Navbar from "../navbar/navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='page-body'>
        <div className='jumbotron jumbotron-fluid pt-5 mt-5'>
          <div className='container pt-5'>
            <h1 className='display-4'>I'm Contact</h1>
            <p className='lead'>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
