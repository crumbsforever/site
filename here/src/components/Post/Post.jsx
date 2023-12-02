import React from "react";
import Comment from "../Comment/Comment";
import PostTags from "./PostTags";
import PostShare from "./PostShare";
import PostDate from "./PostDate";
import PostDivider from "./PostDivider";
import PostCategories from "./PostCategories";
import "./Post.scss";
import "../../../content/styles/code-highlight.scss";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import PostCoverAuthor from "./PostCoverAuthor";

const Post = ({postNode, config, slug}) => {
    const post = postNode.frontmatter;
    if (!post.id) {
        post.id = slug;
    }
    if (!post.category_id) {
        post.category_id = config.postDefaultCategoryID;
    }

    return (
        <div className="post-container">
            <div className="meta-share-wrapper padding-top padding-bottom">
                <PostDate extraClass="meta-wrapper" date={post.date}/>
                <PostShare
                    extraClass="share-wrapper"
                    postPath={slug}
                    postNode={postNode}
                />
            </div>
            {post.coverLg
                ? <GatsbyImage image={getImage(post.coverLg)} className="thumbnail-img" alt=""/>
                : <PostDivider/>
            }
            <div
                className="padding-top padding-bottom"
                dangerouslySetInnerHTML={{__html: postNode.html}}
            />
            <center>
                <a href="https://crumblcookies.com/?ref=CrumbsForever">
                    <button className="btn-primary justify-content-center">
                        Get this Cookie at Crumbl Cookies!
                    </button>
                </a>
            </center>

            <PostDivider/>
            <div className="padding-top padding-bottom">
                <small>
                    <PostCategories
                        categories={post.categories}
                        extraClass="block"
                        iconColor="#555"
                    />
                    <PostTags
                        tags={post.tags}
                        extraClass="block padding-top-half"
                        iconColor="#555"
                    />
                    <PostCoverAuthor
                        coverAuthor={post.coverAuthor}
                        coverAuthorUrl={post.coverAuthorUrl}
                        extraClass="block padding-top-half"
                        iconColor="#555"
                    />
                </small>
            </div>


            {/* <PostDivider /> */}
            {/* <Comment */}
            {/*   postNode={postNode} */}
            {/*   extraClass="padding-top" */}
            {/*   lazyload={config.lazyLoadComments} */}
            {/*   btnLoadComments={config.btnLoadComments} */}
            {/* /> */}
        </div>
    );
};

export default Post;
