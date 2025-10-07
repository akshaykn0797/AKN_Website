// src/components/Publications.js
'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    Grid,
    IconButton,
    Link,
    Paper,
    Divider,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Trophy icon
import CodeIcon from '@mui/icons-material/Code'; // Github icon
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'; // Video icon
import StorageIcon from '@mui/icons-material/Storage'; // Dataset icon
import DescriptionIcon from '@mui/icons-material/Description'; // PDF icon
import LinkIcon from '@mui/icons-material/Link'; // DOI link icon
import WebIcon from '@mui/icons-material/Web'; // Project link icon

// Sample data structure for publications
const publicationsData = [
    {
        id: 1,
        title: "Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India",
        venue: "ACM CSCW 2025",
        date: "October 2025",
        authors: "Akshay Kolgar Nayak , Yash Prakash, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We present a study on self-reflection strategies among blind and visually impaired (BVI) job seekers in India. Despite gaining digital skills, many face challenges aligning with industry expectations due to limited personalized feedback and inaccessible job-prep tools. Self-reflection is often a social process shaped by peer interactions, yet current systems lack the tailored support needed for effective growth. Our findings inform the design of future tools to better guide reflective job-seeking and address the unique needs of BVI individuals in the Global South.",
        image: "selfReflection", // Corrected image name
        color: "linear-gradient(135deg, #FFE8DC 0%, #FFF3E8 100%)", // Sunset peach gradient
        textColor: "#2D4059", // Deep water blue for text
        links: {
            pdf: "Papers/cscw25.pdf",
            // doi: "https://doi.org/10.1145/3487553.3524254",
            // project: "https://example.com/accessible-reviews"
        },
        extraLinks: {
            // github: "https://github.com/username/restaurant-reviews",
            // video: "https://youtube.com/watch?v=exampleId",
            // dataset: "https://example.com/restaurant-dataset"
        },
        awards: [],
        featured: true
    },
    {
        id: 2,
        title: "Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews",
        venue: "ACM Web4All 2025",
        date: "April 2025",
        authors: "Mohan Sunkara, Akshay Kolgar Nayak, Sandeep Kalari, Yash Prakash, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We present QuickCue, an assistive browser extension that improves the usability of online restaurant reviews for blind screen reader users. QuickCue restructures review content into a hierarchical format organized by aspects (e.g., food, service, ambiance) and sentiment (positive/negative), enabling faster, more focused exploration with minimal navigation. Powered by GPT-4, it performs aspect-sentiment classification and generates targeted summaries, significantly reducing listening fatigue and helping users make more informed decisions.",
        image: "quickCue", // Image filename in public/Publications folder
        color: "linear-gradient(135deg, #F3E8F8 0%, #F9F0FC 100%)", // Twilight lavender gradient
        textColor: "#2D4059", // Deep water blue
        links: {
            pdf: "Papers/quickCue.pdf",
            // doi: "https://doi.org/10.1145/3487553.3524255",
            // project: "https://example.com/accessmenu"
        },
        extraLinks: {
            // github: "https://github.com/username/accessmenu",
        },
        awards: [{
            type: "best-paper",
            name: "Best Paper Award"
        }],
        featured: true
    },
    {
        id: 3,
        title: "Towards Enhancing Low Vision Usability of Data Charts on Smartphones",
        venue: "IEEE VIS (TVCG) 2025",
        date: "September 2024",
        authors: "Yash Prakash, Pathan Aseef Khan, Akshay Kolgar Nayak, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok ",
        abstract: "We present GraphLite, a mobile assistive system that makes data charts more usable for low-vision screen magnifier users. GraphLite transforms static, non-interactive charts into customizable, interactive views that preserve visual context under magnification. Users can selectively focus on key data points, personalize chart appearance, and reduce panning effort through simplified gestures.",
        image: "graphLite", // Image filename in public/Publications folder
        color: "linear-gradient(135deg, #E8F0F8 0%, #F0F6FC 100%)", // Light water blue gradient
        textColor: "#2D4059", // Deep water blue
        links: {
            pdf: "Papers/graphLite.pdf",
            doi: "https://doi.org/10.1109/TVCG.2024.3456348",
            // project: "https://youtu.be/QFw5QH7FwNY"
        },
        extraLinks: {
            github: "https://github.com/accessodu/GraphLite?tab=readme-ov-file",
            video: "https://youtu.be/QFw5QH7FwNY"
        },
        awards: [],
        featured: true
    }
];

