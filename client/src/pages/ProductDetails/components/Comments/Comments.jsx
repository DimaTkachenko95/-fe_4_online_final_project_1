import {Box, TextField} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectorProduct} from "../../../../selectors";
import './Comments.scss';
import { actionFetchAddComment } from "../../../../reducers/productDetails.reducer";
import Button from "../../../../components/Button";

const Comments = () => {
    const dispatch = useDispatch();
    const product = useSelector(selectorProduct);

    const MOC = {
        "_id": "5d90e8fcea6f09306470adb9",
        "customer": {
            "isAdmin": false,
            "enabled": true,
            "_id": "5d63a92afc004f2e041179cd",
            "firstName": "Kiril",
            "lastName": "Kirilov",
            "login": "test12",
            "email": "test3@gmail.com",
            "password": "$2a$10$Tfnzth419TINXXQB8pjiYevZCeKdDZmlL1o43k3guhnmiLgMcUkwG",
            "date": "2019-08-26T09:40:58.667Z",
            "__v": 0
        },
        "product": {
            "enabled": true,
            "imageUrls": ["products/itemNo2"],
            "quantity": 40,
            "_id": "5d73adb9fcad90130470f08f",
            "name": "test product 5",
            "currentPrice": 400,
            "categories": "computers",
            "someOtherFeature": "test5",
            "color": "green",
            "size": "xl",
            "ram": "600",
            "weight": "1800g",
            "itemNo": "563877",
            "__v": 0,
            "date": "2019-10-22T17:05:21.426Z"
        },
        "content": "Very good product. Thank you so much !",
        "__v": 0
    }

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

    const dateString = MOC.customer.date;
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDate = `${day } 0${month} ${year}`;
    return (
        <>
            <Box className="product__comments-wrapper">
                <Box className="product__input-wrapper">
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
                         <Button type="submit" variant="gradient-green" width="120px" color="success" className="product__form-button" text="Send" />
                    </form>
                </Box>

                <Box className="product__comments-content">
                    <h3 className="product__comments-title">Reviews:</h3>

                    <Box className="comments">
                        <Box className="product__comment">
                            <Box className="product__comment-user-wrapper">
                                <p className="product__comment-user">{MOC.customer.firstName} {MOC.customer.lastName}</p>
                                <p className="product__comment-date">{formattedDate}</p>
                            </Box>

                            <Box className="product__comment-text">
                                {MOC.content}
                            </Box>
                        </Box>

                        <Box className="product__comment">
                            <Box className="product__comment-user-wrapper">
                                <p className="product__comment-user">{MOC.customer.firstName} {MOC.customer.lastName}</p>
                                <p className="product__comment-date">{formattedDate}</p>
                            </Box>

                            <Box className="product__comment-text">
                                {MOC.content}
                            </Box>
                        </Box>

                        <Box className="product__comment">
                            <Box className="product__comment-user-wrapper">
                                <p className="product__comment-user">{MOC.customer.firstName} {MOC.customer.lastName}</p>
                                <p className="product__comment-date">{formattedDate}</p>
                            </Box>

                            <Box className="product__comment-text">
                                {MOC.content}
                            </Box>
                        </Box>

                        <Box className="product__comment">
                            <Box className="product__comment-user-wrapper">
                                <p className="product__comment-user">{MOC.customer.firstName} {MOC.customer.lastName}</p>
                                <p className="product__comment-date">{formattedDate}</p>
                            </Box>

                            <Box className="product__comment-text">
                                {MOC.content}
                            </Box>
                        </Box>

                        <Box className="product__comment">
                            <Box className="product__comment-user-wrapper">
                                <p className="product__comment-user">{MOC.customer.firstName} {MOC.customer.lastName}</p>
                                <p className="product__comment-date">{formattedDate}</p>
                            </Box>

                            <Box className="product__comment-text">
                                {MOC.content}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Comments;

