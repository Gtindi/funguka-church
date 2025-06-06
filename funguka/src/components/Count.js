import React, { useEffect, useState } from 'react';

const Counter = ({ targetNumber, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(targetNumber);
    const duration = 2000; // 2 seconds
    const incrementTime = 10; // ms
    const increment = end / (duration / incrementTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, [targetNumber]);

  return (
    <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap">
      <div className="block-18 text-center">
        <div className="text">
          <strong className="number">{count.toLocaleString()}</strong> {/* formatted number */}
        </div>
        <div className="text">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

const Count = () => {
  return (
    <section className="ftco-counter bg-primary" id="section-counter" style={{ padding: "50px 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-5 mb-md-0 text-center text-md-left">
            <h2 className="font-weight-bold" style={{ color: "#fff", fontSize: "22px", textTransform: "uppercase" }}>
              We're on a mission to help all your problems
            </h2>
          </div>
          <div className="col-md-9">
            <div className="row">
              <Counter targetNumber={1005000} title="Members" />
              <Counter targetNumber={65000} title="Pastors" />
              <Counter targetNumber={500000} title="Donations" />
              <Counter targetNumber={50} title="Churches" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;