// Conference/Journal with custom publisher icon
const VenueInfo = ({ venue, date, publisher }) => {
    // Default icon is SchoolIcon
    let icon = <SchoolIcon sx={{ fontSize: '1rem', mr: 1, color: '#424242' }} />;

    // If publisher is specified, use a custom image icon
    if (publisher) {
        icon = (
            <Box
                component="img"
                src={`/icons/${publisher}.png`}
                alt={`${publisher} icon`}
                sx={{
                    height: '16px',
                    width: 'auto',
                    mr: 1,
                    display: 'inline-block',
                    verticalAlign: 'middle'
                }}
            />
        );
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            {icon}
            <Typography
                variant="body2"
                sx={{
                    color: '#222',
                    opacity: 0.8,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                }}
            >
                {venue} • {date}
            </Typography>
        </Box>
    );
};

// Award badge component - achievement medal design
const AwardBadge = ({ awards }) => {
    const renderBestPaperBadge = () => (
        <Box sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF9F0 100%)',
            px: 2,
            py: 0.8,
            borderRadius: '24px',
            boxShadow: '0 3px 12px rgba(184, 134, 11, 0.25)',
            border: '2px solid #D4AF37',
        }}>
            <Box sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                boxShadow: '0 2px 6px rgba(255, 165, 0, 0.3)',
            }}>
                🏆
            </Box>
            <Typography sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.5px',
                color: '#8B7500',
            }}>
                Best Paper Award
            </Typography>
        </Box>
    );

    const renderCoreAStarBadge = (name) => (
        <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 1 }}>
            {/* Star Badge */}
            <Box sx={{
                position: 'relative',
                width: 45,
                height: 45,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* Star background using CSS */}
                <Box sx={{
                    position: 'absolute',
                    width: 45,
                    height: 45,
                    background: 'linear-gradient(135deg, #7C4DFF 0%, #5E35B1 100%)',
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    boxShadow: '0 4px 16px rgba(94, 53, 177, 0.6)',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent)',
                        clipPath: 'inherit',
                    }
                }} />
                <SchoolIcon sx={{ fontSize: '1.3rem', color: 'white', zIndex: 1 }} />
            </Box>
            {/* Text Badge */}
            <Box sx={{
                background: 'linear-gradient(135deg, #7C4DFF 0%, #5E35B1 100%)',
                color: 'white',
                px: 1.5,
                py: 0.5,
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(94, 53, 177, 0.4)',
                border: '1px solid rgba(255,255,255,0.3)'
            }}>
                {name}
            </Box>
        </Box>
    );

    const renderHonorableMentionBadge = (name) => (
        <Box sx={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Hexagon Badge */}
            <Box sx={{
                width: 50,
                height: 45,
                background: 'linear-gradient(135deg, #FF6B6B 0%, #EE5A6F 100%)',
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(244, 67, 54, 0.5)',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent)',
                    clipPath: 'inherit',
                }
            }}>
                <EmojiEventsIcon sx={{ fontSize: '1.6rem', color: 'white', zIndex: 1 }} />
            </Box>
            {/* Text */}
            <Box sx={{
                mt: 0.5,
                background: 'linear-gradient(135deg, #FF6B6B 0%, #EE5A6F 100%)',
                color: 'white',
                px: 1.5,
                py: 0.3,
                fontSize: '0.65rem',
                fontWeight: 800,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                borderRadius: '3px',
                boxShadow: '0 2px 8px rgba(244, 67, 54, 0.4)',
            }}>
                {name}
            </Box>
        </Box>
    );

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'flex-end'
            }}
        >
            {awards.map((award, index) => {
                if (award.type === 'best-paper') {
                    return <Box key={index}>{renderBestPaperBadge(award.name)}</Box>;
                } else if (award.type === 'core-a-star') {
                    return <Box key={index}>{renderCoreAStarBadge(award.name)}</Box>;
                } else if (award.type === 'honorable-mention') {
                    return <Box key={index}>{renderHonorableMentionBadge(award.name)}</Box>;
                }
                // Default badge for unknown types
                return (
                    <Box key={index} sx={{
                        background: 'linear-gradient(135deg, #42A5F5 0%, #2196F3 100%)',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        borderRadius: '4px',
                        boxShadow: '0 2px 8px rgba(33, 150, 243, 0.4)',
                    }}>
                        {award.name}
                    </Box>
                );
            })}
        </Box>
    );
};

