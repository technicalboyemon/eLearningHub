import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const FormComment = ({ blog_id, blog_user_id, type, reply, setReply }) => {
  const { realTime, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [commentData, setCommentData] = useState("");
  const [siteUser, setSiteUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/users/account/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSiteUser(data);
      });
  }, []);
  const handleSubmit = async () => {
    setLoading(true);
    if (type === "Submit") {
      fetch("http://localhost:5000/watch/comment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          user: { email: user.email, avatar: siteUser.photo, name: siteUser.name },
          content: commentData,
          blog_id: blog_id,
          email: blog_user_id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      setCommentData("");
      setLoading(false);
    }
    if (type === "Reply") {
      // const res = await postAPI(
      //   "replyComment",
      //   {
      //     user: reply.user,
      //     content: commentData,
      //     blog_id: blog_id,
      //     blog_user_id: blog_user_id,
      //     comment_root: reply,
      //     reply_user: { _id: user._id, avatar: user.avatar, name: user.name },
      //   },
      // );
      setCommentData("");
      setReply(null);
      setLoading(false);
    }
  };

  return (
    <div className="my-2">
      <div className="mb-3">
        <label htmlFor="comment" className="form-label">
          {type === "Reply" ? "Reply" : "Comment"}
        </label>
        <textarea
          disabled={realTime.connected !== true}
          className="form-control"
          id="comment"
          rows={4}
          onChange={(e) => setCommentData(e.target.value)}
          value={commentData}
          placeholder={realTime.connected !== true ? "...Connected..." : ""}
        />
      </div>
      {loading ? (
        <button className="btn btn-sm bg-color rounded-pill px-4">
          Loading
        </button>
      ) : (
        <button
          className="btn btn-sm bg-color rounded-pill px-4"
          onClick={handleSubmit}
        >
          {type}
        </button>
      )}
      {type === "Reply" && (
        <button
          className="btn mx-2 btn-sm bg-color rounded-pill px-4"
          onClick={() => setReply(null)}
        >
          Close
        </button>
      )}
    </div>
  );
};

export default FormComment;
