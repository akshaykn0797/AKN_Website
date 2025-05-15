// src/components/News.js
'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Link,
    useTheme,
    useMediaQuery,
    IconButton,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// Sample news data - replace with your actual news items
const newsItems = [
    {
        id: 1,
        date: 'April 29, 2025',
        image: 'w4a25', // Image filename in public/News folder
        color: '#2196f3', // blue
        bgColor: '#e3f2fd', // light blue
        headline: 'Best Paper - Web4All 2025',
        description: 'Our Paper "Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews" received a  🏆 Best Paper Award at Web4All 2025!',
        link: 'https://www.w4a.info/2025/awards/'
    },
    {
        id: 2,
        date: 'March 26, 2025',
        image: 'cscw25', // Image filename in public/News folder
        color: '#1976d2', // darker blue
        bgColor: '#e8f4f8', // very light blue
        headline: 'Paper Accepted - ACM CSCW 2025',
        description: 'Our paper, "Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India," has been accepted for presentation at the ACM CSCW Conference.',
        link: 'https://example.com/paper2'
    },
    {
        id: 3,
        date: 'January 20, 2025',
        image: 'odu', // Image filename in public/News folder
        color: '#00bcd4', // teal
        bgColor: '#e0f7fa', // light teal
        headline: 'Awarded Dr. Hussein Abdel-Wahab Memorial Graduate Fellowship',
        description: 'Honored to receive ODU’s Dr. Hussein Abdel-Wahab Memorial Graduate Fellowship, celebrating his pioneering CS legacy and supporting my continued research excellence.',
        link: 'https://www.odu.edu/computer-science/scholarships/wahab'
    },
    // {
    //     id: 4,
    //     date: 'January 8, 2025',
    //     image: 'w4a25', // Image filename in public/News folder
    //     color: '#ff9800', // orange
    //     bgColor: '#fff3e0', // light orange
    //     headline: 'Workshop on Inclusive Computing at CHI 2025',
    //     description: 'Our proposal for a full-day workshop on "Computing Technologies for Resource-Constrained Environments" has been accepted at CHI 2025.',
    //     link: 'https://example.com/workshop'
    // },
    // {
    //     id: 5,
    //     date: 'November 30, 2024',
    //     image: 'w4a25', // Image filename in public/News folder
    //     color: '#e91e63', // pink
    //     bgColor: '#fce4ec', // light pink
    //     headline: 'Best Paper Award at ICMI 2024',
    //     description: 'Our research on multimodal interaction techniques for accessibility received the Best Paper Award at ICMI 2024.',
    //     link: 'https://example.com/award'
    // }
];

// Image component with improved handling
const NewsImage = ({ imageName, alt, size = 56 }) => {
    return (
        <Box
            component="img"
            src={`/News/${imageName}.png`}
            alt={alt || `Icon for ${imageName}`}
            sx={{
                width: size,
                height: size,
                borderRadius: '4px',
                objectFit: 'contain', // Changed from 'cover' to 'contain' to prevent cropping
                maxWidth: '100%',
                maxHeight: '100%'
            }}
        />
    );
};
// News Item Card
const NewsCard = ({ item }) => {
    return (
        <Card
            sx={{
                width: { xs: 280, sm: 320, md: 360 },
                height: 340, // Keep fixed height
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                backgroundColor: item.bgColor,
                border: '1px solid rgba(0,0,0,0.08)',
                '&:hover': {
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
                    transform: 'translateY(-5px)'
                },
                mx: 1.4,
                display: 'flex',
                flexDirection: 'column'
            }}
            elevation={1}
        >
            <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Image and date section - Fixed height with proper image container */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 2,
                    height: 56 // Fixed height for this section
                }}>
                    <Box sx={{
                        width: 56,
                        height: 56,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'visible' // Allow image to be fully visible
                    }}>
                        <NewsImage
                            imageName={item.image}
                            alt={`Icon for ${item.headline}`}
                            size={56}
                        />
                    </Box>

                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            fontWeight: 500,
                            backgroundColor: 'rgba(0,0,0,0.05)',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: '16px',
                            fontSize: '0.8rem'
                        }}
                    >
                        {item.date}
                    </Typography>
                </Box>

                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        fontWeight: 600,
                        mb: 2,
                        lineHeight: 1.3,
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        height: '2.6em',
                    }}
                >
                    {item.headline}
                </Typography>

                <Box sx={{ height: 100, mb: 2, overflow: 'hidden' }}>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            lineHeight: 1.6,
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 4,
                        }}
                    >
                        {item.description}
                    </Typography>
                </Box>

                <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: '#ff9800',
                        fontWeight: 600,
                        textDecoration: 'none',
                        mt: 'auto',
                        '&:hover': {
                            textDecoration: 'underline'
                        }
                    }}
                >
                    Read more <OpenInNewIcon sx={{ ml: 0.5, fontSize: '1rem' }} />
                </Link>
            </CardContent>
        </Card>
    );
};

