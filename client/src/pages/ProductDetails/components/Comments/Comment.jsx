import {Box} from "@mui/material";

const Comment = ({MOC, formattedDate}) => {


  return(
      <Box className="product__comment">
          <Box className="product__comment-user-wrapper">
              <p className="product__comment-user">{MOC.customer.firstName} {MOC.customer.lastName}</p>
              <p className="product__comment-date">{formattedDate}</p>
          </Box>

          <Box className="product__comment-text">
              {MOC.content}
          </Box>
      </Box>
  )
}

export default Comment;

