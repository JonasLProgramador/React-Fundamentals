import PropTypes from "prop-types";

export const Post = ({author,content}) => {
  return (
    <>
      <strong>Autor : {author}</strong>
      <h1>{content}</h1>
    </>
  );
};

Post.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
