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
        accentColor: '#FF6B35', // sunset coral accent
        headline: 'Best Paper - Web4All 2025',
        description: 'Our Paper "Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews" received a  🏆 Best Paper Award at Web4All 2025!',
        link: 'https://www.w4a.info/2025/awards/'
    },
    {
        id: 2,
        date: 'April 29, 2025',
        image: 'w4a25', // Image filename in public/News folder
        accentColor: '#FF8C42', // warm orange accent
        headline: 'Paper Accepted - Web4All 2025',
        description: 'Our paper, "AccessMenu: Enhancing the Usability of Online Restaurant Menus for Screen-Reader Users," was presented at ACM Web4All 2025 in Sydney, Australia.',
        link: 'Papers/accessMenu25.pdf'
    },
    {
        id: 3,
        date: 'March 26, 2025',
        image: 'cscw25', // Image filename in public/News folder
        accentColor: '#A47BB0', // twilight lavender accent
        headline: 'Paper Accepted - ACM CSCW 2025',
        description: 'Our paper, "Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India," has been accepted for presentation at the ACM CSCW Conference.',
        link: 'Papers/cscw25.pdf'
    },
    {
        id: 4,
        date: 'January 20, 2025',
        image: 'odu', // Image filename in public/News folder
        accentColor: '#5A7CA1', // water blue accent
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

// News Item Card - Redesigned for clarity
const NewsCard = ({ item }) => {
    return (
        <Card
            sx={{
                width: { xs: 280, sm: 320, md: 360 },
                height: 380,
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: '#FFFFFF',
                border: '2px solid transparent',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${item.accentColor}, ${item.accentColor}DD)`,
                },
                '&:hover': {
                    boxShadow: `0px 12px 32px ${item.accentColor}40`,
                    transform: 'translateY(-8px)',
                    borderColor: `${item.accentColor}30`,
                },
                mx: 1.4,
                display: 'flex',
                flexDirection: 'column'
            }}
            elevation={2}
        >
            <CardContent sx={{ p: 3.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Image and date section - Enhanced */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 2.5,
                    height: 64
                }}>
                    <Box sx={{
                        width: 64,
                        height: 64,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '12px',
                        background: `linear-gradient(135deg, ${item.accentColor}15, ${item.accentColor}08)`,
                        border: `2px solid ${item.accentColor}20`,
                        padding: '8px',
                        overflow: 'visible'
                    }}>
                        <NewsImage
                            imageName={item.image}
                            alt={`Icon for ${item.headline}`}
                            size={48}
                        />
                    </Box>

                    <Box
                        sx={{
                            background: `linear-gradient(135deg, ${item.accentColor}20, ${item.accentColor}10)`,
                            px: 2,
                            py: 0.75,
                            borderRadius: '20px',
                            border: `1px solid ${item.accentColor}30`,
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: item.accentColor,
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                letterSpacing: '0.3px'
                            }}
                        >
                            {item.date}
                        </Typography>
                    </Box>
                </Box>

                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        lineHeight: 1.4,
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        height: '2.8em',
                        color: '#2D4059',
                        fontSize: '1.1rem'
                    }}
                >
                    {item.headline}
                </Typography>

                <Box sx={{ height: 110, mb: 2.5, overflow: 'hidden' }}>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#2D4059',
                            opacity: 0.85,
                            lineHeight: 1.7,
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 4,
                            fontSize: '0.95rem'
                        }}
                    >
                        {item.description}
                    </Typography>
                </Box>

                <Box
                    component={Link}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: item.accentColor,
                        fontWeight: 700,
                        textDecoration: 'none',
                        mt: 'auto',
                        py: 1.5,
                        px: 3,
                        borderRadius: '12px',
                        background: `linear-gradient(135deg, ${item.accentColor}15, ${item.accentColor}08)`,
                        border: `2px solid ${item.accentColor}30`,
                        transition: 'all 0.3s ease',
                        fontSize: '0.9rem',
                        letterSpacing: '0.3px',
                        '&:hover': {
                            background: item.accentColor,
                            color: 'white',
                            borderColor: item.accentColor,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 4px 12px ${item.accentColor}40`
                        }
                    }}
                >
                    Read more <OpenInNewIcon sx={{ ml: 0.75, fontSize: '1.1rem' }} />
                </Box>
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
                pt: { xs: 0, md: 0 },
                pb: { xs: 6, md: 8 },
                background: 'linear-gradient(to bottom, #FFE8DC 0%, #FFF3E8 100%)',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ mb: 4 }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontWeight: 800,
                            color: '#2D4059',
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            letterSpacing: '-0.02em',
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: '-8px',
                                left: 0,
                                width: '60px',
                                height: '4px',
                                background: 'linear-gradient(90deg, #FF6B35, #FF8C42)',
                                borderRadius: '2px'
                            }
                        }}
                    >
                        News
                    </Typography>

                    {/* <Link
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
                    </Link> */}
                </Box>

                {mounted && (
                    <Box sx={{ position: 'relative' }}>
                        {/* Left scroll button - Enhanced */}
                        <IconButton
                            onClick={() => scroll('left')}
                            sx={{
                                position: 'absolute',
                                left: { xs: 0, md: -20 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                backgroundColor: 'white',
                                color: '#FF6B35',
                                width: 48,
                                height: 48,
                                border: '2px solid #FF6B3530',
                                boxShadow: '0 4px 12px rgba(255, 107, 53, 0.2)',
                                '&:hover': {
                                    backgroundColor: '#FF6B35',
                                    color: 'white',
                                    borderColor: '#FF6B35',
                                    boxShadow: '0 6px 16px rgba(255, 107, 53, 0.3)',
                                },
                                transition: 'all 0.3s ease',
                                // Hide the left button at the beginning (activeStep === 0)
                                display: activeStep === 0 ? 'none' : canScrollLeft ? { xs: 'none', sm: 'flex' } : 'none'
                            }}
                            aria-label="Previous news items"
                        >
                            <ArrowBackIosNewIcon fontSize="small" />
                        </IconButton>

                        {/* Right scroll button - Enhanced */}
                        <IconButton
                            onClick={() => scroll('right')}
                            sx={{
                                position: 'absolute',
                                right: { xs: 0, md: -20 },
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                backgroundColor: 'white',
                                color: '#FF6B35',
                                width: 48,
                                height: 48,
                                border: '2px solid #FF6B3530',
                                boxShadow: '0 4px 12px rgba(255, 107, 53, 0.2)',
                                '&:hover': {
                                    backgroundColor: '#FF6B35',
                                    color: 'white',
                                    borderColor: '#FF6B35',
                                    boxShadow: '0 6px 16px rgba(255, 107, 53, 0.3)',
                                },
                                transition: 'all 0.3s ease',
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
                                            width: index === activeStep ? 32 : 8,
                                            height: 8,
                                            borderRadius: '4px',
                                            backgroundColor: index === activeStep ? '#FF6B35' : 'rgba(45, 64, 89, 0.3)',
                                            mx: 0.5,
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
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