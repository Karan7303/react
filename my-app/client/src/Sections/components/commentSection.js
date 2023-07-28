import Comment from "./comment";

function CommentSection(props) {
  return (
    <>
      {props.props.comments.map(function (comment, i) {
        return <Comment props={comment} />;
      })}
    </>
  );
}
export default CommentSection;
