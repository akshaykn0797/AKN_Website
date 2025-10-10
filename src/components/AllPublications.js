// src/components/AllPublications.js
'use client';

import React, { useRef, useState, useMemo } from 'react';
import {
    Box,
    Typography,
    Button,
    Card,
    useTheme,
    useMediaQuery,
    TextField,
    InputAdornment,
    Chip,
    FormControl,
    Select,
    MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

// All publications data
const allPublicationsData = [
    {
        id: 1,
        title: "Understanding Online Discussion Experiences of Blind Screen Reader Users",
        venue: "Elsevier IJHCS",
        date: "2025",
        authors: "Md Javedul Ferdous, Akshay Kolgar Nayak, Yash Prakash, Nithiya Venkatraman, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "Online discussion platforms are vital for socializing and information exchange, yet blind screen reader users' conversational experiences remain largely unexplored. Through semi-structured interviews with blind participants active on Reddit, Facebook, and YouTube, we uncovered critical challenges including difficulty joining ongoing conversations, tracking replies to their posts, and comprehending context-dependent content. Participants expressed needs for text standardization, sub-thread summarization, and sub-conversation navigation links. They preferred longer context-rich posts and hierarchical organization over linear presentation. We discuss LLM-driven design solutions including semantic conversation disentanglement using chain-of-thought prompting, dynamic voice profiling for different posts, and intelligent summarization features to reduce cognitive load and enhance participation in online discussions.",
        image: "ijhcs25",
        links: {
            pdf: "Papers/ijhcs25.pdf",
        },
        extraLinks: {},
        awards: [],
    },
    {
        id: 2,
        title: "Examining Inclusive Computing Education for Blind Students in India",
        venue: "ACM SIGCSE TS '26",
        date: "February 2026",
        authors: "Akshay Kolgar Nayak, Yash Prakash, Md Javedul Ferdous, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We examine the state of inclusive computing education for blind and visually impaired (BVI) students in India, a resource-constrained Global South context. Through an interview study with 15 BVI students, instructors, and professionals, we identify key challenges including inaccessible instructional materials, heavy reliance on peer support, and the cognitive burden of simultaneously learning computing concepts and screen readers. Our findings reveal gaps in curriculum and instructor training, which often confines BVI individuals to basic, non-developer job roles. We provide recommendations to restructure curricula and propose self-learning assistive tools to foster more equitable and accessible computing education.",
        image: "csed",
        links: {
            pdf: "Papers/SIGCSE26.pdf",
        },
        extraLinks: {},
        awards: [],
    },
    {
        id: 3,
        title: "Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India",
        venue: "ACM CSCW 2025",
        date: "October 2025",
        authors: "Akshay Kolgar Nayak, Yash Prakash, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We present a study on self-reflection strategies among blind and visually impaired (BVI) job seekers in India. Despite gaining digital skills, many face challenges aligning with industry expectations due to limited personalized feedback and inaccessible job-prep tools. Self-reflection is often a social process shaped by peer interactions, yet current systems lack the tailored support needed for effective growth. Our findings inform the design of future tools to better guide reflective job-seeking and address the unique needs of BVI individuals in the Global South.",
        image: "selfReflection",
        links: {
            pdf: "Papers/cscw25.pdf",
        },
        extraLinks: {},
        awards: [],
    },
    {
        id: 4,
        title: "AccessMenu: Enhancing Usability of Online Restaurant Menus for Screen Reader Users",
        venue: "ACM Web4All",
        date: "April 2025",
        authors: "Nithiya Venkatraman*, Akshay Kolgar Nayak*, Suyog Dahal, Yash Prakash, Hae-Na Lee, Vikas Ashok",
        abstract: "Visual restaurant menus in PDF and image formats create substantial barriers for blind screen reader users ordering food online. An interview study with 12 BVI participants revealed that current OCR tools produce illogically ordered outputs, contextual hallucinations, and legend misinterpretations. AccessMenu addresses these issues through a browser extension leveraging GPT-4o-mini with custom Chain-of-Thought prompting to extract menu content (0.80 Entity F1) and re-render it in linearly navigable HTML. The system supports natural language queries for efficient menu filtering. Evaluation with 10 blind participants demonstrated significant improvements in usability and reduced task workload versus JAWS OCR, with participants covering twice as many menu items.",
        image: "accessMenu25",
        links: {
            pdf: "Papers/accessMenu25.pdf",
            doi: "https://doi.org/10.1145/3744257.3744275",
        },
        extraLinks: {},
        awards: [],
    },
    {
        id: 5,
        title: "Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews",
        venue: "ACM Web4All 2025",
        date: "April 2025",
        authors: "Mohan Sunkara, Akshay Kolgar Nayak, Sandeep Kalari, Yash Prakash, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We present QuickCue, an assistive browser extension that improves the usability of online restaurant reviews for blind screen reader users. QuickCue restructures review content into a hierarchical format organized by aspects (e.g., food, service, ambiance) and sentiment (positive/negative), enabling faster, more focused exploration with minimal navigation. Powered by GPT-4, it performs aspect-sentiment classification and generates targeted summaries, significantly reducing listening fatigue and helping users make more informed decisions.",
        image: "quickCue",
        links: {
            pdf: "Papers/quickCue.pdf",
            doi: "https://doi.org/10.1145/3744257.3744276",
        },
        extraLinks: {},
        awards: [{
            type: "best-paper",
            name: "Best Paper Award"
        }],
    },
    {
        id: 6,
        title: "Improving Usability of Data Charts in Multimodal Documents for Low Vision Users",
        venue: "ACM ICMI",
        date: "November 2024",
        authors: "Yash Prakash, Akshay Kolgar Nayak, Shoaib Mohammed Alyaan, Pathan Aseef Khan, Hae-Na Lee, Vikas Ashok",
        abstract: "Multimodal documents pairing charts with text create significant challenges for low vision screen magnifier users on smartphones, who struggle to mentally associate spatially separated information due to limited viewport and constant panning. Following a formative study with 10 low vision participants revealing key requirements, ChartSync transforms static charts into interactive slideshows featuring magnified views of salient data point combinations identified through LLaMA with Chain-of-Thought and ReAct prompting. Each slide includes tailored voice narration addressing the split-attention effect. Evaluation with 12 participants demonstrated significant improvements in task completion time, comprehension, and reduced cognitive load compared to standard screen magnifiers and existing solutions.",
        image: "icmi24",
        links: {
            pdf: "Papers/icmi24.pdf",
            doi: "https://doi.org/10.1145/3678957.3685714",
        },
        extraLinks: {
            github: "https://github.com/accessodu/ChartSync.git",
        },
        awards: [],
    },
    {
        id: 7,
        title: "Understanding Low Vision Graphical Perception of Bar Charts",
        venue: "ACM ASSETS",
        date: "October 2024",
        authors: "Yash Prakash, Akshay Kolgar Nayak, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "Bar charts are ubiquitous for data representation, yet how low-vision screen magnifier users perceive them remains unexplored. Through four controlled experiments with 25 low-vision participants using a custom screen magnifier logger capturing zooming and panning behaviors, this study reveals critical differences from sighted user perception. Findings show low-vision users invest substantial effort counteracting blurring and contrast effects, with tall distractors significantly elevating error rates contrary to sighted user studies. Adjacent bars within single-column stacks prove harder to interpret than separated bars for some participants, while the \"blurring effect\" causes systematic height estimation errors. These insights inform future chart design guidelines accommodating low-vision needs.",
        image: "assets24",
        links: {
            pdf: "Papers/assets24.pdf",
            doi: "https://doi.org/10.1145/3663548.3675616",
        },
        extraLinks: {
            github: "https://github.com/accessodu/LV_Graph_BarCharts.git",
            presentation: "https://youtu.be/VYwg1kaJUos",
            demo: "https://youtu.be/V7uOzCfy0rM"
        },
        awards: [],
    },
    {
        id: 8,
        title: "Towards Enhancing Low Vision Usability of Data Charts on Smartphones",
        venue: "IEEE VIS (TVCG) 2025",
        date: "September 2024",
        authors: "Yash Prakash, Pathan Aseef Khan, Akshay Kolgar Nayak, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We present GraphLite, a mobile assistive system that makes data charts more usable for low-vision screen magnifier users. GraphLite transforms static, non-interactive charts into customizable, interactive views that preserve visual context under magnification. Users can selectively focus on key data points, personalize chart appearance, and reduce panning effort through simplified gestures.",
        image: "graphLite",
        links: {
            pdf: "Papers/graphLite.pdf",
            doi: "https://doi.org/10.1109/TVCG.2024.3456348",
        },
        extraLinks: {
            github: "https://github.com/accessodu/GraphLite?tab=readme-ov-file",
            video: "https://youtu.be/QFw5QH7FwNY"
        },
        awards: [],
    },
    {
        id: 9,
        title: "Assessing the Accessibility and Usability of Web Archives for Blind Users",
        venue: "TPDL 2024",
        date: "September 2024",
        authors: "Mohan Sunkara, Akshay Kolgar Nayak, Sandeep Kalari, Satwik Ram Kodandaram, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "Web archives preserve digital history for researchers and the public, yet their accessibility for blind users remains unexplored. This study provides the first comprehensive evaluation of five prominent platforms (Wayback Machine, UK Web Archive, Pandora, Trove, Archive.today) through automated analysis of 223 pages and a user study with 10 blind participants. Critical barriers emerged including missing image alternatives, inadequate ARIA labeling, and inaccessible date-selection widgets. Participants averaged 8.21 minutes and 129 shortcuts per task, with Archive.today least accessible and UK Web Archive most usable, informing actionable design recommendations for developers.",
        image: "tpdl24",
        links: {
            pdf: "Papers/tpdl24.pdf",
            doi: "https://doi.org/10.1007/978-3-031-72437-4_12",
        },
        extraLinks: {
            github: "https://github.com/accessodu/Web_Archives",
        },
        awards: [],
    },
    {
        id: 10,
        title: "All in One Place: Ensuring Usable Access to Online Shopping Items for Blind Users",
        venue: "ACM EICS (PACMHCI)",
        date: "June 2024",
        authors: "Yash Prakash, Akshay Kolgar Nayak, Mohan Sunkara, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We present InstaFetch, a browser extension that transforms e-commerce accessibility for blind screen reader users by eliminating tedious navigation between product list and detail pages. InstaFetch provides a unified interface that consolidates descriptions, specifications, and reviews in one place using a custom Mask R-CNN model trained on 3,000 annotated webpages. Beyond information aggregation, it features natural language querying powered by LLaMA with Retrieval Augmented Generation, Chain-of-Thought, and ReAct prompting, enabling users to ask complex product questions and receive immediate contextual responses. In evaluations with 14 blind participants, InstaFetch significantly reduced interaction time, keyboard shortcuts, and cognitive workload while enabling exploration of substantially more products.",
        image: "instafetch24",
        links: {
            pdf: "Papers/instafetch24.pdf",
            doi: "https://doi.org/10.1145/3664639",
        },
        extraLinks: {
            github: "https://github.com/accessodu/InstaFetch.git",
            video: "https://youtu.be/D9drlAodlRw"
        },
        awards: [],
    },
];

// Award badge component
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
                    return <Box key={index}>{renderBestPaperBadge()}</Box>;
                }
                return null;
            })}
        </Box>
    );
};

