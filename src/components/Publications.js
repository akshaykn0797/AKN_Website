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
    Chip,
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
        color: "linear-gradient(135deg, #FCDEDE 0%, #FEE6E6 100%)", // Light pink gradient
        textColor: "#1976d2", // Darker blue for text
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
        awards: [
            {
                type: "core-a-star",
                name: "CORE A*"
            }
        ],
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
        color: "linear-gradient(135deg, #E9E2F5 0%, #F0EAF9 100%)", // Light lavender gradient
        textColor: "#333", // Changed to black
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
        color: "linear-gradient(135deg, #D3ECDB 0%, #E0F4E7 100%)", // Light mint green gradient
        textColor: "#333", // Changed to black
        links: {
            pdf: "Papers/graphLite.pdf",
            doi: "https://doi.org/10.1109/TVCG.2024.3456348",
            project: "https://youtu.be/QFw5QH7FwNY"
        },
        extraLinks: {
            github: "https://github.com/accessodu/GraphLite?tab=readme-ov-file"
        },
        awards: [
            {
                type: "core-a-star",
                name: "CORE A*"
            }
        ],
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

// Award badge component - supports multiple badges
const AwardBadge = ({ awards }) => {
    // Map of award types to their styles
    const awardStyles = {
        'best-paper': {
            bgcolor: '#FFD700',
            color: '#7B5800',
            icon: <EmojiEventsIcon />,
        },
        'core-a-star': {
            bgcolor: '#5e35b1',
            color: 'white',
            icon: <SchoolIcon />,
        },
        'honorable-mention': {
            bgcolor: '#f44336',
            color: 'white',
            icon: <EmojiEventsIcon />,
        }
    };

    // Default style if type not found
    const defaultStyle = {
        bgcolor: '#2196f3',
        color: 'white',
        icon: <EmojiEventsIcon />,
    };

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 16,
                transform: 'translateY(-50%)',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'row',
                gap: 1
            }}
        >
            {awards.map((award, index) => {
                const style = awardStyles[award.type] || defaultStyle;

                return (
                    <Chip
                        key={index}
                        icon={style.icon}
                        label={award.name}
                        sx={{
                            backgroundColor: style.bgcolor,
                            color: style.color,
                            fontWeight: 700,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                            borderRadius: '30px',  // More rounded corners
                            '& .MuiChip-icon': {
                                color: style.color
                            }
                        }}
                        size="small"
                    />
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
                        color: '#555',
                        fontWeight: 500,
                        border: '1px solid rgba(0,0,0,0.2)',
                        borderRadius: '30px',
                        textTransform: 'none',
                        padding: '4px 12px',
                        minWidth: 'auto',
                        '&:hover': {
                            backgroundColor: '#555',
                            color: 'white',
                            borderColor: 'rgba(255,255,255,0.7)',
                        },
                        '& .MuiButton-startIcon': {
                            color: '#555',
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

    // Extract colors from publication data or use defaults
    const cardColor = publication.color || '#f8f9fc';

    // Use a professional, consistent color scheme
    const buttonColor = '#424242'; // Dark gray for primary buttons
    const secondaryButtonColor = '#666666'; // Medium gray for secondary buttons

    return (
        <Card
            elevation={1}
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                borderRadius: '12px',
                overflow: 'visible',
                position: 'relative',
                border: '1px solid rgba(0,0,0,0.08)',
                backgroundColor: cardColor && cardColor.includes('gradient') ? 'transparent' : cardColor,
                background: cardColor && cardColor.includes('gradient') ? cardColor : 'none',
                mb: 3.5, // Reduced from 4 to reduce bottom white space
                mt: 4,
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.12)',
                    transform: 'translateY(-5px)'
                },
                minHeight: { xs: 'auto', md: '370px' } // Reduced minimum height
            }}
        >
            {/* Award Badges */}
            {publication.awards && publication.awards.length > 0 &&
                <AwardBadge awards={publication.awards} />
            }

            <Box sx={{
                width: { xs: '100%', md: '55%' },
                p: { xs: 2.5, md: 3 },
                pt: { xs: 3, md: 3.5 }, // Slight reduction in top padding
                pb: { xs: 2, md: 2.5 }, // Reduced bottom padding
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // Better vertical distribution of content
                backgroundColor: 'transparent',
                height: '100%'
            }}>
                {/* Title */}
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        fontWeight: 800,
                        letterSpacing: '-0.01em',
                        lineHeight: 1.3,
                        mb: 1.2, // Slightly reduced margin
                        color: '#222',
                        fontSize: { xs: '1.2rem', md: '1.35rem' }, // Adjusted font size
                    }}
                >
                    {publication.title}
                </Typography>

                {/* Conference/Journal with custom publisher icon */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <SchoolIcon sx={{ fontSize: '1rem', mr: 1, color: '#555' }} />
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#222',
                            opacity: 0.8,
                            fontWeight: 600,
                            fontSize: '0.9rem',
                        }}
                    >
                        {publication.venue} • {publication.date}
                    </Typography>
                </Box>

                {/* Authors */}
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 600,
                        mb: 1.5, // Slightly reduced margin
                        color: '#222',
                        fontSize: '0.9rem', // Slightly increased font size
                    }}
                >
                    {publication.authors}
                </Typography>

                {/* Abstract */}
                <Typography
                    variant="body2"
                    sx={{
                        color: '#222',
                        mb: 2.5, // Reduced margin
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 7,
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                    }}
                >
                    {publication.abstract}
                </Typography>

                {/* Action Buttons - All with consistent styling */}
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    mt: 'auto',
                    flexWrap: 'wrap',
                    mb: { xs: 1, md: 1 }, // Reduced margins
                }}>
                    {publication.links.pdf && (
                        <Button
                            variant="outlined"
                            size="medium"
                            startIcon={<DescriptionIcon />}
                            href={publication.links.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: 'transparent',
                                color: '#333',
                                border: '1px solid #333',
                                borderRadius: '30px',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#333',
                                    color: 'white',
                                    borderColor: 'white',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                                    transform: 'translateY(-2px)',
                                },
                                fontWeight: 600,
                                textTransform: 'none',
                                px: 3,
                                py: 0.8,
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
                                color: '#333',
                                border: '1px solid #333',
                                borderRadius: '30px',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#333',
                                    color: 'white',
                                    borderColor: 'white',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                                    transform: 'translateY(-2px)',
                                },
                                fontWeight: 600,
                                textTransform: 'none',
                                px: 3,
                                py: 0.8,
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
                                color: '#333',
                                border: '1px solid #333',
                                borderRadius: '30px',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#333',
                                    color: 'white',
                                    borderColor: 'white',
                                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                                    transform: 'translateY(-2px)',
                                },
                                fontWeight: 600,
                                textTransform: 'none',
                                px: 3,
                                py: 0.8,
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
                p: { xs: 2, md: 2.5 }, // Reduced padding to minimize white space
                pb: { xs: 2, md: 2 }, // Reduced bottom padding
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                position: 'relative',
                zIndex: 1
            }}>
                <PublicationImage imageName={publication.image} alt={`Image for ${publication.title}`} />

                {/* Extra links centered and pushed closer to image */}
                <Box sx={{
                    mt: 1.5, // Reduced margin top
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <ExtraLinks links={publication.extraLinks} />
                </Box>
            </Box>
        </Card>
    );
};

export default function Publications() {
    return (
        <Box
            id="publications"
            sx={{
                pt: { xs: 4, md: 2 }, // Reduced top padding from 8/10 to 4/2
                pb: { xs: 8, md: 10 },
                backgroundColor: '#f5f5f7',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        fontWeight: 700,
                        mb: { xs: 4, md: 5 },
                        color: '#222',
                    }}
                >
                    Recent Publications
                </Typography>

                {/* Publications List */}
                <Box>
                    {publicationsData.map((publication) => (
                        <PublicationCard key={publication.id} publication={publication} />
                    ))}
                </Box>

                {/* View All Publications Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button
                        variant="outlined"
                        size="large"
                        href="/publications"
                        sx={{
                            backgroundColor: 'transparent',
                            color: '#333',
                            border: '1px solid #333',
                            borderRadius: '30px',
                            px: 4,
                            py: 1.2,
                            fontWeight: 600,
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#333',
                                color: 'white',
                                borderColor: 'white',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                            },
                        }}
                    >
                        View All Publications
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}