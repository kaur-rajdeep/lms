import React, { useState } from "react";
import { Button, Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const reviews = [
  {
    name: "Aditi Dixit",
    cohort: "Analytics Cohort Class of 2023",
    feedback:
      "The feedback that we gave in each class was taken seriously, and the instructors improved dynamically in each session. My expectations from PI was x, and they delivered 2x. Whatever I thought I would get, PI ended up giving me so much more!",
    link: "Read more on Panacea Infosec",
    avatar: "https://example.com/aditi-avatar.jpg", // add the actual avatar link or image URL
  },
  {
    name: "Nitin Verma",
    cohort: "New Batch 2022",
    feedback:
      "Something else as feedback",
    link: "Read more on Panacea Infosec",
    avatar: "https://example.com/nitin-avatar.jpg", // add the actual avatar link or image URL
  },
  // Add more reviews if needed
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 4 }}>
      {/* Left Arrow */}
      <Button onClick={handlePrev}>
        <ArrowBackIos />
      </Button>

      {/* Review Card */}
      <Card sx={{ minWidth: 300, maxWidth: 400, padding: 2, margin: 2 }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Avatar
              alt={reviews[activeIndex].name}
              src={reviews[activeIndex].avatar}
              sx={{ marginRight: 2 }}
            />
            <Box>
              <Typography variant="h6">{reviews[activeIndex].name}</Typography>
              <Typography color="textSecondary">
                {reviews[activeIndex].cohort}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {reviews[activeIndex].feedback}
          </Typography>
          <Typography color="primary" variant="body2" component="a" href="#">
            {reviews[activeIndex].link}
          </Typography>
        </CardContent>
      </Card>

      {/* Right Arrow */}
      <Button onClick={handleNext}>
        <ArrowForwardIos />
      </Button>
    </Box>
  );
};

export default Carousel;
