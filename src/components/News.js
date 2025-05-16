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
        date: 'April 29, 2025',
        image: 'w4a25', // Image filename in public/News folder
        color: '#1976d2', // blue
        bgColor: '#e8f4f8', // light blue
        headline: 'Paper Accepted - Web4All 2025',
        description: 'Our paper, "AccessMenu: Enhancing the Usability of Online Restaurant Menus for Screen-Reader Users," was presented at ACM Web4All 2025 in Sydney, Australia.',
        link: 'Papers/accessMenu25.pdf'
    },
    {
        id: 3,
        date: 'March 26, 2025',
        image: 'cscw25', // Image filename in public/News folder
        color: '#00bcd4', // darker blue
        bgColor: '#e0f7fa', // very light blue
        headline: 'Paper Accepted - ACM CSCW 2025',
        description: 'Our paper, "Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India," has been accepted for presentation at the ACM CSCW Conference.',
        link: 'Papers/cscw25.pdf'
    },
    {
        id: 4,
        date: 'January 20, 2025',
        image: 'odu', // Image filename in public/News folder
        color: '#3A59D1', // teal
        bgColor: '#fff3e0', // light teal
        headline: 'Awarded Dr. Hussein Abdel-Wahab Memorial Graduate Fellowship',
        description: 'Honored to receive ODU\'s Dr. Hussein Abdel-Wahab Memorial Graduate Fellowship, celebrating his pioneering CS legacy and supporting my continued research excellence.',
        link: 'https://www.odu.edu/computer-science/scholarships/wahab'
    },
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
                objectFit: 'contain',
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
                height: 340,
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
                {/* Image and date section */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 2,
                    height: 56
                }}>
                    <Box sx={{
                        width: 56,
                        height: 56,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'visible'
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
                        color: '#3A59D1',
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
    const [canScrollLeft, setCanScrollLeft] = useState(false); // Start with left arrow hidden
    const [canScrollRight, setCanScrollRight] = useState(true);
    const lastScrollPosRef = useRef(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Calculate visible cards based on screen size
    const cardsPerView = isMobile ? 1 : isTablet ? 2 : 3;

    // Calculate the number of "pages" in the carousel
    const totalSteps = Math.max(1, Math.ceil(newsItems.length / cardsPerView));

    // Update carousel state based on current scroll position
    const updateCarouselState = () => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;

        // Check if we can scroll in either direction
        // Be stricter about left scroll detection to ensure it's truly scrolled
        const canGoLeft = container.scrollLeft > 5;
        const canGoRight = container.scrollLeft < maxScroll - 5;

        // Set the scroll direction states
        setCanScrollLeft(canGoLeft);
        setCanScrollRight(canGoRight);

        // Calculate the current step based on scroll position
        if (maxScroll <= 0) {
            // If we can't scroll, we're at step 0
            setActiveStep(0);
        } else {
            // Calculate which step we're on based on percentage scrolled
            const scrollRatio = container.scrollLeft / maxScroll;
            const rawStep = scrollRatio * (totalSteps - 1);
            const currentStep = Math.round(rawStep);

            // Set the active step
            setActiveStep(Math.min(totalSteps - 1, Math.max(0, currentStep)));
        }

        // Update last scroll position
        lastScrollPosRef.current = container.scrollLeft;
    };

    // Handle programmatic scrolling with arrows
    const scroll = (direction) => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const cardWidth = isMobile ? 280 + 24 : isTablet ? 320 + 24 : 360 + 24;
        const scrollAmount = cardWidth * cardsPerView * (direction === 'left' ? -1 : 1);

        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });

        // Pre-calculate state for immediate feedback
        const expectedScrollPos = Math.max(0, Math.min(
            container.scrollWidth - container.clientWidth,
            container.scrollLeft + scrollAmount
        ));

        // Update the step - the continuous monitoring will handle final positioning
        const nextStep = direction === 'left'
            ? Math.max(0, activeStep - 1)
            : Math.min(totalSteps - 1, activeStep + 1);

        setActiveStep(nextStep);
        setCanScrollLeft(direction === 'right' || (direction === 'left' && expectedScrollPos > 5));
        setCanScrollRight(direction === 'left' || (direction === 'right' &&
            expectedScrollPos < container.scrollWidth - container.clientWidth - 5));
    };

    // Handle dot click
    const handleDotClick = (index) => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;

        // Calculate exact scroll position based on the selected dot
        let targetScrollPos;

        if (index === 0) {
            // First dot - scroll to start
            targetScrollPos = 0;
        } else if (index === totalSteps - 1) {
            // Last dot - scroll to end
            targetScrollPos = maxScroll;
        } else {
            // Middle dots - calculate position proportionally
            targetScrollPos = (index / (totalSteps - 1)) * maxScroll;
        }

        // Scroll to the position
        container.scrollTo({
            left: targetScrollPos,
            behavior: 'smooth'
        });

        // Set active state immediately for better UI feedback
        setActiveStep(index);
        setCanScrollLeft(index > 0);
        setCanScrollRight(index < totalSteps - 1);
    };

    // Set up continuous monitoring of scroll position
    useEffect(() => {
        if (!mounted) return;

        // Initial state update - make sure left arrow is hidden at start
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = 0; // Force to start position
            setCanScrollLeft(false); // Explicitly hide left arrow at start
            setCanScrollRight(totalSteps > 1); // Only show right arrow if we have more than one step
            setActiveStep(0); // Reset to first step
        }

        // Add basic scroll event listener
        const container = scrollContainerRef.current;
        if (container) {
            // Add scroll event
            container.addEventListener('scroll', updateCarouselState);

            // Set up continuous monitoring through polling (fail-safe for all types of scrolling)
            intervalRef.current = setInterval(() => {
                const currentScrollPos = container?.scrollLeft || 0;

                // Only update if the scroll position has actually changed
                if (Math.abs(currentScrollPos - lastScrollPosRef.current) > 1) {
                    updateCarouselState();
                }
            }, 100); // Check every 100ms
        }

        // Cleanup
        return () => {
            if (container) {
                container.removeEventListener('scroll', updateCarouselState);
            }

            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [mounted, cardsPerView, totalSteps]);

    // Force update when screen size changes
    useEffect(() => {
        if (mounted) {
            updateCarouselState();
        }
    }, [isMobile, isTablet, mounted]);

    return (
        <Box
            id="news"
            sx={{
                pt: { xs: 0, md: 2 },
                pb: { xs: 6, md: 8 },
                backgroundColor: '#f5f5f7',
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
                            color: '#3A59D1',
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
                        {/* Left scroll button */}
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
                                // Hide the left button at the beginning (activeStep === 0)
                                display: activeStep === 0 ? 'none' : canScrollLeft ? { xs: 'none', sm: 'flex' } : 'none'
                            }}
                            aria-label="Previous news items"
                        >
                            <ArrowBackIosNewIcon fontSize="small" />
                        </IconButton>

                        {/* Right scroll button */}
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
                                display: canScrollRight ? { xs: 'none', sm: 'flex' } : 'none'
                            }}
                            aria-label="Next news items"
                        >
                            <ArrowForwardIosIcon fontSize="small" />
                        </IconButton>

                        {/* Scrolling container */}
                        <Box
                            ref={scrollContainerRef}
                            sx={{
                                display: 'flex',
                                overflowX: 'auto',
                                px: { xs: 0, md: 2 },
                                py: 2,
                                // Hide scrollbar but keep functionality
                                scrollbarWidth: 'none',
                                '&::-webkit-scrollbar': {
                                    display: 'none'
                                },
                                msOverflowStyle: 'none',
                                // Snap scrolling
                                scrollSnapType: 'x mandatory',
                                '& > *': {
                                    scrollSnapAlign: 'start'
                                },
                                // Container sizing
                                mx: { xs: -2, md: 0 },
                                width: { xs: 'calc(100% + 32px)', md: '100%' }
                            }}
                        >
                            {/* Cards */}
                            {newsItems.map(item => (
                                <Box
                                    key={item.id}
                                    sx={{
                                        height: '100%',
                                        minWidth: 'auto',
                                        scrollSnapAlign: 'start'
                                    }}
                                >
                                    <NewsCard item={item} />
                                </Box>
                            ))}
                        </Box>

                        {/* Dots indicator */}
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
                                        aria-label={`Go to slide ${index + 1}`}
                                        role="button"
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