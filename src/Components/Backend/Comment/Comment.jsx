import React from "react";
import useAuth from "../../../Hooks/useAuth";
import CommentList from "./CommentList";
import FormComment from "./FormComment";

const Comment = ({ blog_id, blog_user_id }) => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="comment my-5">
      {user.email && (
        <FormComment
          blog_id={blog_id}
          blog_user_id={blog_user_id}
          type="Submit"
        />
      )}
      <CommentList blog_id={blog_id} blog_user_id={blog_user_id} />
    </div>
  );
};

export default Comment;
