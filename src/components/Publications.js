// src/components/Publications.js
'use client';

import React, { useState, useEffect, useRef } from 'react';
import NextLink from 'next/link';
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
    Tooltip,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Trophy icon
import CodeIcon from '@mui/icons-material/Code'; // Github icon
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'; // Video icon
import StorageIcon from '@mui/icons-material/Storage'; // Dataset icon
import DescriptionIcon from '@mui/icons-material/Description'; // PDF icon
import LinkIcon from '@mui/icons-material/Link'; // DOI link icon
import WebIcon from '@mui/icons-material/Web'; // Project link icon
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'; // Cite icon
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

// Sample data structure for publications
const publicationsData = [
    {
        id: 1,
        title: "Examining Inclusive Computing Education for Blind Students in India",
        venue: "ACM SIGCSE TS '26",
        date: "February 2026",
        authors: "Akshay Kolgar Nayak, Yash Prakash, Md Javedul Ferdous, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We examine the state of inclusive computing education for blind and visually impaired (BVI) students in India, a resource-constrained Global South context. Through an interview study with 15 BVI students, instructors, and professionals, we identify key challenges including inaccessible instructional materials, heavy reliance on peer support, and the cognitive burden of simultaneously learning computing concepts and screen readers. Our findings reveal gaps in curriculum and instructor training, which often confines BVI individuals to basic, non-developer job roles. We provide recommendations to restructure curricula and propose self-learning assistive tools to foster more equitable and accessible computing education.",
        image: "csed",
        color: "linear-gradient(135deg, #FFE8DC 0%, #FFF3E8 100%)",
        textColor: "#2D4059",
        links: {
            pdf: "Papers/SIGCSE26.pdf",
        },
        extraLinks: {},
        awards: [],
        featured: true
    },
    {
        id: 2,
        title: "Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India",
        venue: "ACM CSCW",
        date: "October 2025",
        authors: "Akshay Kolgar Nayak, Yash Prakash, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We present a study on self-reflection strategies among blind and visually impaired (BVI) job seekers in India. Despite gaining digital skills, many face challenges aligning with industry expectations due to limited personalized feedback and inaccessible job-prep tools. Self-reflection is often a social process shaped by peer interactions, yet current systems lack the tailored support needed for effective growth. Our findings inform the design of future tools to better guide reflective job-seeking and address the unique needs of BVI individuals in the Global South.",
        image: "selfReflection", // Corrected image name
        color: "linear-gradient(135deg, #FFE8DC 0%, #FFF3E8 100%)", // Sunset peach gradient
        textColor: "#2D4059", // Deep water blue for text
        links: {
            pdf: "Papers/cscw25.pdf",
            doi: "https://doi.org/10.1145/3757485",
        },
        extraLinks: {},
        acmAuthorizer: {
            url: "https://dl.acm.org/doi/10.1145/3757485?cid=99661242236",
            doi: "10.1145/3757485",
            cid: "99661242236",
        },
        citation: {
            bibtex: `@article{kolgar2025insights,
  title={Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India},
  author={Kolgar Nayak, Akshay and Prakash, Yash and Jayarathna, Sampath and Lee, Hae-Na and Ashok, Vikas},
  journal={Proceedings of the ACM on Human-Computer Interaction},
  volume={9},
  number={7},
  pages={1--30},
  year={2025},
  publisher={ACM New York, NY, USA}
}`,
            apa: "Kolgar Nayak, A., Prakash, Y., Jayarathna, S., Lee, H. N., & Ashok, V. (2025). Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India. Proceedings of the ACM on Human-Computer Interaction, 9(7), 1-30.",
            mla: "Kolgar Nayak, Akshay, et al. \"Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India.\" Proceedings of the ACM on Human-Computer Interaction 9.7 (2025): 1-30.",
            chicago: "Kolgar Nayak, Akshay, Yash Prakash, Sampath Jayarathna, Hae-Na Lee, and Vikas Ashok. \"Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India.\" Proceedings of the ACM on Human-Computer Interaction 9, no. 7 (2025): 1-30.",
            ieee: "A. Kolgar Nayak, Y. Prakash, S. Jayarathna, H. N. Lee, and V. Ashok, \"Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India,\" Proceedings of the ACM on Human-Computer Interaction, vol. 9, no. 7, pp. 1-30, 2025.",
        },
        awards: [],
        featured: true
    },
    {
        id: 3,
        title: "Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews",
        venue: "ACM Web4All",
        date: "April 2025",
        authors: "Mohan Sunkara, Akshay Kolgar Nayak, Sandeep Kalari, Yash Prakash, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We present QuickCue, an assistive browser extension that improves the usability of online restaurant reviews for blind screen reader users. QuickCue restructures review content into a hierarchical format organized by aspects (e.g., food, service, ambiance) and sentiment (positive/negative), enabling faster, more focused exploration with minimal navigation. Powered by GPT-4, it performs aspect-sentiment classification and generates targeted summaries, significantly reducing listening fatigue and helping users make more informed decisions.",
        image: "quickCue", // Image filename in public/Publications folder
        color: "linear-gradient(135deg, #F3E8F8 0%, #F9F0FC 100%)", // Twilight lavender gradient
        textColor: "#2D4059", // Deep water blue
        links: {
            pdf: "Papers/quickCue.pdf",
            doi: "https://doi.org/10.1145/3744257.3744276",
            // project: "https://example.com/accessmenu"
        },
        extraLinks: {
            // github: "https://github.com/username/accessmenu",
        },
        acmAuthorizer: {
            url: "https://dl.acm.org/doi/10.1145/3744257.3744276?cid=99661242236",
            doi: "10.1145/3744257.3744276",
            cid: "99661242236",
        },
        citation: {
            bibtex: `@inproceedings{sunkara2025adapting,
  title={Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews},
  author={Sunkara, Mohan and Kolgar Nayak, Akshay and Kalari, Sandeep and Prakash, Yash and Jayarathna, Sampath and Lee, Hae-Na and Ashok, Vikas},
  booktitle={Proceedings of the 22nd International Web for All Conference},
  pages={135--146},
  year={2025}
}`,
            apa: "Sunkara, M., Kolgar Nayak, A., Kalari, S., Prakash, Y., Jayarathna, S., Lee, H. N., & Ashok, V. (2025). Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews. In Proceedings of the 22nd International Web for All Conference (pp. 135-146).",
            mla: "Sunkara, Mohan, et al. \"Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews.\" Proceedings of the 22nd International Web for All Conference. 2025. 135-146.",
            chicago: "Sunkara, Mohan, Akshay Kolgar Nayak, Sandeep Kalari, Yash Prakash, Sampath Jayarathna, Hae-Na Lee, and Vikas Ashok. \"Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews.\" In Proceedings of the 22nd International Web for All Conference, pp. 135-146, 2025.",
            ieee: "M. Sunkara, A. Kolgar Nayak, S. Kalari, Y. Prakash, S. Jayarathna, H. N. Lee, and V. Ashok, \"Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews,\" in Proceedings of the 22nd International Web for All Conference, 2025, pp. 135-146.",
        },
        awards: [{
            type: "best-paper",
            name: "Best Paper Award"
        }],
        featured: true
    },
    {
        id: 4,
        title: "Towards Enhancing Low Vision Usability of Data Charts on Smartphones",
        venue: "IEEE VIS (TVCG)",
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
        citation: {
            bibtex: `@article{prakash2024towards,
  title={Towards Enhancing Low Vision Usability of Data Charts on Smartphones},
  author={Prakash, Yash and Khan, Pathan Aseef and Nayak, Akshay Kolgar and Jayarathna, Sampath and Lee, Hae-Na and Ashok, Vikas},
  journal={IEEE Transactions on Visualization and Computer Graphics},
  year={2024},
  publisher={IEEE}
}`,
            apa: "Prakash, Y., Khan, P. A., Nayak, A. K., Jayarathna, S., Lee, H. N., & Ashok, V. (2024). Towards Enhancing Low Vision Usability of Data Charts on Smartphones. IEEE Transactions on Visualization and Computer Graphics. IEEE.",
            mla: "Prakash, Yash, et al. \"Towards Enhancing Low Vision Usability of Data Charts on Smartphones.\" IEEE Transactions on Visualization and Computer Graphics (2024).",
            chicago: "Prakash, Yash, Pathan Aseef Khan, Akshay Kolgar Nayak, Sampath Jayarathna, Hae-Na Lee, and Vikas Ashok. \"Towards Enhancing Low Vision Usability of Data Charts on Smartphones.\" IEEE Transactions on Visualization and Computer Graphics (2024).",
            ieee: "Y. Prakash, P. A. Khan, A. K. Nayak, S. Jayarathna, H. N. Lee, and V. Ashok, \"Towards Enhancing Low Vision Usability of Data Charts on Smartphones,\" IEEE Transactions on Visualization and Computer Graphics, 2024.",
        },
        awards: [],
        featured: true
    }
];

