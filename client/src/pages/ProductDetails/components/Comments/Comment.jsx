import {Box} from "@mui/material";

const Comment = ({comment, className}) => {


  return(
      <Box className={`product__comment ${className}`}>
          <Box className="product__comment-user-wrapper">
              <p className="product__comment-user">{comment.customer.firstName} {comment.customer.lastName}</p>
          </Box>

          <Box className="product__comment-text">
              {comment.content}
          </Box>
      </Box>
  )
}

export default Comment;

