import React from "react";

import { Grid, ImageList, ImageListItem } from "@mui/material";
import IntroduceText from "../../components/IntroduceText";

import photoGallery1 from "../../assets/img/about/photo_gallery1.png";
import photoGallery2 from "../../assets/img/about/photo_gallery2.png";
import photoGallery3 from "../../assets/img/about/photo_gallery3.png";
import photoGallery4 from "../../assets/img/about/photo_gallery4.png";
import photoGallery5 from "../../assets/img/about/photo_gallery5.png";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function PhotoGallery() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      mt={3}
    >
      <Grid item xs={12} lg={12}>
        <IntroduceText firstLine="Photo" secondLine="Gallery" />
      </Grid>

      <Grid item xs={12} lg={12}>
        <ImageList
          sx={{ width: "100%", height: "100%" }}
          variant="quilted"
          cols={5}
          rowHeight="100%"
        >
          <ImageListItem key={photoGallery1} cols={1} rows={1}>
            <img {...srcset(photoGallery1, 121, 1, 1)} alt="" loading="lazy" />
          </ImageListItem>
          <ImageListItem key={photoGallery2} cols={1} rows={1}>
            <img {...srcset(photoGallery2, 121, 1, 1)} alt="" loading="lazy" />
          </ImageListItem>
          <ImageListItem key={photoGallery3} cols={1} rows={1}>
            <img {...srcset(photoGallery3, 121, 1, 1)} alt="" loading="lazy" />
          </ImageListItem>
          <ImageListItem key={photoGallery4} cols={1} rows={1}>
            <img {...srcset(photoGallery4, 121, 1, 1)} alt="" loading="lazy" />
          </ImageListItem>
          <ImageListItem key={photoGallery5} cols={1} rows={1}>
            <img {...srcset(photoGallery5, 121, 1, 1)} alt="" loading="lazy" />
          </ImageListItem>
        </ImageList>
      </Grid>
    </Grid>
  );
}

export default PhotoGallery;
