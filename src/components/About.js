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
                py: { xs: 6, md: 10 },
                pb: { xs: 8, md: 12 },
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(to bottom, #FFF8F3 0%, #FFE8DC 100%)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '40%',
                    height: '60%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-5%',
                    width: '35%',
                    height: '50%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(90, 124, 161, 0.06) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                }
            }}
        >
            <Container maxWidth="lg">
                <div suppressHydrationWarning>
                    {mounted ? (
                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 5, md: 8 }, alignItems: 'flex-start' }}>
                                {/* Left side - Image & Quick Actions */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: { xs: 'center', md: 'flex-start' },
                                        width: { xs: '100%', md: '32%' },
                                        position: 'sticky',
                                        top: 100,
                                    }}
                                >
                                    {/* Profile Image with decorative elements */}
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: { xs: '75%', sm: '65%', md: '100%' },
                                            maxWidth: '350px',
                                            mb: 4,
                                        }}
                                    >
                                        {/* Decorative background circle */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '-8px',
                                                left: '-8px',
                                                right: '-8px',
                                                bottom: '-8px',
                                                borderRadius: '24px',
                                                background: 'linear-gradient(135deg, #1B5E2020, #5A7CA120)',
                                                zIndex: 0,
                                            }}
                                        />

                                        <Box
                                            sx={{
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                position: 'relative',
                                                boxShadow: '0 12px 40px rgba(45, 64, 89, 0.12)',
                                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                '&:hover': {
                                                    transform: 'scale(1.02)',
                                                    boxShadow: '0 16px 48px rgba(45, 64, 89, 0.18)',
                                                }
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src="/akn.jpeg"
                                                alt="Akshay K Nayak"
                                                sx={{
                                                    width: '100%',
                                                    display: 'block',
                                                }}
                                            />
                                        </Box>
                                    </Box>

                                    {/* Quick Links - Compact & Elegant */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: 2,
                                            mb: 3,
                                            width: '100%',
                                            justifyContent: { xs: 'center', md: 'flex-start' },
                                            flexWrap: 'wrap'
                                        }}
                                    >
                                        <Box
                                            component={Link}
                                            href="/akn_Resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 0.5,
                                                color: '#1B5E20',
                                                textDecoration: 'none',
                                                fontWeight: 600,
                                                fontSize: '0.9rem',
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    color: '#2E7D32',
                                                    transform: 'translateX(2px)',
                                                }
                                            }}
                                        >
                                            <DescriptionIcon sx={{ fontSize: '1.1rem' }} />
                                            CV
                                        </Box>
                                        <Typography sx={{ color: '#2D4059', opacity: 0.3 }}>|</Typography>
                                        <Box
                                            component={Link}
                                            href="https://scholar.google.com/citations?user=4CzwdXAAAAAJ&hl=en&oi=ao"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: 0.5,
                                                color: '#5A7CA1',
                                                textDecoration: 'none',
                                                fontWeight: 600,
                                                fontSize: '0.9rem',
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    color: '#4A5899',
                                                    transform: 'translateX(2px)',
                                                }
                                            }}
                                        >
                                            <SchoolIcon sx={{ fontSize: '1.1rem' }} />
                                            Scholar
                                        </Box>
                                    </Box>

                                    {/* Social Media Icons - Minimalist circles */}
                                    <Box sx={{
                                        display: 'flex',
                                        gap: 1.5,
                                        justifyContent: { xs: 'center', md: 'flex-start' }
                                    }}>
                                        <Box
                                            component={Link}
                                            href="mailto:anaya001@odu.edu"
                                            aria-label="Email"
                                            sx={{
                                                width: 42,
                                                height: 42,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                color: '#1B5E20',
                                                backdropFilter: 'blur(10px)',
                                                boxShadow: '0 2px 8px rgba(27, 94, 32, 0.15)',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#1B5E20',
                                                    color: 'white',
                                                    transform: 'translateY(-3px) scale(1.05)',
                                                    boxShadow: '0 6px 16px rgba(27, 94, 32, 0.3)'
                                                }
                                            }}
                                        >
                                            <EmailIcon fontSize="small" />
                                        </Box>
                                        <Box
                                            component={Link}
                                            href="https://www.linkedin.com/in/akshay-k-nayak-610186186/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                            sx={{
                                                width: 42,
                                                height: 42,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                color: '#4A5899',
                                                backdropFilter: 'blur(10px)',
                                                boxShadow: '0 2px 8px rgba(74, 88, 153, 0.15)',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#4A5899',
                                                    color: 'white',
                                                    transform: 'translateY(-3px) scale(1.05)',
                                                    boxShadow: '0 6px 16px rgba(74, 88, 153, 0.3)'
                                                }
                                            }}
                                        >
                                            <LinkedInIcon fontSize="small" />
                                        </Box>
                                        <Box
                                            component={Link}
                                            href="https://x.com/AkshayKNayak7"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Twitter"
                                            sx={{
                                                width: 42,
                                                height: 42,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                color: '#2D4059',
                                                backdropFilter: 'blur(10px)',
                                                boxShadow: '0 2px 8px rgba(45, 64, 89, 0.15)',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#2D4059',
                                                    color: 'white',
                                                    transform: 'translateY(-3px) scale(1.05)',
                                                    boxShadow: '0 6px 16px rgba(45, 64, 89, 0.3)'
                                                }
                                            }}
                                        >
                                            <XIcon fontSize="small" />
                                        </Box>
                                        <Box
                                            component={Link}
                                            href="https://github.com/akshaykn0797"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                            sx={{
                                                width: 42,
                                                height: 42,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                color: '#2D4059',
                                                backdropFilter: 'blur(10px)',
                                                boxShadow: '0 2px 8px rgba(45, 64, 89, 0.15)',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#2D4059',
                                                    color: 'white',
                                                    transform: 'translateY(-3px) scale(1.05)',
                                                    boxShadow: '0 6px 16px rgba(45, 64, 89, 0.3)'
                                                }
                                            }}
                                        >
                                            <GitHubIcon fontSize="small" />
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Right side - Bio with flowing design */}
                                <Box
                                    sx={{
                                        width: { xs: '100%', md: '68%' },
                                    }}
                                >
                                    {/* Section title with decorative line */}
                                    <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography
                                            variant="h3"
                                            component="h2"
                                            sx={{
                                                fontWeight: 800,
                                                color: '#2D4059',
                                                fontSize: { xs: '2rem', md: '2.5rem' },
                                                letterSpacing: '-0.02em'
                                            }}
                                        >
                                            About
                                        </Typography>
                                        <Box
                                            sx={{
                                                flex: 1,
                                                height: '3px',
                                                background: 'linear-gradient(90deg, #1B5E20, transparent)',
                                                borderRadius: '2px'
                                            }}
                                        />
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                lineHeight: 1.85,
                                                fontSize: '1.05rem',
                                                color: '#2D4059',
                                                opacity: 0.95
                                            }}
                                        >
                                            Akshay is a researcher and engineer based in Norfolk, Virginia, currently pursuing a Ph.D. at{' '}
                                            <Link
                                                href="https://www.odu.edu/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#1B5E20', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: '#2E7D32' } }}
                                            >
                                                Old Dominion University
                                            </Link>
                                            {' '}in the{' '}
                                            <Link
                                                href="https://www.cs.odu.edu/~vashok/Lab/index.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#1B5E20', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: '#2E7D32' } }}
                                            >
                                                Accessible Computing Lab
                                            </Link>
                                            , advised by{' '}
                                            <Link
                                                href="https://www.cs.odu.edu/~vashok/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#1B5E20', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: '#2E7D32' } }}
                                            >
                                                Dr. Vikas Ashok
                                            </Link>
                                            . His interdisciplinary work bridges Human-Centered AI, Accessibility, Usability, Eye Tracking, and Social Computing, with a focus on developing intelligent solutions to improve the usability and accessibility of digital technologies. He has conducted research across various domains, including data visualizations, e-commerce platforms, user-generated content (such as discussion forums and reviews), web archives, and social computing systems. His most recent research focuses on adapting technologies originally developed in affluent settings to support reliable information access for resource-constrained populations, and on designing eye-tracking-based solutions to enhance the usability of dynamic digital content for individuals with low vision. His work has been published in top-tier HCI venues such as CSCW, SIGCSE TS, IEEE VIS (TVCG), IJHCI, ASSETS, ICMI, and EICS (PACMHCI).
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                lineHeight: 1.85,
                                                fontSize: '1.05rem',
                                                color: '#2D4059',
                                                opacity: 0.95
                                            }}
                                        >
                                            Akshay earned his bachelor's degree from{' '}
                                            <Link
                                                href="https://vtu.ac.in/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#1B5E20', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: '#2E7D32' } }}
                                            >
                                                Visvesvaraya Technological University (VTU)
                                            </Link>
                                            . Before beginning his doctoral studies, he worked as a Research Assistant at the{' '}
                                            <Link
                                                href="https://www.cs.odu.edu/~vashok/Lab/index.html"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#1B5E20', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: '#2E7D32' } }}
                                            >
                                                HandsOn Lab
                                            </Link>
                                            {' '}and as a Software Engineer at the{' '}
                                            <Link
                                                href="https://www.lseg.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#1B5E20', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: '#2E7D32' } }}
                                            >
                                                London Stock Exchange Group (LSEG)
                                            </Link>
                                            {' '}and{' '}
                                            <Link
                                                href="https://www.betanxt.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: '#1B5E20', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: '#2E7D32' } }}
                                            >
                                                BetaNXT
                                            </Link>
                                            .
                                        </Typography>

                                        {/* Internship Opportunity Highlight */}
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                mt: 1,
                                                pl: 3,
                                                py: 0.5,
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 0,
                                                    bottom: 0,
                                                    width: '4px',
                                                    background: 'linear-gradient(180deg, #1B5E20, #2E7D32)',
                                                    borderRadius: '2px'
                                                }
                                            }}
                                        >
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    lineHeight: 1.85,
                                                    fontSize: '1.08rem',
                                                    color: '#2D4059',
                                                    fontWeight: 500,
                                                    fontStyle: 'italic'
                                                }}
                                            >
                                                I am actively seeking internship opportunities for 2026.
                                            </Typography>
                                        </Box>
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