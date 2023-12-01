import React from "react";

const Store = ({ postNode, slug }) => {
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <div className="store-container">
      <div
        className="padding-top padding-bottom"
        dangerouslySetInnerHTML={{ __html: postNode.html }}
      />
    </div>
  );
};

export default Store;
