import React from "react";

const TrendsKeyword = () => {
  const [state, setState] = React.useState([
    {
      id: 1,
      country: "Trend in IndianSoftware Industry",
      keyword: "ISPR",
      totalKeywords: "2000k",
    },
    {
      id: 2,
      country: "Trend in webDevelopment",
      keyword: "#webDevelopment",
      totalKeywords: "6000k",
    },
    {
      id: 3,
      country: "Trend in Machinelearning",
      keyword: "#ML",
      totalKeywords: "2560k",
    },
  ]);
  return (
    <div className="keywords">
      <div className="key">
        <div className="keyword__heading">
          <h4>Trends for you</h4>
        </div>
        {state.map((keyword) => (
          <div key={keyword.id}>
            <div className="country">{keyword.country}</div>
            <div className="keyword__name">
              <strong>{keyword.keyword}</strong>
            </div>
            <div className="keyword__tweets">{keyword.totalKeywords}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendsKeyword;
