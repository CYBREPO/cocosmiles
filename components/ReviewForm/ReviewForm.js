import React from "react";
import "./ReviewForm.css";

function ReviewForm() {
  return (
    <div className="formbody">
      <div className="wrapper">
        <h3>Ratings.</h3>
        <form action="#">
          <div className="rating">
            <input type="number" name="rating" hidden />
            <i className="bx bx-star star"></i>
            <i className="bx bx-star star"></i>
            <i className="bx bx-star star"></i>
            <i className="bx bx-star star"></i>
            <i className="bx bx-star star"></i>
          </div>
          <textarea
            name="opinion"
            cols={30}
            rows={5}
            placeholder="Your opinion..."
          ></textarea>
          {/* <div className="btn-group">
            <button type="submit" className="btn submit">
              Submit
            </button>
            <button className="btn cancel">Cancel</button>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
