import SinglePost from 'src/components/SinglePost';

const SinglePostPage = ({ params }: any) => {
  return <SinglePost postId={params.id} />;
};

export default SinglePostPage;