// Citation Dialog Component
const CitationDialog = ({ open, onClose, citation }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [copiedFormat, setCopiedFormat] = useState(null);

    const formats = [
        { label: 'BibTeX', value: citation?.bibtex || '', key: 'bibtex' },
        { label: 'APA', value: citation?.apa || '', key: 'apa' },
        { label: 'MLA', value: citation?.mla || '', key: 'mla' },
        { label: 'Chicago', value: citation?.chicago || '', key: 'chicago' },
        { label: 'IEEE', value: citation?.ieee || '', key: 'ieee' },
    ];

    const handleCopy = (text, formatKey) => {
        navigator.clipboard.writeText(text);
        setCopiedFormat(formatKey);
        setTimeout(() => setCopiedFormat(null), 2000);
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(45, 64, 89, 0.2)',
                }
            }}
        >
            <DialogTitle sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pb: 2,
                borderBottom: '1px solid rgba(45, 64, 89, 0.1)'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FormatQuoteIcon sx={{ color: '#1565C0', fontSize: '1.5rem' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#2D4059' }}>
                        Cite this article
                    </Typography>
                </Box>
                <IconButton
                    onClick={onClose}
                    size="small"
                    sx={{
                        color: '#5A7CA1',
                        '&:hover': { backgroundColor: 'rgba(90, 124, 161, 0.1)' }
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ pt: 3 }}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    sx={{
                        mb: 3,
                        '& .MuiTab-root': {
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            color: '#5A7CA1',
                            minWidth: 'auto',
                            px: 3,
                            '&.Mui-selected': {
                                color: '#1565C0',
                            }
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#1565C0',
                            height: 3,
                            borderRadius: '3px 3px 0 0'
                        }
                    }}
                >
                    {formats.map((format) => (
                        <Tab key={format.key} label={format.label} />
                    ))}
                </Tabs>

                {formats.map((format, index) => (
                    selectedTab === index && (
                        <Box key={format.key} sx={{ position: 'relative' }}>
                            <Box
                                sx={{
                                    backgroundColor: '#F5F7FA',
                                    border: '1px solid rgba(45, 64, 89, 0.1)',
                                    borderRadius: '12px',
                                    p: 3,
                                    fontFamily: 'monospace',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.6,
                                    color: '#2D4059',
                                    whiteSpace: 'pre-wrap',
                                    wordBreak: 'break-word',
                                    maxHeight: '300px',
                                    overflowY: 'auto',
                                    position: 'relative',
                                }}
                            >
                                {format.value}
                            </Box>
                            <Button
                                startIcon={copiedFormat === format.key ? <CheckIcon /> : <ContentCopyIcon />}
                                onClick={() => handleCopy(format.value, format.key)}
                                variant="contained"
                                size="small"
                                sx={{
                                    mt: 2,
                                    backgroundColor: copiedFormat === format.key ? '#1B5E20' : '#1565C0',
                                    color: 'white',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    borderRadius: '8px',
                                    px: 3,
                                    '&:hover': {
                                        backgroundColor: copiedFormat === format.key ? '#2E7D32' : '#0D47A1',
                                    }
                                }}
                            >
                                {copiedFormat === format.key ? 'Copied!' : 'Copy to clipboard'}
                            </Button>
                        </Box>
                    )
                ))}
            </DialogContent>
        </Dialog>
    );
};

