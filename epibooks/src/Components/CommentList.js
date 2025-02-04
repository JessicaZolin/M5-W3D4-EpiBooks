import SingleComment from "./SingleComment";

const CommentList = ({ comments }) => {
    if (comments.length > 0) {
       /*  return (
        <div className="col-12 border mt-4">

        </div>); */
    
    return (
        <div className="col-12 border mt-4">
            {comments.map((comment) => (
                <SingleComment key={comment._id} comment={comment} />
            ))}
        </div>
    )};

}

export default CommentList;