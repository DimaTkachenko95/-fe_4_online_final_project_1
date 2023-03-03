import React from 'react';
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { actionChangeSearchFlag } from "../../../../reducers";
import { useDispatch } from "react-redux";

const NothingFound = () => {
    const dispatch = useDispatch();

    const handleSearchAll = () => {
        dispatch(actionChangeSearchFlag(false));
    }

    return (
        <section className="notification__wrapper">
            <p className="notification__description">Sorry, nothing found</p>
            <div className="notification__description">
                <Box className="search__catalog-button-wrapper">
                    <Link
                        to="/products"
                        className="search__catalog-button"
                        onClick={ handleSearchAll }
                    >
                        Show all products
                    </Link>
                </Box>
            </div>
        </section>
    );
};

export default NothingFound;