// ACM Author-Izer Button Component
const ACMAuthorizerButton = ({ acmData }) => {
    const [stats, setStats] = useState({
        downloads: null,
        citations: null,
        loading: true,
        error: false
    });

    useEffect(() => {
        // Fetch ACM statistics
        const fetchACMStats = async () => {
            try {
                // ACM provides stats through their API or embedded script
                // Note: This may fail in localhost due to CORS restrictions
                const response = await fetch(`https://dl.acm.org/action/ajaxShowCitedBy?doi=${acmData.doi}`, {
                    mode: 'cors',
                    credentials: 'omit',
                });

                if (response.ok) {
                    const data = await response.json();
                    setStats({
                        citations: data.citationCount || null,
                        downloads: data.downloadCount || null,
                        loading: false,
                        error: false
                    });
                } else {
                    // API request failed, use placeholder
                    setStats({ citations: null, downloads: null, loading: false, error: true });
                }
            } catch (error) {
                // CORS or network error - common in localhost
                // Silently fail and show button without stats
                setStats({ citations: null, downloads: null, loading: false, error: true });
            }
        };

        if (acmData && acmData.doi) {
            // Add a small delay to avoid hammering the API
            const timer = setTimeout(() => {
                fetchACMStats();
            }, 100);

            return () => clearTimeout(timer);
        } else {
            setStats({ citations: null, downloads: null, loading: false, error: false });
        }
    }, [acmData]);

    return (
        <Tooltip
            title="Access on ACM Digital Library (free via Author-Izer)"
            arrow
            placement="top"
        >
            <Button
                component="a"
                href={acmData.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    minWidth: 'auto',
                    backgroundColor: 'transparent',
                    color: '#0085CA',
                    borderRadius: '50%',
                    width: '44px',
                    height: '44px',
                    p: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(0, 133, 202, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 133, 202, 0.08)',
                        borderColor: '#0085CA',
                        transform: 'scale(1.1)',
                        boxShadow: '0 4px 12px rgba(0, 133, 202, 0.2)',
                    },
                }}
            >
                <Box
                    component="img"
                    src="/Icons/dl.png"
                    alt="ACM DL"
                    sx={{
                        height: '22px',
                        width: 'auto',
                    }}
                />
            </Button>
        </Tooltip>
    );
};

