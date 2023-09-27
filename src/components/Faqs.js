const Faqs = () => {
  return (
    <div className="container">
      <h1 className="mt-5">Frequently Asked Questions</h1>
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Question 1: How do I reset my password
              </button>
            </h5>
          </div>
          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare
              enim at nisi aliquet scelerisque. Praesent et ex eget metus
              ultrices maximus in a quam. Ut sit amet risus at ipsum vestibulum
              semper id vitae arcu. Sed auctor a mi sit amet ullamcorper.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Question 2: How do I create an account at your site?
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare
              enim at nisi aliquet scelerisque. Praesent et ex eget metus
              ultrices maximus in a quam. Ut sit amet risus at ipsum vestibulum
              semper id vitae arcu. Sed auctor a mi sit amet ullamcorper.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Question 3: What are your delivery hours?
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare
              enim at nisi aliquet scelerisque. Praesent et ex eget metus
              ultrices maximus in a quam. Ut sit amet risus at ipsum vestibulum
              semper id vitae arcu. Sed auctor a mi sit amet ullamcorper.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingFour">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Question 4: How much time does it take to deliver the order?
              </button>
            </h5>
          </div>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingFour"
            data-parent="#accordion"
          >
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare
              enim at nisi aliquet scelerisque. Praesent et ex eget metus
              ultrices maximus in a quam. Ut sit amet risus at ipsum vestibulum
              semper id vitae arcu. Sed auctor a mi sit amet ullamcorper.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Faqs;