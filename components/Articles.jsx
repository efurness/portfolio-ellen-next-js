
import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Article from './Article.jsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
});

export default function Articles({ loading, articles }) {
    const classes = useStyles();

    return (
        <>
            {
                loading ? (
                    "Loading..."
                ) : (
                        <div className={classes.root} >
                            <Grid container spacing={3}>
                                {articles.map((article) => (
                                    <Grid item xs={12} sm={4} key={article._id}>
                                        <Article article={article} />
                                    </Grid>
                                ))}
                            </Grid>
                        </div>)}
        </>
    );
}

Articles.propTypes = {
    loading: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired,
};