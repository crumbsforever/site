import React from "react";
import AutoLink from "../AutoLink/AutoLink";
import { getTagPath } from "../../utils/helpers";
import config from "../../../data/SiteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostCoverAuthor = ({ coverAuthor, coverAuthorUrl, extraClass = "", iconColor = "#444" }) => {
  const tagLink = (tag) => (
    <AutoLink className="text-uppercase" to={getTagPath(coverAuthor)} label={coverAuthor}>
      Image Author
    </AutoLink>
  );

  return (
    <>
      {coverAuthor && (
        <div className={`post-cover-author-container ${extraClass}`}>
          <b>
            <>
              <FontAwesomeIcon
                  icon={["fas", "camera"]}
                  style={{ color: iconColor, width: "20px" }}
                  title='Cover Author'
              />{" "}
            </>
              <span key={coverAuthor}>
                <a className="text-uppercase" href={coverAuthorUrl}>Image by {coverAuthor}</a>
              </span>
          </b>
        </div>
      )}
    </>
  );
};

export default PostCoverAuthor;
