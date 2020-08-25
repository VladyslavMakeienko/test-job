import React, { useEffect, useState } from "react";
import HousesCard from "./HousesCard";
import { Grid } from "@material-ui/core";
import { galleryFirst } from "../images/galleryFirst.jpg";
import NewsContainer from "./NewsContainer";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Paper } from "@material-ui/core";
import { loadNews } from "../../services/NewsAPI";

const useStyles = makeStyles({
  componentStyle: {
    display: "flex",
    flexGrow: 1,
    height: "400px",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#e9e9e9",
  },
  newsText: {
    textTransform: "uppercase",
    paddingTop: "10%",
    paddingBottom: "30px",
  },
  positionText: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  imgStyleFirst: {
    height: "20px",
    width: "200px",
    marginRight: "40px",
  },
  imgStyleSecond: {
    height: "20px",
    width: "200px",
    marginLeft: "40px",
  },
  cardStyle: {
    display: "flex",
    flexDirection: "row",
  },
});

const Content = () => {
  const classes = useStyles();
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews().then((loadedNews) => setNews(loadedNews));
  }, []);
  console.log(news);
  const NewsInformation = news.map((item, index) => (
    <Grid container>
      <Grid item xs={6} sm={12}>
        <Paper className={classes.componentStyle}>
          <Box component="span" className={classes.positionText}>
            <Typography className={classes.newsText} variant="h3">
              <img
                src="https://img.icons8.com/ios/452/wavy-line.png"
                className={classes.imgStyleFirst}
              />
              News
              <img
                src="https://img.icons8.com/ios/452/wavy-line.png"
                className={classes.imgStyleSecond}
              />
            </Typography>
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <HousesCard
                title={item.title}
                imgSrc={item.urlToImage}
                date={item.publishedAt}
                key={index}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <HousesCard
                title={item.title}
                imgSrc={item.urlToImage}
                date={item.publishedAt}
                key={index}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <HousesCard
                title={item.title}
                imgSrc={item.urlToImage}
                date={item.publishedAt}
                key={index}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  ));
  return NewsInformation;
};

export default Content;

// return (
//   <Grid container>
//     <Grid item xs={6} sm={12}>
//       <Paper className={classes.componentStyle}>
//         <Box component="span" className={classes.positionText}>
//           <Typography className={classes.newsText} variant="h3">
//             <Box
//               component="img"
//               src="https://img.icons8.com/ios/452/wavy-line.png"
//               className={classes.imgStyleFirst}
//             />
//             News
//             <Box
//               component="img"
//               src="https://img.icons8.com/ios/452/wavy-line.png"
//               className={classes.imgStyleSecond}
//             />
//           </Typography>
//         </Box>
//         <Grid container spacing={5}>
//           <Grid item xs={12} sm={4}>
//             <HousesCard
//               title={console.log(news[1])}
//               imgSrc={
//                 "https://i.pinimg.com/originals/6e/c1/97/6ec197b0cb9d4e610e494e30e8fe3e0d.jpg"
//               }
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <HousesCard
//               title={` Where the Russians were resting in the summer of
//         ${new Date().getFullYear()}`}
//               imgSrc={
//                 "https://log-house.ru/wp-content/uploads/2019/09/Dom-359_1-7.jpg"
//               }
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <HousesCard
//               title={` Where the Russians were resting in the summer of
//         ${new Date().getFullYear()}`}
//               imgSrc={
//                 "https://www.dl-chem.com/sites/default/files/styles/infoblok555x360/public/IMG-20150626-WA0008_0.jpg?itok=Pvn2LqNu"
//               }
//             />
//           </Grid>
//         </Grid>
//       </Paper>
//     </Grid>
//   </Grid>
// );
