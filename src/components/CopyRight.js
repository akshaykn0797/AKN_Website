'use client';

import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Copyright() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                mt: 'auto',
                textAlign: 'center',
                borderTop: '1px solid',
                borderColor: 'divider'
            }}
        >
            <Typography variant="body2" color="text.secondary">
                © {currentYear} Akshay K Nayak •{' '}
                <Link href="mailto:anaya001@odu.edu" color="inherit">
                    anaya001@odu.edu
                </Link>
            </Typography>
        </Box>
    );
}
