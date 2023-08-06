import { useState } from "react";
import reviews from "./assets/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = reviews[index];

  const checkIndex = (number) => {
    if (number > reviews.length - 1) return 0;
    if (number < 0) return reviews.length - 1;
    return number;
  };

  const RandomUser = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkIndex(randomIndex));
  };

  const NextPerson = () => {
    setIndex((currIndex) => {
      const nextIndex = currIndex + 1;
      return checkIndex(nextIndex);
    });
  };

  return (
    <main className="main-ctn">
      <article className="reviews-ctn">
        <div className="img-ctn">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <div className="review">
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="btn-container">
            <button
              className="prev-btn"
              onClick={() => {
                setIndex((currIndex) => {
                  const prevIndex = currIndex - 1;
                  return checkIndex(prevIndex);
                });
              }}
            >
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={NextPerson}>
              <FaChevronRight />
            </button>
          </div>
        </div>
        <button type="button" className="btn" onClick={RandomUser}>
          random user
        </button>
      </article>
    </main>
  );
}

export default App;