// Conference/Journal with custom publisher icon
const VenueInfo = ({ venue, date, publisher }) => {
    // Check if venue is ACM-related
    const isACM = venue && (venue.includes('ACM') || venue.includes('SIGACCESS') || venue.includes('SIGCSE') || venue.includes('CSCW') || venue.includes('EICS') || venue.includes('Web4All') || venue.includes('ICMI') || venue.includes('ASSETS'));

    let icon;

    if (isACM) {
        // Use ACM logo for ACM conferences
        icon = (
            <Box
                component="img"
                src="/Icons/acm.png"
                alt="ACM"
                sx={{
                    height: '16px',
                    width: 'auto',
                    mr: 1,
                    display: 'inline-block',
                    verticalAlign: 'middle'
                }}
            />
        );
    } else if (publisher) {
        // If publisher is specified, use a custom image icon
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
    } else {
        // Default icon is SchoolIcon
        icon = <SchoolIcon sx={{ fontSize: '1rem', mr: 1, color: '#424242' }} />;
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
    const [citationDialogOpen, setCitationDialogOpen] = useState(false);

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
                    backgroundColor: publication.venue && publication.venue.includes('IEEE')
                        ? 'rgba(0, 114, 206, 0.1)'
                        : 'rgba(21, 101, 192, 0.1)',
                    px: 2,
                    py: 1,
                    borderRadius: '12px',
                    width: 'fit-content',
                    border: publication.venue && publication.venue.includes('IEEE')
                        ? '1px solid rgba(0, 114, 206, 0.2)'
                        : '1px solid rgba(21, 101, 192, 0.2)'
                }}>
                    {publication.venue && (publication.venue.includes('ACM') || publication.venue.includes('SIGACCESS') || publication.venue.includes('SIGCSE') || publication.venue.includes('CSCW') || publication.venue.includes('EICS') || publication.venue.includes('Web4All') || publication.venue.includes('ICMI') || publication.venue.includes('ASSETS')) ? (
                        <Box
                            component="img"
                            src="/Icons/acm.png"
                            alt="ACM"
                            sx={{
                                height: '16px',
                                width: 'auto',
                                mr: 1,
                            }}
                        />
                    ) : publication.venue && publication.venue.includes('IEEE') ? (
                        <Box
                            component="img"
                            src="/Icons/ieee.png"
                            alt="IEEE"
                            sx={{
                                height: '16px',
                                width: 'auto',
                                mr: 1,
                            }}
                        />
                    ) : publication.venue && publication.venue.includes('IJHCI') ? (
                        <Box
                            component="img"
                            src="/News/taylorFrancis.png"
                            alt="Taylor & Francis"
                            sx={{
                                height: '16px',
                                width: 'auto',
                                mr: 1,
                            }}
                        />
                    ) : (
                        <SchoolIcon sx={{
                            fontSize: '1.1rem',
                            mr: 1,
                            color: publication.venue && publication.venue.includes('IEEE') ? '#0072CE' : '#1565C0'
                        }} />
                    )}
                    <Typography
                        variant="body2"
                        sx={{
                            color: publication.venue && publication.venue.includes('IEEE') ? '#0072CE' : '#1565C0',
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

                {/* Action Buttons - Elegant Icon Design */}
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    mt: 'auto',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                    {publication.links.pdf && (
                        <Tooltip title="Download PDF" arrow placement="top">
                            <Button
                                component="a"
                                href={publication.links.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    minWidth: 'auto',
                                    backgroundColor: 'transparent',
                                    color: '#FF6B35',
                                    borderRadius: '50%',
                                    width: '44px',
                                    height: '44px',
                                    p: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid rgba(255, 107, 53, 0.2)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 107, 53, 0.08)',
                                        borderColor: '#FF6B35',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 4px 12px rgba(255, 107, 53, 0.2)',
                                    },
                                }}
                            >
                                <DescriptionIcon sx={{ fontSize: '1.3rem' }} />
                            </Button>
                        </Tooltip>
                    )}
                    {publication.links.doi && (
                        <Tooltip title="View DOI" arrow placement="top">
                            <Button
                                component="a"
                                href={publication.links.doi}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    minWidth: 'auto',
                                    backgroundColor: 'transparent',
                                    color: '#1565C0',
                                    borderRadius: '50%',
                                    width: '44px',
                                    height: '44px',
                                    p: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid rgba(21, 101, 192, 0.2)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(21, 101, 192, 0.08)',
                                        borderColor: '#1565C0',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 4px 12px rgba(21, 101, 192, 0.2)',
                                    },
                                }}
                            >
                                <LinkIcon sx={{ fontSize: '1.3rem' }} />
                            </Button>
                        </Tooltip>
                    )}
                    {publication.links.project && (
                        <Tooltip title="Project Page" arrow placement="top">
                            <Button
                                component="a"
                                href={publication.links.project}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    minWidth: 'auto',
                                    backgroundColor: 'transparent',
                                    color: '#7B1FA2',
                                    borderRadius: '50%',
                                    width: '44px',
                                    height: '44px',
                                    p: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid rgba(123, 31, 162, 0.2)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(123, 31, 162, 0.08)',
                                        borderColor: '#7B1FA2',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 4px 12px rgba(123, 31, 162, 0.2)',
                                    },
                                }}
                            >
                                <WebIcon sx={{ fontSize: '1.3rem' }} />
                            </Button>
                        </Tooltip>
                    )}
                    {publication.citation && (
                        <Tooltip title="Cite this article" arrow placement="top">
                            <Button
                                onClick={() => setCitationDialogOpen(true)}
                                sx={{
                                    minWidth: 'auto',
                                    backgroundColor: 'transparent',
                                    color: '#1B5E20',
                                    borderRadius: '50%',
                                    width: '44px',
                                    height: '44px',
                                    p: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid rgba(27, 94, 32, 0.2)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(27, 94, 32, 0.08)',
                                        borderColor: '#1B5E20',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 4px 12px rgba(27, 94, 32, 0.2)',
                                    },
                                }}
                            >
                                <FormatQuoteIcon sx={{ fontSize: '1.3rem' }} />
                            </Button>
                        </Tooltip>
                    )}
                    {publication.acmAuthorizer && (
                        <ACMAuthorizerButton acmData={publication.acmAuthorizer} />
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

            {/* Citation Dialog */}
            {publication.citation && (
                <CitationDialog
                    open={citationDialogOpen}
                    onClose={() => setCitationDialogOpen(false)}
                    citation={publication.citation}
                />
            )}
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

                {/* All Publications Link - only show on homepage */}
                {!isStandalonePage && (
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 6
                    }}>
                        <Button
                            component={NextLink}
                            href="/publications"
                            variant="outlined"
                            size="large"
                            sx={{
                                color: '#1565C0',
                                borderColor: '#1565C0',
                                borderWidth: '2px',
                                borderRadius: '12px',
                                px: 4,
                                py: 1.5,
                                fontSize: '1.05rem',
                                fontWeight: 600,
                                textTransform: 'none',
                                boxShadow: '0 4px 12px rgba(21, 101, 192, 0.15)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#1565C0',
                                    color: 'white',
                                    borderColor: '#1565C0',
                                    borderWidth: '2px',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(21, 101, 192, 0.25)',
                                }
                            }}
                        >
                            View All Publications →
                        </Button>
                    </Box>
                )}
            </Container>
        </Box>
    );
}