// Simplified Publication Image component with HTML dialog - improved styling
const PublicationImage = ({ imageName, alt }) => {
    // Use ref to access the dialog element
    const dialogRef = useRef(null);
    const imgUrl = `/Publications/${imageName}.png`;

    // Open and close handlers using the native dialog element
    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    return (
        <>
            {/* Direct image container with better styling */}
            <Box
                onClick={openDialog}
                sx={{
                    width: '100%',
                    height: '335px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                        transform: 'scale(1.02)',
                    }
                }}
            >
                <Box
                    component="img"
                    src={imgUrl}
                    alt={alt || `Image for ${imageName}`}
                    sx={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        borderRadius: '12px'
                    }}
                />

                {/* Zoom icon */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        zIndex: 1
                    }}
                >
                    🔍
                </Box>
            </Box>

            {/* Native HTML dialog for image */}
            <dialog
                ref={dialogRef}
                style={{
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    backgroundColor: 'white',
                    padding: '16px',
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                    position: 'fixed',
                    zIndex: 9999,
                    margin: 'auto'
                }}
                onClick={(e) => {
                    // Close dialog if clicking on dialog background
                    if (e.target === dialogRef.current) {
                        closeDialog();
                    }
                }}
            >
                {/* Close button */}
                <button
                    onClick={closeDialog}
                    style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        backgroundColor: '#333',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10
                    }}
                >
                    ✕
                </button>

                {/* Full-size image */}
                <img
                    src={imgUrl}
                    alt={alt || `Full-size image for ${imageName}`}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '80vh',
                        objectFit: 'contain',
                        display: 'block',
                        margin: '0 auto'
                    }}
                />
            </dialog>
        </>
    );
};

// Extra links component for below the image - simplified, transparent design
const ExtraLinks = ({ links }) => {
    if (!links || Object.keys(links).length === 0) return null;

    const getIcon = (type) => {
        switch (type) {
            case 'github':
                return <CodeIcon fontSize="small" />;
            case 'video':
                return <VideoLibraryIcon fontSize="small" />;
            case 'dataset':
                return <StorageIcon fontSize="small" />;
            default:
                return <LinkIcon fontSize="small" />;
        }
    };

    const getLabel = (type) => {
        switch (type) {
            case 'github':
                return 'GitHub';
            case 'video':
                return 'Demo Video';
            case 'dataset':
                return 'Dataset';
            default:
                return type.charAt(0).toUpperCase() + type.slice(1);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 1.5, justifyContent: 'center' }}>
            {Object.entries(links).map(([type, url]) => (
                <Button
                    key={type}
                    startIcon={getIcon(type)}
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    variant="outlined"
                    sx={{
                        backgroundColor: 'transparent',
                        color: '#5A7CA1',
                        fontWeight: 500,
                        border: '1px solid #5A7CA1',
                        borderRadius: '30px',
                        textTransform: 'none',
                        padding: '4px 12px',
                        minWidth: 'auto',
                        '&:hover': {
                            backgroundColor: '#5A7CA1',
                            color: 'white',
                            borderColor: '#5A7CA1',
                        },
                        '& .MuiButton-startIcon': {
                            color: '#5A7CA1',
                            transition: 'color 0.2s ease',
                        },
                        '&:hover .MuiButton-startIcon': {
                            color: 'white'
                        }
                    }}
                >
                    {getLabel(type)}
                </Button>
            ))}
        </Box>
    );
};

