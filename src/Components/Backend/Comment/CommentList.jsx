import React, { useCallback, useContext, useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import FormComment from "./FormComment";

const CommentList = ({ blog_id, blog_user_id }) => {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [total, seTotal] = useState(0);
  const { user, realTime } = useAuth();
  useEffect(() => {
    console.log(realTime);
    if (!realTime) return;
    realTime.on("createComment", (data) => {
      setComments([data, ...comments]);
    });

    return () => {
      realTime.off("createComment");
    };
  }, [comments, , realTime]);
  useEffect(() => {
    if (!realTime) return;

    realTime.on("replyComment", (data) => {
      const reply = comments.map((item) =>
        item._id === data.comment_root
          ? {
              ...item,
              replyCM: [data, ...item.replyCM],
            }
          : item
      );
      setComments(reply);
    });

    return () => {
      realTime.off("replyComment");
    };
  }, [comments, realTime]);

  const [loading, setLoading] = useState(false);

  const changePage = () => {
    setPage(page + 1);
  };

  const get = useCallback(
    async (page) => {
      setLoading(true);
      // fetch("http://localhost:5000/users")
      // .then((res) => res.json())
      // .then((data) => {
      //   // const res = await getAPI(`comment/${blog_id}?page=${page}&limit=3`);
      //   setComments([...comments, ...res.data.comments]);
      //   seTotal(res.data.total);
      //   setLoading(false);
      //   }
      // );
    },
    [page]
  );
  useEffect(() => {
    get(page);
  }, [get]);

  const [reply, setReply] = useState(null);

  return (
    <>
      {comments?.map((cm) => (
        <div className="card mt-5 rounded" key={cm._id}>
          <div className="d-flex">
            <img
              src={`data:image/jpeg;base64,${cm.user.avatar}`}
              alt="imgComment"
              className="rounded-pill avatar"
            />
            <p className="mx-3 fw-bold">{cm.user.name}</p>
          </div>
          <p className="mx-5 text-muted bg-light p-4 rounded-pill">
            {cm.content}
          </p>
          {user._id && (
            <p onClick={() => setReply(cm)} style={{ cursor: "pointer" }}>
              <u className="color mx-5">Reply</u>
            </p>
          )}

          {/* Reply */}
          {reply?._id === cm._id && (
            <div className="px-5 pb-5">
              <FormComment
                blog_user_id={blog_user_id}
                blog_id={blog_id}
                type="Reply"
                reply={reply}
                setReply={setReply}
              />
            </div>
          )}
          {cm?.replyCM?.map((rp) => (
            <div className="card mx-5 rounded" key={rp._id}>
              <div className="d-flex">
                <img
                  src={`data:image/jpeg;base64,${rp.reply_user?.avatar}`}
                  alt="imgComment"
                  className="rounded-pill avatar"
                />
                <p className="mx-3 fw-bold">{rp.reply_user?.name}</p>
              </div>
              <p className="mx-5 text-muted bg-light p-4 rounded-pill">
                {rp.content}
              </p>
            </div>
          ))}
        </div>
      ))}
      {total > 0 && (
        <>
          {loading ? (
            <p>Loading</p>
          ) : (
            <p
              className="text-center my-3"
              style={{ cursor: "pointer" }}
              onClick={changePage}
            >
              Load More
            </p>
          )}
        </>
      )}
    </>
  );
};

export default CommentList;