// Publication Image component
const PublicationImage = ({ imageName, alt }) => {
    const dialogRef = useRef(null);
    const imgUrl = `/Publications/${imageName}.png`;
    const isAssets24 = imageName === 'assets24';

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
            <Box
                onClick={openDialog}
                sx={{
                    width: '100%',
                    height: '335px',
                    display: 'flex',
                    flexDirection: isAssets24 ? 'column' : 'row',
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
                {isAssets24 ? (
                    <>
                        <Box
                            component="img"
                            src="/Publications/assets24_1.png"
                            alt={alt || `Image 1 for ${imageName}`}
                            sx={{
                                width: '100%',
                                flex: 1,
                                objectFit: 'contain',
                            }}
                        />
                        <Box
                            component="img"
                            src="/Publications/assets24_2.png"
                            alt={alt || `Image 2 for ${imageName}`}
                            sx={{
                                width: '100%',
                                flex: 1,
                                objectFit: 'contain',
                            }}
                        />
                    </>
                ) : (
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
                )}
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
                    if (e.target === dialogRef.current) {
                        closeDialog();
                    }
                }}
            >
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
                {isAssets24 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                        <img
                            src="/Publications/assets24_1.png"
                            alt={alt || `Full-size image 1 for ${imageName}`}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '40vh',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                        <img
                            src="/Publications/assets24_2.png"
                            alt={alt || `Full-size image 2 for ${imageName}`}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '40vh',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                ) : (
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
                )}
            </dialog>
        </>
    );
};

