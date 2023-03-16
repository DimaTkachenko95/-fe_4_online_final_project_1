import {Box} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import {useDispatch} from "react-redux";

import {useState} from "react";
import {actionFetchUpdateComment} from "../../../../reducers/productDetails.reducer";
const Comment = ({comment, className}) => {


    const dispatch = useDispatch();

    const [isDisabled, setIsDissabled] = useState(true);
    const [commentValue, setCommentValue] = useState(comment.content);

    const updateComment = () => {
        dispatch(actionFetchUpdateComment(commentValue, comment._id));
    }

  return(
      <Box className={`product__comment ${className}`}>
          <Box className="product__comment-user-wrapper">
              <p className="product__comment-user">{comment.customer.firstName} {comment.customer.lastName}</p>
          </Box>

          <Box className="product__comment-actions">
              <EditIcon className="product__comment-action" onClick={() => { setIsDissabled(false)} }/>
              {!isDisabled && <DoneIcon className="product__comment-action" onClick={updateComment}/>}
          </Box>

          <Box className="product__comment-text">
              <input type="text"
                     value={commentValue}
                     onChange={(e) => { setCommentValue(e.target.value)} }
                     className="product__comment-text"
                     disabled={isDisabled} />
          </Box>
      </Box>
  )
}

export default Comment;

