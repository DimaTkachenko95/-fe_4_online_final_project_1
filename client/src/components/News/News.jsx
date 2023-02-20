import {Box, Container,} from '@mui/material';
import NewsItem from "./NewsItem";
import './News.scss';

const News = () => {
  return(
      <>
        <Box className="news">
          <Container className="news__container">
            <Box className="news__wrapper">
              <h3 className="news__title">News</h3>
              <Box className="news__items">
                <NewsItem
                    title="Asus ROG Strix Scar RTX 3080"
                    imagePath="https://cdn.mos.cms.futurecdn.net/Tp2kMEdALHiFUb4gEzcMPZ-1200-80.jpg.webp"
                    desc="Currently, you can get the Asus ROG Strix Scar 15 for $1,649 at Newegg. Typically, you'd expect to pony up $2,199."
                    newsPath="https://www.laptopmag.com/news/asus-rog-strix-scar-rtx-3080-laptop-drops-dollar550-in-epic-presidents-day-deal" />

                <NewsItem
                    title="Alienware x17 RTX 3070 Ti"
                    imagePath="https://cdn.mos.cms.futurecdn.net/dTJnMZ4MJjAFrt6vzBmJKe-1200-80.jpg.webp"
                    desc="Epic discounts on Alienware gaming laptops. Right, you can get the Alienware x17 R2 RTX 3070 Ti Gaming Laptop for $1,709"
                    newsPath="https://www.laptopmag.com/news/alienware-x17-rtx-3070-ti-laptop-just-dropped-dollar1000-in-early-presidents-day-deal" />

                <NewsItem
                    title="Asus ROG Zephyrus G14 Ryzen"
                    imagePath="https://cdn.mos.cms.futurecdn.net/xGnnFJygQFEt72ma2GkjHb-1200-80.jpg.webp"
                    desc="One standout Best Buy Presidents Day deal knocks over $500 off this powerful gaming rig. Asus ROG Zephyrus G14 "
                    newsPath="https://www.laptopmag.com/news/asus-rog-zephyrus-g14-ryzen-9-laptop-sheds-dollar550-in-best-buy-presidents-day-deal" />
              </Box>
            </Box>
          </Container>
        </Box>
      </>
  )
}
export default News;