// Extra links component
const ExtraLinks = ({ links }) => {
    if (!links || Object.keys(links).length === 0) return null;

    const getIcon = (type) => {
        switch (type) {
            case 'github':
                return <CodeIcon fontSize="small" />;
            case 'video':
            case 'presentation':
            case 'demo':
                return <VideoLibraryIcon fontSize="small" />;
            default:
                return <LinkIcon fontSize="small" />;
        }
    };

    const getLabel = (type) => {
        switch (type) {
            case 'github':
                return 'GitHub';
            case 'video':
                return 'Demo';
            case 'presentation':
                return 'Presentation';
            case 'demo':
                return 'Demo';
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

// Publication card component (reused from main page)
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
                    backgroundColor: 'rgba(21, 101, 192, 0.1)',
                    px: 2,
                    py: 1,
                    borderRadius: '12px',
                    width: 'fit-content',
                    border: '1px solid rgba(21, 101, 192, 0.2)'
                }}>
                    <SchoolIcon sx={{ fontSize: '1.1rem', mr: 1, color: '#1565C0' }} />
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#1565C0',
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
                        {publication.authors.split('Akshay Kolgar Nayak').map((part, index, array) => (
                            <React.Fragment key={index}>
                                {part}
                                {index < array.length - 1 && (
                                    <Box component="span" sx={{ fontWeight: 800, color: '#FF6B35' }}>
                                        Akshay Kolgar Nayak
                                    </Box>
                                )}
                            </React.Fragment>
                        ))}
                    </Typography>
                </Box>

                {/* Abstract */}
                <Typography
                    variant="body2"
                    sx={{
                        color: '#2D4059',
                        mb: 3,
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

export default function AllPublications() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedVenue, setSelectedVenue] = useState('all');

    // Extract unique years and venues
    const years = useMemo(() => {
        const yearSet = new Set();
        allPublicationsData.forEach(pub => {
            const year = pub.date.match(/\d{4}/)?.[0];
            if (year) yearSet.add(year);
        });
        return ['all', ...Array.from(yearSet).sort((a, b) => b - a)];
    }, []);

    const venues = useMemo(() => {
        const venueSet = new Set();
        allPublicationsData.forEach(pub => {
            // Extract main venue name (before year or special characters)
            const venueName = pub.venue.replace(/\s*\d{4}.*$/, '').replace(/\s*'\d{2}$/, '').trim();
            venueSet.add(venueName);
        });
        return ['all', ...Array.from(venueSet).sort()];
    }, []);

    // Filter publications based on search and filters
    const filteredPublications = useMemo(() => {
        return allPublicationsData.filter(pub => {
            // Search filter (by title)
            const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase());

            // Year filter
            const pubYear = pub.date.match(/\d{4}/)?.[0];
            const matchesYear = selectedYear === 'all' || pubYear === selectedYear;

            // Venue filter
            const pubVenue = pub.venue.replace(/\s*\d{4}.*$/, '').replace(/\s*'\d{2}$/, '').trim();
            const matchesVenue = selectedVenue === 'all' || pubVenue === selectedVenue;

            return matchesSearch && matchesYear && matchesVenue;
        });
    }, [searchQuery, selectedYear, selectedVenue]);

    const handleClearFilters = () => {
        setSearchQuery('');
        setSelectedYear('all');
        setSelectedVenue('all');
    };

    const activeFiltersCount = [
        searchQuery !== '',
        selectedYear !== 'all',
        selectedVenue !== 'all'
    ].filter(Boolean).length;

    return (
        <Box>
            {/* Search and Filter Section */}
            <Box sx={{
                mb: 4,
                p: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                boxShadow: '0 2px 12px rgba(45, 64, 89, 0.08)',
                border: '1px solid rgba(21, 101, 192, 0.1)',
            }}>
                {/* Search Bar */}
                <TextField
                    fullWidth
                    placeholder="Search publications by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#5A7CA1' }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        mb: 3,
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            '&:hover fieldset': {
                                borderColor: '#1565C0',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#1565C0',
                            },
                        },
                    }}
                />

                {/* Filters Row */}
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                    alignItems: 'center',
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <FilterListIcon sx={{ color: '#5A7CA1' }} />
                        <Typography sx={{ fontWeight: 600, color: '#2D4059' }}>
                            Filters:
                        </Typography>
                    </Box>

                    {/* Year Filter */}
                    <FormControl size="small" sx={{ minWidth: 150 }}>
                        <Select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            sx={{
                                borderRadius: '8px',
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(21, 101, 192, 0.02)',
                                },
                            }}
                        >
                            {years.map(year => (
                                <MenuItem key={year} value={year}>
                                    {year === 'all' ? 'All Years' : year}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {/* Venue Filter */}
                    <FormControl size="small" sx={{ minWidth: 200 }}>
                        <Select
                            value={selectedVenue}
                            onChange={(e) => setSelectedVenue(e.target.value)}
                            sx={{
                                borderRadius: '8px',
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(21, 101, 192, 0.02)',
                                },
                            }}
                        >
                            {venues.map(venue => (
                                <MenuItem key={venue} value={venue}>
                                    {venue === 'all' ? 'All Conferences' : venue}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {/* Active Filters Indicator & Clear Button */}
                    {activeFiltersCount > 0 && (
                        <>
                            <Chip
                                label={`${activeFiltersCount} filter${activeFiltersCount > 1 ? 's' : ''} active`}
                                size="small"
                                sx={{
                                    backgroundColor: '#1565C0',
                                    color: 'white',
                                    fontWeight: 600,
                                }}
                            />
                            <Button
                                size="small"
                                onClick={handleClearFilters}
                                sx={{
                                    textTransform: 'none',
                                    color: '#5A7CA1',
                                    '&:hover': {
                                        color: '#1565C0',
                                        backgroundColor: 'rgba(21, 101, 192, 0.05)',
                                    },
                                }}
                            >
                                Clear All
                            </Button>
                        </>
                    )}
                </Box>

                {/* Results Count */}
                <Typography sx={{
                    mt: 2,
                    color: '#5A7CA1',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                }}>
                    Showing {filteredPublications.length} of {allPublicationsData.length} publications
                </Typography>
            </Box>

            {/* Publications List */}
            {filteredPublications.length > 0 ? (
                filteredPublications.map((publication) => (
                    <PublicationCard key={publication.id} publication={publication} />
                ))
            ) : (
                <Box sx={{
                    textAlign: 'center',
                    py: 8,
                    px: 3,
                }}>
                    <Typography variant="h6" sx={{ color: '#5A7CA1', mb: 1 }}>
                        No publications found
                    </Typography>
                    <Typography sx={{ color: '#5A7CA1', opacity: 0.8 }}>
                        Try adjusting your search or filters
                    </Typography>
                </Box>
            )}
        </Box>
    );
}
