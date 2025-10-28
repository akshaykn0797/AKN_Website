'use client';

import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';

export default function AcademicPage() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(to bottom, #FFF3E8 0%, #F3E8F8 100%)',
                pt: { xs: 12, md: 12 },
                pb: { xs: 6, md: 8 },
            }}
        >
            <Container maxWidth="lg">
                {/* Page Header */}
                <Box sx={{ mb: { xs: 4, md: 5 } }}>
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
                        Academic Profile
                    </Typography>
                </Box>

                {/* Teaching Experiences */}
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            color: '#2D4059',
                            mb: 3,
                            fontSize: { xs: '1.8rem', md: '2rem' }
                        }}
                    >
                        Teaching Experiences
                    </Typography>

                    <Box sx={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        p: { xs: 3, md: 4 },
                        boxShadow: '0 2px 8px rgba(45, 64, 89, 0.08)',
                        border: '1px solid rgba(255, 243, 232, 0.8)',
                        borderLeft: '4px solid rgba(255, 214, 186, 0.9)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            boxShadow: '0 4px 16px rgba(45, 64, 89, 0.12)',
                            borderLeftColor: 'rgba(255, 176, 136, 1)',
                            transform: 'translateY(-2px)',
                        }
                    }}>
                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 1, flexWrap: 'wrap', gap: 1 }}>
                                <Typography sx={{ fontWeight: 700, color: '#2D4059', fontSize: '1.05rem' }}>
                                    CS121G – Information Literacy and Research
                                </Typography>
                                <Typography sx={{ fontWeight: 600, color: '#FF6B35', fontSize: '0.95rem' }}>
                                    Jan 2024 – Present
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 1 }}>
                                <Typography sx={{ fontWeight: 700, color: '#2D4059', fontSize: '1.05rem' }}>
                                    CS733 - Natural Language Processing (NLP)
                                </Typography>
                                <Typography sx={{ fontWeight: 600, color: '#FF6B35', fontSize: '0.95rem' }}>
                                    Jan 2024 – May 2024
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Invited Talks */}
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            color: '#2D4059',
                            mb: 3,
                            fontSize: { xs: '1.8rem', md: '2rem' }
                        }}
                    >
                        Invited Talks
                    </Typography>

                    <Box sx={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        p: { xs: 3, md: 4 },
                        boxShadow: '0 2px 8px rgba(45, 64, 89, 0.08)',
                        border: '1px solid rgba(255, 240, 235, 0.8)',
                        borderLeft: '4px solid rgba(255, 210, 195, 0.9)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            boxShadow: '0 4px 16px rgba(45, 64, 89, 0.12)',
                            borderLeftColor: 'rgba(255, 180, 155, 1)',
                            transform: 'translateY(-2px)',
                        }
                    }}>
                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'baseline', mb: 1 }}>
                                <Typography sx={{ fontWeight: 700, color: '#FF6B35', minWidth: '80px', fontSize: '0.95rem' }}>
                                    2025
                                </Typography>
                                <Typography sx={{ color: '#2D4059', fontSize: '1rem', lineHeight: 1.6 }}>
                                    Understanding Usability in Multimodal Documents: Case study of Hotel Menus, Web Science and Digital Libraries (WS-DL) Expo, Old Dominion University, Invited by Dr. Michael Nelson
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'baseline', mb: 1 }}>
                                <Typography sx={{ fontWeight: 700, color: '#FF6B35', minWidth: '80px', fontSize: '0.95rem' }}>
                                    May 2024
                                </Typography>
                                <Typography sx={{ color: '#2D4059', fontSize: '1rem', lineHeight: 1.6 }}>
                                    Accessibility and Usability of Web Archives, Global Accessibility and Awareness Day (GAAD), Invited by Old Dominion University
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'baseline', mb: 1 }}>
                                <Typography sx={{ fontWeight: 700, color: '#FF6B35', minWidth: '80px', fontSize: '0.95rem' }}>
                                    May 2024
                                </Typography>
                                <Typography sx={{ color: '#2D4059', fontSize: '1rem', lineHeight: 1.6 }}>
                                    Natural Language Processing with Transformers, ODU Data Science Bootcamp, Invited by Old Dominion University (Guest Lecture)
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'baseline', mb: 1 }}>
                                <Typography sx={{ fontWeight: 700, color: '#FF6B35', minWidth: '80px', fontSize: '0.95rem' }}>
                                    2023
                                </Typography>
                                <Typography sx={{ color: '#2D4059', fontSize: '1rem', lineHeight: 1.6 }}>
                                    Adapting to the US graduate education system, Old Dominion University, Invited by Dr. Michele C Weigle
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box>
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'baseline' }}>
                                <Typography sx={{ fontWeight: 700, color: '#FF6B35', minWidth: '80px', fontSize: '0.95rem' }}>
                                    2023
                                </Typography>
                                <Typography sx={{ color: '#2D4059', fontSize: '1rem', lineHeight: 1.6 }}>
                                    Understanding EEG headsets with Emotiv, Old Dominion University, Invited by Prof. Ajay Gupta
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Mentorship */}
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            color: '#2D4059',
                            mb: 3,
                            fontSize: { xs: '1.8rem', md: '2rem' }
                        }}
                    >
                        Mentorship
                    </Typography>

                    <Box sx={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        p: { xs: 3, md: 4 },
                        boxShadow: '0 2px 8px rgba(45, 64, 89, 0.08)',
                        border: '1px solid rgba(252, 237, 240, 0.8)',
                        borderLeft: '4px solid rgba(248, 215, 225, 0.9)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            boxShadow: '0 4px 16px rgba(45, 64, 89, 0.12)',
                            borderLeftColor: 'rgba(243, 190, 210, 1)',
                            transform: 'translateY(-2px)',
                        }
                    }}>
                        {[
                            { date: 'Aug 2025', name: 'Fuka Ogawa', role: 'Exchange Student, Old Dominion University' },
                            { date: 'Jun 2024', name: 'Stefania Dzhaman', role: 'REU Student, Old Dominion University' },
                            { date: 'Aug 2023', name: 'Samhitha Holla', role: 'Visiting Research Intern, Old Dominion University' },
                            { date: 'Aug 2023', name: 'Varsha S Anand', role: 'Visiting Research Intern, Old Dominion University' },
                            { date: 'Aug 2023', name: 'Sanjana J Bharadwaj', role: 'Visiting Research Intern, Old Dominion University' },
                        ].map((mentee, index, array) => (
                            <Box key={index}>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'baseline', mb: index < array.length - 1 ? 2 : 0 }}>
                                    <Typography sx={{ fontWeight: 700, color: '#FF6B35', minWidth: '80px', fontSize: '0.95rem' }}>
                                        {mentee.date}
                                    </Typography>
                                    <Box>
                                        <Typography sx={{ fontWeight: 700, color: '#2D4059', fontSize: '1rem' }}>
                                            {mentee.name}
                                        </Typography>
                                        <Typography sx={{ color: '#5A7CA1', fontSize: '0.95rem' }}>
                                            {mentee.role}
                                        </Typography>
                                    </Box>
                                </Box>
                                {index < array.length - 1 && <Divider sx={{ my: 2 }} />}
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Community Services */}
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            color: '#2D4059',
                            mb: 3,
                            fontSize: { xs: '1.8rem', md: '2rem' }
                        }}
                    >
                        Community Services
                    </Typography>

                    <Box sx={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        p: { xs: 3, md: 4 },
                        boxShadow: '0 2px 8px rgba(45, 64, 89, 0.08)',
                        border: '1px solid rgba(248, 235, 245, 0.8)',
                        borderLeft: '4px solid rgba(240, 215, 235, 0.9)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            boxShadow: '0 4px 16px rgba(45, 64, 89, 0.12)',
                            borderLeftColor: 'rgba(230, 190, 220, 1)',
                            transform: 'translateY(-2px)',
                        }
                    }}>
                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography sx={{ fontWeight: 700, color: '#2D4059', mb: 1.5, fontSize: '1.05rem' }}>
                                        Reviewer / PC Member
                                    </Typography>
                                    <Typography sx={{ color: '#2D4059', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500 }}>
                                        <strong>2026:</strong> CHI, IUI
                                    </Typography>
                                    <Typography sx={{ color: '#2D4059', lineHeight: 1.8, fontSize: '1rem', fontWeight: 500, mt: 1 }}>
                                        <strong>2025:</strong> CHI, CSCW, HAI, IMWUT, IUI, UIST, SIGCSE
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    p: 1.5,
                                    backgroundColor: 'rgba(255, 107, 53, 0.08)',
                                    borderRadius: '8px',
                                    borderLeft: '3px solid #FF6B35',
                                    minWidth: '180px'
                                }}>
                                    <Typography sx={{ color: '#2D4059', lineHeight: 1.6, fontSize: '0.9rem', fontWeight: 500 }}>
                                        <strong>Total Reviews:</strong> 20+
                                    </Typography>
                                    <Typography sx={{ color: '#2D4059', lineHeight: 1.6, fontSize: '0.9rem', fontWeight: 500, mt: 0.5 }}>
                                        <strong>Recognition:</strong> CSCW 2025
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 3 }} />

                        {[
                            { year: '2025', text: 'Student Exchange Research Mentor (Hosted by Dr. Vikas Ashok), Old Dominion University' },
                            { year: '2024', text: 'REU Research Mentor (Hosted by Dr. Vikas Ashok), Old Dominion University' },
                            { year: '2024', text: 'International Student Research Mentor (Hosted by Prof. Ajay Gupta), Old Dominion University' },
                            { year: '2023', text: 'Treasurer, Indian Student Association, Old Dominion University' },
                        ].map((service, index, array) => (
                            <Box key={index}>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'baseline', mb: index < array.length - 1 ? 2 : 0 }}>
                                    <Typography sx={{ fontWeight: 700, color: '#FF6B35', minWidth: '80px', fontSize: '0.95rem' }}>
                                        {service.year}
                                    </Typography>
                                    <Typography sx={{ color: '#2D4059', lineHeight: 1.7, fontSize: '1rem' }}>
                                        {service.text}
                                    </Typography>
                                </Box>
                                {index < array.length - 1 && <Divider sx={{ my: 2 }} />}
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Research Directions & Methods */}
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            color: '#2D4059',
                            mb: 3,
                            fontSize: { xs: '1.8rem', md: '2rem' }
                        }}
                    >
                        Research Directions & Methods
                    </Typography>

                    <Box sx={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        p: { xs: 3, md: 4 },
                        boxShadow: '0 2px 8px rgba(45, 64, 89, 0.08)',
                        border: '1px solid rgba(245, 235, 245, 0.8)',
                        borderLeft: '4px solid rgba(235, 215, 240, 0.9)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            boxShadow: '0 4px 16px rgba(45, 64, 89, 0.12)',
                            borderLeftColor: 'rgba(220, 190, 230, 1)',
                            transform: 'translateY(-2px)',
                        }
                    }}>
                        <Box component="ul" sx={{
                            margin: 0,
                            paddingLeft: 3,
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                            gap: 1.5,
                            listStyleType: 'disc'
                        }}>
                            {[
                                'Human-Centered Computing',
                                'Human-Computer Interaction',
                                'Accessibility and Usability',
                                'Social Computing',
                                'Accessible Learning Technologies',
                                'Data Visualization',
                                'Quantitative and Qualitative Study',
                                'Web Archiving',
                                'Eye tracking',
                                'Ubiquitous Computing and Wearable Technologies',
                                'Culturally Responsive Design'
                            ].map((topic, index) => (
                                <Box component="li" key={index} sx={{ color: '#2D4059', fontSize: '1rem' }}>
                                    <Typography component="span" sx={{ fontSize: '1rem', fontWeight: 500 }}>
                                        {topic}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Fellowships, Grants & Awards */}
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            color: '#2D4059',
                            mb: 3,
                            fontSize: { xs: '1.8rem', md: '2rem' }
                        }}
                    >
                        Fellowships, Grants & Awards
                    </Typography>

                    <Box sx={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '12px',
                        p: { xs: 3, md: 4 },
                        boxShadow: '0 2px 8px rgba(45, 64, 89, 0.08)',
                        border: '1px solid rgba(243, 232, 248, 0.8)',
                        borderLeft: '4px solid rgba(230, 210, 245, 0.9)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            boxShadow: '0 4px 16px rgba(45, 64, 89, 0.12)',
                            borderLeftColor: 'rgba(215, 185, 235, 1)',
                            transform: 'translateY(-2px)',
                        }
                    }}>
                        {[
                            { year: '2025', award: 'Dr. Hussein Abdel-Wahab Memorial Graduate Fellow, Old Dominion University ($2500)' },
                            { year: '2025', award: 'Best Paper Award, ACM Web For All (W4A)' },
                            { year: '2024', award: 'ISAB Research Scholarship, Old Dominion University ($1000)' },
                            { year: '2024', award: 'CSGS Research Scholarship, Old Dominion University ($1000)' },
                            { year: '2023', award: 'Dominion Scholar, Old Dominion University ($10000)' },
                            { year: '2023', award: 'Best Research Mentor Award, Old Dominion University ($500)' },
                            { year: '2023', award: 'Best Teaching Assistant Award, Old Dominion University' },
                        ].map((item, index, array) => (
                            <Box key={index}>
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'baseline', mb: index < array.length - 1 ? 2 : 0 }}>
                                    <Typography sx={{ fontWeight: 700, color: '#FF6B35', minWidth: '80px', fontSize: '0.95rem' }}>
                                        {item.year}
                                    </Typography>
                                    <Typography sx={{ color: '#2D4059', lineHeight: 1.7, fontSize: '1rem' }}>
                                        {item.award}
                                    </Typography>
                                </Box>
                                {index < array.length - 1 && <Divider sx={{ my: 2 }} />}
                            </Box>
                        ))}
                    </Box>
                </Box>

            </Container>
        </Box>
    );
}
