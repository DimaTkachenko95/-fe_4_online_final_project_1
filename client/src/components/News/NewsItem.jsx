import {Box} from '@mui/material';
import {Link} from 'react-router-dom';
import './NewsItem.scss';
const NewsItem = ({title, imagePath, desc, newsPath}) => {
  return(
      <>
          <Link to={newsPath} className="news-item">
              <Box className="news-item__wrapper">
                  <Box className="news-item__image-wrapper">
                      <img src={imagePath} alt="news" className="news-item__image"/>
                  </Box>
                  <Box className="news-item__content">
                      <h3 className="news-item__title">{title}</h3>
                      <p className="news-item__desc">{desc}</p>
                  </Box>
              </Box>
          </Link>
      </>
  )
}

export default NewsItem;
