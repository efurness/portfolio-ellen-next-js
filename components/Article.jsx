
import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        maxWidth: 800,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#33FF3B",
        height: 400
    },
    media: {
        height: 200
    },
});

const Article = ({ article }) => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            {article && (
                <Card className={classes.card} id={article._id}>
                    <CardMedia className={classes.media} component="img" 
                    src={article.multimedia?.[0]?.url ?
                        `https://nytimes.com/${article.multimedia[0].url}` : 
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <CardContent>
                        <Typography color="primary" variant="h6">
                            <a href={article.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                {article.title}</a>
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle2">
                            {article.byline.original}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {article.snippet}
                        </Typography>
                    </CardContent>
                </Card >
            )}
        </div>
    );
};

Article.propTypes = {
    article: PropTypes.object.isRequired,
};

export default Article;