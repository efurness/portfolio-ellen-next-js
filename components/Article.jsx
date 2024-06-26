import React from "react";
import PropTypes from "prop-types";
import { ZoomIn } from "@material-ui/icons";
import { SlCalender } from "react-icons/sl";

const Article = ({ article, theme }) => {
  const textColor = theme === "dark" ? "text-Snow" : "text-blue-600";
  const bgColor = theme === "dark" ? "bg-DeepNightBlack" : "bg-sky-50";

  return (
    <div
      className={`${bgColor}`}
      style={{
        maxWidth: 800,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        border: "2px solid #66e48d",
        height: 325,
      }}
    >
      <div className="hover:saturate-150">
        <h6>
          <a
            className={`${textColor}`}
            href={article.url}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <img
              src={
                article.multimedia?.[0]?.url
                  ? `${article.multimedia[0].url}`
                  : "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg"
              }
              alt="news-img"
            />
            <span className="p-2 inline-block">{article.title}</span>
          </a>
        </h6>
        {/* <h4>
                    <span>
                           {article.created_date}
                    </span>
                                      <p>
                         {article.snippet}
                        </p>
                  </h4> */}
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
