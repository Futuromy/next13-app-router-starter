import { type NextPage } from "next";
import SinglePost from "src/components/SinglePost";

const SinglePostPage: NextPage<{ params: { id: number } }> = (props) => {
  return <SinglePost postId={props.params.id} />;
};

export default SinglePostPage;
