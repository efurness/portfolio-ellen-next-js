
import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => {
    return (<div
    style={{
        maxWidth: 800,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        border: "2px solid #66e48d",
        backgroundColor: "#ffffff",
        height: 300
    }}>
        <img src={article.multimedia?.[0]?.url ?
                      `${article.multimedia[0].url}` : 
                    'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                 } alt="news-img" />

                  <div>
                     <h6>
                        
                        <a href={article.url} target="_blank" rel="noreferrer" style={{ 
                            textDecoration: 'none',
                            color: "#3f77b7" }}>
                          {article.title}</a>
                 </h6>
                    <span>
                           {article.byline.original}
                    </span>
                                      <p>
                         {article.snippet}
                        </p>
                  
             </div>

    </div>)
};

// const Article = ({ article }) => {
//     const classes = useStyles();
//     return (
//         <div className={classes.root} >
//             {article && (
//                 <Card className={classes.card} id={article._id}>
//                     <CardMedia className={classes.media} component="img" 
//                     src={article.multimedia?.[0]?.url ?
//                         `${article.multimedia[0].url}` : 
//                         'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
//                     } alt="news-img" />
//                     <CardContent>
//                         <Typography color="primary" variant="h6">
//                             <a href={article.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
//                                 {article.title}</a>
//                         </Typography>
//                         <Typography color="textSecondary" variant="subtitle2">
//                             {article.byline.original}
//                         </Typography>
//                         <Typography variant="body2" component="p">
//                             {article.snippet}
//                         </Typography>
//                     </CardContent>
//                 </Card >
//             )}
//         </div>
//     );
// };

Article.propTypes = {
    article: PropTypes.object.isRequired,
};

export default Article;