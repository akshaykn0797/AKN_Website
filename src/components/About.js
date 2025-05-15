// src/components/About.js
'use client';

import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Link,
    Divider,
    useTheme,
    useMediaQuery
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';

export default function About() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'), {
        noSsr: true,
    });

    // Client-side only rendering state
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Box
            id="about"
            sx={{
                py: { xs: 6, md: 8 },
                pb: { xs: 2, md: 4 }, // Reduced bottom padding
                backgroundColor: '#f5f5f7', // Match background with News component
            }}
        >
            <Container maxWidth="lg">
                <div suppressHydrationWarning>
                    {mounted ? (
                        <Box>
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 } }}>
                                {/* Left side - Image, CV, Social Icons */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: { xs: 'center', md: 'flex-start' },
                                        width: { xs: '100%', md: '33%' },
                                    }}
                                >
                                    {/* Profile Image */}
                                    <Box
                                        sx={{
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            width: { xs: '70%', sm: '60%', md: '100%' },
                                            maxWidth: '400px',
                                            mb: 3,
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src="/akn.jpeg"
                                            alt="Akshay"
                                            sx={{
                                                width: '100%',
                                                display: 'block',
                                            }}
                                        />
                                    </Box>

                                    {/* CV & Google Scholar Links */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: 1.5,
                                            mb: 3,
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Link
                                            href="/akn_Resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                color: '#3A59D1',
                                                textDecoration: 'none',
                                                fontWeight: 600,
                                                '&:hover': {
                                                    textDecoration: 'underline'
                                                }
                                            }}
                                        >
                                            CV
                                        </Link>
                                        <Typography sx={{ color: '#666' }}>|</Typography>
                                        <Link
                                            href="https://scholar.google.com/citations?user=4CzwdXAAAAAJ&hl=en&oi=ao"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                color: '#3A59D1',
                                                textDecoration: 'none',
                                                fontWeight: 600,
                                                '&:hover': {
                                                    textDecoration: 'underline'
                                                }
                                            }}
                                        >
                                            Google Scholar
                                        </Link>
                                    </Box>

                                    {/* Social Media Icons */}
                                    <Box sx={{ display: 'flex', gap: 3 }}>
                                        <Link
                                            href="mailto:anaya001@odu.edu"
                                            aria-label="Email"
                                            sx={{ color: '#333' }}
                                        >
                                            <EmailIcon fontSize="medium" />
                                        </Link>
                                        <Link
                                            href="https://www.linkedin.com/in/akshay-k-nayak-610186186/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                            sx={{ color: '#0077b5' }}
                                        >
                                            <LinkedInIcon fontSize="medium" />
                                        </Link>
                                        <Link
                                            href="https://x.com/AkshayKNayak7"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Twitter"
                                            sx={{ color: '#333' }}
                                        >
                                            <XIcon fontSize="medium" />
                                        </Link>
                                        {/* <Link
                                            href="https://instagram.com/yourusername"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                            sx={{ color: '#e4405f' }}
                                        >
                                            <InstagramIcon fontSize="medium" />
                                        </Link> */}
                                        <Link
                                            href="https://github.com/akshaykn0797"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                            sx={{ color: '#333' }}
                                        >
                                            <GitHubIcon fontSize="medium" />
                                        </Link>
                                    </Box>
                                </Box>

                                {/* Right side - About Text */}
                                <Box
                                    sx={{
                                        width: { xs: '100%', md: '67%' },
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        component="h2"
                                        sx={{ mb: 4, fontWeight: 700 }}
                                    >
                                        About
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                                        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                            Akshay is a researcher and engineer based in Norfolk, Virginia, currently pursuing a Ph.D. at{' '}
                                            <Link
                                                href="https://www.odu.edu/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#3A59D1', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                            >
                                                Old Dominion University
                                            </Link>
                                            {' '}in the{' '}
                                            <Link
                                                href="https://www.cs.odu.edu/~vashok/Lab/index.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#3A59D1', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                            >
                                                Accessible Computing Lab
                                            </Link>
                                            , advised by{' '}
                                            <Link
                                                href="https://www.cs.odu.edu/~vashok/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#3A59D1', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                            >
                                                Dr. Vikas Ashok
                                            </Link>
                                            . His interdisciplinary work bridges Human-Centered AI, Accessibility, Usability, Eye Tracking, and Social Computing, with a focus on developing intelligent solutions to improve the usability and accessibility of digital technologies. He has conducted research across various domains, including data visualizations, e-commerce platforms, user-generated content (such as discussion forums and reviews), web archives, and social computing systems. His work has been published in top-tier HCI venues such as CSCW, IEEE VIS (TVCG), ASSETS, ICMI, and EICS (PACMHCI).
                                        </Typography>

                                        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                            Akshay earned his bachelor's degree from{' '}
                                            <Link
                                                href="https://vtu.ac.in/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#3A59D1', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                            >
                                                Visvesvaraya Technological University (VTU)
                                            </Link>
                                            . Before beginning his doctoral studies, he worked as a Research Assistant at the{' '}
                                            <Link
                                                href="https://www.cs.odu.edu/~vashok/Lab/index.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#3A59D1', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                            >
                                                HandsOn Lab
                                            </Link>
                                            {' '}and as a Software Engineer at the{' '}
                                            <Link
                                                href="https://www.lseg.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#3A59D1', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                            >
                                                London Stock Exchange Group (LSEG)
                                            </Link>
                                            {' '}and{' '}
                                            <Link
                                                href="https://www.betanxt.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#3A59D1', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                            >
                                                BetaNXT
                                            </Link>
                                            .
                                        </Typography>

                                        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                            His most recent research focuses on adapting technologies originally developed in affluent settings to support reliable information access for resource-constrained populations, and on designing eye-tracking-based solutions to enhance the usability of dynamic digital content for individuals with low vision.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Bottom divider - REMOVED */}
                        </Box>
                    ) : (
                        // Simple placeholder while client-side rendering is happening
                        <Box sx={{ height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* Optional loading state */}
                        </Box>
                    )}
                </div>
            </Container>
        </Box>
    );
}