export default function News() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'), { noSsr: true });
    const [mounted, setMounted] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Calculate visible cards based on screen size
    const cardsPerView = isMobile ? 1 : isTablet ? 2 : 3;

    // Calculate the number of "pages" in the carousel
    const totalSteps = Math.ceil(newsItems.length / cardsPerView);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = isMobile ? 280 + 24 : isTablet ? 320 + 24 : 360 + 24; // card width + margin
            const scrollAmount = direction === 'left' ? -cardWidth * cardsPerView : cardWidth * cardsPerView;

            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });

            // Update active step
            if (direction === 'left') {
                setActiveStep(prev => Math.max(prev - 1, 0));
            } else {
                setActiveStep(prev => Math.min(prev + 1, totalSteps - 1));
            }
        }
    };

    // Handle dot click
    const handleDotClick = (index) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = isMobile ? 280 + 24 : isTablet ? 320 + 24 : 360 + 24;

            container.scrollTo({
                left: index * cardWidth * cardsPerView,
                behavior: 'smooth'
            });

            setActiveStep(index);
        }
    };

    // Handle scroll events to update the active dot
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = isMobile ? 280 + 24 : isTablet ? 320 + 24 : 360 + 24;
            const scrollPosition = container.scrollLeft;

            const newStep = Math.round(scrollPosition / (cardWidth * cardsPerView));

            if (newStep !== activeStep) {
                setActiveStep(newStep);
            }
        }
    };

    // Add scroll event listener
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, [activeStep]);

    return (
        <Box
            id="news"
            sx={{
                pt: { xs: 0, md: 2 }, // Reduced top padding
                pb: { xs: 6, md: 8 },
                backgroundColor: '#f5f5f7', // Maintain same background
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        News
                    </Typography>

                    <Link
                        href="/news"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#ff9800',
                            fontWeight: 600,
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        All News <KeyboardArrowRightIcon />
                    </Link>
                </Box>

                {mounted && (
                    <Box sx={{ position: 'relative' }}>
                        {/* Scroll buttons - pushed to the edges */}
                        <IconButton
                            onClick={() => scroll('left')}
                            sx={{
                                position: 'absolute',
                                left: { xs: 0, md: -20 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                backgroundColor: 'white',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                },
                                display: activeStep === 0 ? 'none' : { xs: 'none', sm: 'flex' }
                            }}
                        >
                            <ArrowBackIosNewIcon fontSize="small" />
                        </IconButton>

                        <IconButton
                            onClick={() => scroll('right')}
                            sx={{
                                position: 'absolute',
                                right: { xs: 0, md: -20 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                backgroundColor: 'white',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                                '&:hover': {
                                    backgroundColor: 'white',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                },
                                display: activeStep === totalSteps - 1 ? 'none' : { xs: 'none', sm: 'flex' }
                            }}
                        >
                            <ArrowForwardIosIcon fontSize="small" />
                        </IconButton>

                        {/* Horizontal scrolling container */}
                        <Box
                            ref={scrollContainerRef}
                            sx={{
                                display: 'flex',
                                overflowX: 'auto',
                                px: { xs: 0, md: 2 },
                                py: 2,
                                // Hide scrollbar but keep functionality
                                scrollbarWidth: 'none', // Firefox
                                '&::-webkit-scrollbar': { // Chrome, Safari, Edge
                                    display: 'none'
                                },
                                msOverflowStyle: 'none', // IE - fixed to camelCase
                                // Add snap scrolling for better mobile experience
                                scrollSnapType: 'x mandatory',
                                '& > *': {
                                    scrollSnapAlign: 'start'
                                },
                                // Ensure container doesn't get cut off
                                mx: { xs: -2, md: 0 },
                                width: { xs: 'calc(100% + 32px)', md: '100%' }
                            }}
                        >
                            {/* Cards */}
                            {newsItems.map(item => (
                                <Box key={item.id} sx={{ height: '100%', minWidth: 'auto', scrollSnapAlign: 'start' }}>
                                    <NewsCard item={item} />
                                </Box>
                            ))}
                        </Box>

                        {/* Dots indicator below the carousel */}
                        {totalSteps > 1 && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    mt: 2
                                }}
                            >
                                {Array.from({ length: totalSteps }).map((_, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => handleDotClick(index)}
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: '50%',
                                            backgroundColor: index === activeStep ? 'primary.main' : 'rgba(0,0,0,0.2)',
                                            mx: 0.5,
                                            cursor: 'pointer',
                                            transition: '0.3s'
                                        }}
                                    />
                                ))}
                            </Box>
                        )}
                    </Box>
                )}
            </Container>
        </Box>
    );
}