// Publication card component
const PublicationCard = ({ publication }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Card
            elevation={0}
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 8px 24px rgba(45, 64, 89, 0.12)',
                mb: 5,
                mt: 4,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '6px',
                    background: 'linear-gradient(90deg, #FF6B35, #FF8C42, #A47BB0)',
                    opacity: 0.8
                },
                '&:hover': {
                    boxShadow: '0 16px 48px rgba(45, 64, 89, 0.2)',
                    transform: 'translateY(-12px)',
                    '&::before': {
                        opacity: 1
                    }
                },
                minHeight: { xs: 'auto', md: '420px' }
            }}
        >
            {/* Award Badges */}
            {publication.awards && publication.awards.length > 0 &&
                <AwardBadge awards={publication.awards} />
            }

            {/* Left side - Content */}
            <Box sx={{
                width: { xs: '100%', md: '55%' },
                p: { xs: 3, md: 4 },
                pt: { xs: 4, md: 4.5 },
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'rgba(255, 248, 243, 0.4)',
                borderRight: { xs: 'none', md: '1px solid rgba(45, 64, 89, 0.08)' }
            }}>
                {/* Title */}
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.3,
                        mb: 2,
                        color: '#2D4059',
                        fontSize: { xs: '1.3rem', md: '1.45rem' },
                    }}
                >
                    {publication.title}
                </Typography>

                {/* Venue Badge */}
                <Box sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    mb: 2,
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    px: 2,
                    py: 1,
                    borderRadius: '12px',
                    width: 'fit-content',
                    border: '1px solid rgba(255, 107, 53, 0.2)'
                }}>
                    <SchoolIcon sx={{ fontSize: '1.1rem', mr: 1, color: '#FF6B35' }} />
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#FF6B35',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                        }}
                    >
                        {publication.venue} • {publication.date}
                    </Typography>
                </Box>

                {/* Authors */}
                <Box sx={{
                    mb: 2,
                    p: 1.5,
                    backgroundColor: 'rgba(90, 124, 161, 0.08)',
                    borderRadius: '8px',
                    borderLeft: '3px solid #5A7CA1'
                }}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 600,
                            color: '#2D4059',
                            fontSize: '0.9rem',
                            lineHeight: 1.6
                        }}
                    >
                        {publication.authors}
                    </Typography>
                </Box>

                {/* Abstract */}
                <Typography
                    variant="body2"
                    sx={{
                        color: '#2D4059',
                        mb: 3,
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 6,
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                        opacity: 0.9,
                        flexGrow: 1
                    }}
                >
                    {publication.abstract}
                </Typography>

                {/* Action Buttons */}
                <Box sx={{
                    display: 'flex',
                    gap: 1.5,
                    mt: 'auto',
                    flexWrap: 'wrap',
                }}>
                    {publication.links.pdf && (
                        <Button
                            variant="contained"
                            size="medium"
                            startIcon={<DescriptionIcon />}
                            href={publication.links.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: '#FF6B35',
                                color: 'white',
                                borderRadius: '12px',
                                boxShadow: '0 4px 12px rgba(255, 107, 53, 0.25)',
                                '&:hover': {
                                    backgroundColor: '#FF8C42',
                                    boxShadow: '0 6px 16px rgba(255, 107, 53, 0.35)',
                                    transform: 'translateY(-2px)',
                                },
                                fontWeight: 700,
                                textTransform: 'none',
                                px: 3,
                                py: 1,
                                fontSize: '0.9rem',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            PDF
                        </Button>
                    )}
                    {publication.links.doi && (
                        <Button
                            variant="outlined"
                            size="medium"
                            startIcon={<LinkIcon />}
                            href={publication.links.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: 'transparent',
                                color: '#5A7CA1',
                                border: '2px solid #5A7CA1',
                                borderRadius: '12px',
                                '&:hover': {
                                    backgroundColor: '#5A7CA1',
                                    color: 'white',
                                    borderColor: '#5A7CA1',
                                    transform: 'translateY(-2px)',
                                },
                                fontWeight: 700,
                                textTransform: 'none',
                                px: 3,
                                py: 1,
                                fontSize: '0.9rem',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            DOI
                        </Button>
                    )}
                    {publication.links.project && (
                        <Button
                            variant="outlined"
                            size="medium"
                            startIcon={<WebIcon />}
                            href={publication.links.project}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: 'transparent',
                                color: '#5A7CA1',
                                border: '2px solid #5A7CA1',
                                borderRadius: '12px',
                                '&:hover': {
                                    backgroundColor: '#5A7CA1',
                                    color: 'white',
                                    borderColor: '#5A7CA1',
                                    transform: 'translateY(-2px)',
                                },
                                fontWeight: 700,
                                textTransform: 'none',
                                px: 3,
                                py: 1,
                                fontSize: '0.9rem',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            Project
                        </Button>
                    )}
                </Box>
            </Box>

            {/* Right side - Image and extra links */}
            <Box sx={{
                width: { xs: '100%', md: '45%' },
                p: { xs: 3, md: 3 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'rgba(243, 232, 248, 0.3)',
            }}>
                <Box sx={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                    mb: 2
                }}>
                    <PublicationImage imageName={publication.image} alt={`Image for ${publication.title}`} />
                </Box>

                {/* Extra links */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <ExtraLinks links={publication.extraLinks} />
                </Box>
            </Box>
        </Card>
    );
};

export default function Publications({ showTitle = true, isStandalonePage = false }) {
    return (
        <Box
            id="publications"
            sx={{
                pt: isStandalonePage ? 0 : { xs: 4, md: 2 },
                pb: { xs: 8, md: 10 },
                background: isStandalonePage ? 'transparent' : 'linear-gradient(to bottom, #FFF3E8 0%, #F3E8F8 100%)',
            }}
        >
            <Container maxWidth="lg">
                {/* Section title - only show if showTitle is true */}
                {showTitle && (
                    <Box sx={{ mb: { xs: 4, md: 6 }, display: 'flex', alignItems: 'center', gap: 2 }}>
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
                            Selected Publications
                        </Typography>
                    </Box>
                )}

                {/* Publications List */}
                <Box>
                    {publicationsData.map((publication) => (
                        <PublicationCard key={publication.id} publication={publication} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
}