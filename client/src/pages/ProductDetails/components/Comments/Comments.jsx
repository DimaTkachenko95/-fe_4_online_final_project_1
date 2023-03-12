import {Box, Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectorProduct, selectorProductComments, selectorToken} from "../../../../selectors";
import './Comments.scss';
import {actionFetchAddComment, actionFetchAllComments} from "../../../../reducers/productDetails.reducer";
import Comment from "./Comment";
import {retry} from "@reduxjs/toolkit/query";
import comment from "./Comment";

const Comments = () => {
    const dispatch = useDispatch();
    const product = useSelector(selectorProduct);
    const token = useSelector(selectorToken);

    const comments = useSelector(selectorProductComments);

    useEffect(() => {
        dispatch(actionFetchAllComments(product.itemNo));
    }, [product]);



    const [review, setReview] = useState('');

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted review:', review);
        const data = {
            product: product.itemNo,
            content: review,
        }
        dispatch(actionFetchAddComment(data));
        setReview('');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit(event);
        }
    }



    return (
        <>
            <Box className="product__comments-wrapper">
                {token && <Box className="product__input-wrapper">
                    <h3 className="product__comments-title">Leave your feedback:</h3>
                    <form onSubmit={handleSubmit} className="product__form">
                        <TextField
                            className="product__review-input"
                            label="Write a review"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={review}
                            onChange={handleReviewChange}
                            required
                            fullWidth
                            color="success"
                            onKeyDown={handleKeyDown}
                        />
                        <Button type="submit" variant="contained" color="success" className="product__form-button">
                            Send
                        </Button>
                    </form>
                </Box>}

                <Box className="product__comments-content">
                    <h3 className="product__comments-title">Reviews:</h3>

                    <Box className="comments">
                        {comments?.map(comment => {
                            console.log(comment)
                            const dateString = comment.customer.date;
                            const date = new Date(dateString);
                            const day = date.getDate();
                            const month = date.getMonth() + 1;
                            const year = date.getFullYear();

                            let formattedDate = `${day} 0${month} ${year}`;

                            return (<Comment MOC={comment} formattedDate={formattedDate}/>)
                        })}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Comments;

