import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent, Avatar, Divider } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import "./Reviews.css"; // Import the CSS styles here

const reviews = [
    {
      name: "Aditi Dixit",
      cohort: "Analytics Cohort Class of 2023",
      feedback:
        "The feedback that we gave in each class was taken seriously, and the instructors improved dynamically in each session. My expectations from PI was x, and they delivered 2x. Whatever I thought I would get, PI ended up giving me so much more!",
      link: "Read more on Panacea Infosec",
      avatar: "https://example.com/aditi-avatar.jpg",
    },
    {
      name: "Omar Khan",
      cohort: "Data Science Cohort Class of 2024",
      feedback:
        "The instructors were incredibly knowledgeable and always willing to help. The program was very well-structured, and I felt like I learned a lot in a short amount of time. I would highly recommend PI to anyone looking to advance their data science skills.",
      link: "Read more on Omar's Journey",
      avatar: "https://example.com/omar-avatar.jpg",
    },
    {
      name: "Sophia Garcia",
      cohort: "Software Engineering Cohort Class of 2023",
      feedback:
        "The project-based learning approach at PI was fantastic. It allowed me to apply the concepts I was learning in a real-world setting. I also really appreciated the supportive community of students and instructors. PI helped me land my dream job as a software engineer!",
      link: "Read Sophia's Success Story",
      avatar: "https://example.com/sophia-avatar.jpg",
    },
    {
      name: "David Li",
      cohort: "Cybersecurity Cohort Class of 2024",
      feedback:
        "PI's program gave me the skills and knowledge I needed to launch a successful career in cybersecurity. The instructors were industry experts who shared their real-world experience with us. I felt confident and prepared for my first job in the field.",
      link: "Read David's Interview",
      avatar: "https://example.com/david-avatar.jpg",
    },
    {
      name: "Elena Martinez",
      cohort: "Web Development Cohort Class of 2023",
      feedback:
        "PI's web development program was comprehensive and up-to-date. I learned everything I needed to know to become a full-stack developer. The instructors were patient and helpful, and they made sure I understood the material before moving on. I'm now working as a web developer at a top tech company!",
      link: "Read Elena's Experience",
      avatar: "https://example.com/elena-avatar.jpg",
    }
  ];

export const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Index state starts at 0
  const totalReviews = reviews.length;

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === totalReviews - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalReviews - 1 : prevIndex - 1));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Left section */}
      <Box
        sx={{
          width: { xs: "100%", md: "80%" },
          margin: "5%",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 600, lineHeight: "70px", fontFamily: "Roboto" }}>
          REVIEWS OF CERTIFIED PROFESSIONALS
          <Box sx={{ display: "flex", mt: "2%" }}>
            <Button onClick={handlePrev} sx={{ borderRadius: "100%" }}>
              <TrendingFlatIcon
                sx={{
                  backgroundColor: "#e6e6e6",
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                  color: "#2c2c2c",
                  p: 1,
                  transform: "rotate(180deg)",
                }}
              />
            </Button>

            <Button onClick={handleNext} sx={{ borderRadius: "100%" }}>
              <TrendingFlatIcon
                sx={{
                  backgroundColor: "#e6e6e6",
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                  color: "#2c2c2c",
                  p: 1,
                }}
              />
            </Button>
          </Box>
        </Typography>
      </Box>

      {/* Right section with carousel */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "100%", md: "80%" },
          height: "500px"
        }}
      >
        {/* Carousel Container */}
        <main id="carousel" style={{ "--position": activeIndex }}>
          {reviews.map((review, index) => {
            // Calculate offset relative to the active index
            const offset = index - activeIndex;
            const zIndex = index === activeIndex ? 10 : -index;
            return (
              <Card
                key={index}
                className={`item ${index === activeIndex ? "active" : ""}`}
                style={{ "--offset": offset, zIndex: zIndex }}
                sx={{
                  width: 350,
                  height: 400,
                  padding: 2,
                  mt:"4%",
                  borderRadius: 12,
                  boxShadow: '-10px 10px 2px #f5f5f5',
                  opacity: index === activeIndex ? 1 : 0.5, // Apply opacity for non-active cards
                  transform: `translateX(${offset * 350}px) scale(${index === activeIndex ? 1 : 0.8})`, // Adjust spacing and scale
                  transition: "transform 0.5s, opacity 0.5s", // Smooth transition
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                    <Avatar alt={review.name} src={review.avatar} sx={{ marginRight: 2 }} />
                    <Box>
                      <Typography variant="h6">{review.name}</Typography>
                      <Typography color="textSecondary">{review.cohort}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    {review.feedback}
                  </Typography>
                  <Divider
      sx={{
        borderBottomWidth: '2px', 
        borderColor: 'textSecondary', 
        width: '100%',              
        mx: 'auto',                
      }}
    />
                  <Typography color="primary" variant="body2" component="a" href="#">
                    {review.link}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </main>
      </Box>
    </Box>
  );
};
