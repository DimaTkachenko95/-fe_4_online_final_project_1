import {Box} from "@mui/material";

const Comment = ({comment, formattedDate}) => {


  return(
      <Box className="product__comment">
          <Box className="product__comment-user-wrapper">
              <p className="product__comment-user">{comment.customer.firstName} {comment.customer.lastName}</p>
              <p className="product__comment-date">{formattedDate}</p>
          </Box>

          <Box className="product__comment-text">
              {comment.content}
          </Box>
      </Box>
  )
}

export default Comment;

