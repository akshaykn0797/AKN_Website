'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import AllPublications from '@/components/AllPublications';

export default function PublicationsPage() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(to bottom, #FFF3E8 0%, #F3E8F8 100%)',
                pt: { xs: 10, md: 12 },
                pb: { xs: 6, md: 8 },
            }}
        >
            <Container maxWidth="lg">
                {/* Page Header */}
                <Box sx={{ mb: { xs: 4, md: 6 }, pt: 4 }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 800,
                            color: '#2D4059',
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            letterSpacing: '-0.02em',
                            mb: 2,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: '-12px',
                                left: 0,
                                width: '80px',
                                height: '5px',
                                background: 'linear-gradient(90deg, #FF6B35, #FF8C42)',
                                borderRadius: '2px'
                            }
                        }}
                    >
                        Publications
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#5A7CA1',
                            fontWeight: 400,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            mt: 3
                        }}
                    >
                        Research in Human-Centered AI, Accessibility, and Social Computing
                    </Typography>
                </Box>

                {/* All Publications List */}
                <AllPublications />
            </Container>
        </Box>
    );
}
