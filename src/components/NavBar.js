// src/components/NavBar.js
'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Menu,
    MenuItem,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    useMediaQuery,
    useTheme
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function NavBar() {
    const pathname = usePathname();
    const theme = useTheme();
    // Add noSsr option to fix SSR mismatch
    const isMobile = useMediaQuery(theme.breakpoints.down('md'), {
        noSsr: true, // This prevents SSR evaluation of the media query
    });

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Publications', href: '/publications' },
        { label: 'Academic', href: '/academic' },
    ];

    // Desktop menu state
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openMenuKey, setOpenMenuKey] = React.useState(null);

    // Mobile drawer state
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [openMobileSubmenu, setOpenMobileSubmenu] = React.useState('');

    // Add client-side only rendering
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Desktop dropdown handlers
    const handleMenuOpen = (e, key) => {
        setAnchorEl(e.currentTarget);
        setOpenMenuKey(key);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenMenuKey(null);
    };

    // Scroll to section handler
    const handleScroll = (id) => {
        handleMenuClose();
        setDrawerOpen(false);
        // Protect against SSR by checking if window exists
        if (typeof window !== 'undefined') {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Mobile drawer handlers
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleMobileSubmenu = (label) => {
        setOpenMobileSubmenu(openMobileSubmenu === label ? '' : label);
    };

    // Check if a nav item is active
    const isActive = (href) => {
        if (!href) return false;
        // Handle anchors specially
        if (href.includes('#')) {
            const [pagePath, _] = href.split('#');
            return pagePath ? pathname === pagePath : pathname === '/';
        }
        return pathname === href;
    };

    // Common button styles for nav items
    const navButtonStyles = {
        color: '#2D4059',
        textTransform: 'none',
        ml: { xs: 1.5, md: 2 },
        fontSize: '0.98rem',
        fontWeight: 500,
        padding: '7px 16px',
        borderRadius: '8px',
        position: 'relative',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        '&::before': {
            content: '""',
            position: 'absolute',
            bottom: -2,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '0%',
            height: '2px',
            background: 'linear-gradient(90deg, #1B5E20, #1565C0)',
            borderRadius: '1px',
            transition: 'width 0.3s ease',
        },
        '&:hover': {
            backgroundColor: 'rgba(21, 101, 192, 0.05)',
            color: '#1565C0',
        },
        '&:hover::before': {
            width: '50%',
        }
    };

    // Mobile drawer content
    const mobileDrawer = (
        <Box
            sx={{
                width: 270,
                height: '100%',
                backgroundColor: '#FFFFFF',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '3px',
                    height: '100%',
                    background: 'linear-gradient(180deg, #1B5E20 0%, #1565C0 50%, #5A7CA1 100%)',
                    opacity: 0.6,
                }
            }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <List sx={{ pt: 2.5, px: 1.5 }}>
                {navItems.map((item) => {
                    // Item with submenu
                    if (item.children) {
                        return (
                            <React.Fragment key={item.label}>
                                <ListItem
                                    button
                                    onClick={() => handleMobileSubmenu(item.label)}
                                    aria-expanded={openMobileSubmenu === item.label}
                                    aria-controls={`submenu-${item.label}`}
                                    sx={{
                                        borderRadius: '10px',
                                        mb: 0.75,
                                        backgroundColor: item.children.some(child => isActive(child.href)) ? 'rgba(21, 101, 192, 0.08)' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'rgba(21, 101, 192, 0.06)',
                                        }
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontWeight: item.children.some(child => isActive(child.href)) ? 600 : 500,
                                            fontSize: '1.05rem',
                                            color: item.children.some(child => isActive(child.href)) ? '#1565C0' : '#2D4059',
                                        }}
                                    />
                                    {openMobileSubmenu === item.label ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={openMobileSubmenu === item.label} timeout="auto" unmountOnExit id={`submenu-${item.label}`}>
                                    <List component="div" disablePadding>
                                        {item.children.map((child) => (
                                            <ListItem
                                                button
                                                key={child.label}
                                                component={child.href ? NextLink : 'div'}
                                                href={child.href}
                                                onClick={() => {
                                                    if (child.anchorId) handleScroll(child.anchorId);
                                                    setDrawerOpen(false);
                                                }}
                                                sx={{
                                                    pl: 4,
                                                    borderRadius: '8px',
                                                    mx: 0.75,
                                                    mb: 0.5,
                                                    backgroundColor: isActive(child.href) ? 'rgba(21, 101, 192, 0.1)' : 'transparent',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(21, 101, 192, 0.08)',
                                                    }
                                                }}
                                                selected={isActive(child.href)}
                                            >
                                                <ListItemText
                                                    primary={child.label}
                                                    primaryTypographyProps={{
                                                        fontWeight: isActive(child.href) ? 600 : 500,
                                                        fontSize: '0.95rem',
                                                        color: isActive(child.href) ? '#1565C0' : '#2D4059',
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            </React.Fragment>
                        );
                    }

                    // Regular item or anchor
                    return (
                        <ListItem
                            button
                            key={item.label}
                            component={item.href ? NextLink : 'div'}
                            href={item.href}
                            onClick={() => {
                                if (item.anchorId) handleScroll(item.anchorId);
                                setDrawerOpen(false);
                            }}
                            selected={isActive(item.href)}
                            sx={{
                                borderRadius: '10px',
                                mb: 0.75,
                                backgroundColor: isActive(item.href) ? 'rgba(21, 101, 192, 0.08)' : 'transparent',
                                '&:hover': {
                                    backgroundColor: 'rgba(21, 101, 192, 0.06)',
                                }
                            }}
                        >
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontWeight: isActive(item.href) ? 600 : 500,
                                    fontSize: '1.05rem',
                                    color: isActive(item.href) ? '#1565C0' : '#2D4059',
                                }}
                            />
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <div suppressHydrationWarning>
            <AppBar position="fixed" elevation={0} sx={{
                top: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(135deg, rgba(255, 250, 245, 0.98) 0%, rgba(255, 248, 243, 0.98) 100%)',
                backdropFilter: 'blur(20px) saturate(180%)',
                borderBottom: '1px solid rgba(90, 124, 161, 0.15)',
                boxShadow: '0 2px 16px rgba(45, 64, 89, 0.06), 0 1px 0 rgba(255, 255, 255, 0.8) inset',
                zIndex: 1100,
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -1,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '85%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(90, 124, 161, 0.2) 50%, transparent 100%)',
                }
            }}>
                <Toolbar sx={{ justifyContent: 'space-between', py: 1.8, px: { xs: 2, md: 4 } }}>
                    {/* Left: name+tag */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography
                            component={NextLink}
                            href="/"
                            variant="h4"
                            sx={{
                                color: '#2D4059',
                                textDecoration: 'none',
                                fontWeight: 700,
                                letterSpacing: '-0.01em',
                                fontSize: { xs: '1.4rem', md: '1.6rem' },
                                transition: 'all 0.25s ease',
                                position: 'relative',
                                '&:hover': {
                                    color: '#1565C0',
                                }
                            }}
                        >
                            Akshay K Nayak
                        </Typography>
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                alignItems: 'center',
                                gap: 1.5,
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    left: -12,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: '2px',
                                    height: '24px',
                                    background: 'linear-gradient(180deg, transparent, #5A7CA1, transparent)',
                                    opacity: 0.3,
                                }
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: '#5A7CA1',
                                    fontWeight: 500,
                                    fontSize: '0.95rem',
                                    opacity: 0.9,
                                }}
                            >
                                Researcher, Engineer
                            </Typography>
                        </Box>
                    </Box>

                    {/* Mobile menu icon - only render after mount */}
                    {mounted && isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={toggleDrawer(true)}
                            sx={{
                                color: '#2D4059',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                border: '1px solid rgba(45, 64, 89, 0.1)',
                                borderRadius: '10px',
                                boxShadow: '0 2px 8px rgba(45, 64, 89, 0.06)',
                                '&:hover': {
                                    backgroundColor: 'rgba(21, 101, 192, 0.05)',
                                    borderColor: 'rgba(21, 101, 192, 0.2)',
                                },
                                transition: 'all 0.25s ease',
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    {/* Desktop navigation - only render after mount */}
                    {mounted && !isMobile && (
                        <Box sx={{ display: 'flex' }}>
                            {navItems.map((item) => {
                                // dropdown
                                if (item.children) {
                                    return (
                                        <React.Fragment key={item.label}>
                                            <Button
                                                onClick={(e) => handleMenuOpen(e, item.label)}
                                                endIcon={<ArrowDropDownIcon />}
                                                aria-haspopup="true"
                                                aria-expanded={openMenuKey === item.label}
                                                aria-controls={openMenuKey === item.label ? 'menu-list' : undefined}
                                                sx={{
                                                    ...navButtonStyles,
                                                    fontWeight: item.children.some(child => isActive(child.href)) ? 600 : 500,
                                                    ...(item.children.some(child => isActive(child.href)) && {
                                                        color: '#1565C0',
                                                        backgroundColor: 'rgba(21, 101, 192, 0.06)',
                                                        '&::before': {
                                                            width: '50%',
                                                        }
                                                    })
                                                }}
                                            >
                                                {item.label}
                                            </Button>
                                            <Menu
                                                id="menu-list"
                                                anchorEl={anchorEl}
                                                open={openMenuKey === item.label}
                                                onClose={handleMenuClose}
                                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}
                                                sx={{
                                                    '& .MuiPaper-root': {
                                                        borderRadius: '12px',
                                                        boxShadow: '0 4px 20px rgba(45, 64, 89, 0.1), 0 0 0 1px rgba(21, 101, 192, 0.06)',
                                                        mt: 1,
                                                        backdropFilter: 'blur(12px)',
                                                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                                                        overflow: 'hidden',
                                                        '&::before': {
                                                            content: '""',
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            height: '2px',
                                                            background: 'linear-gradient(90deg, #1B5E20, #1565C0, #5A7CA1)',
                                                            opacity: 0.4,
                                                        }
                                                    }
                                                }}
                                            >
                                                {item.children.map((sub) => (
                                                    <MenuItem
                                                        key={sub.label}
                                                        component={sub.href ? NextLink : 'div'}
                                                        href={sub.href}
                                                        onClick={() => {
                                                            if (sub.anchorId) handleScroll(sub.anchorId);
                                                            else handleMenuClose();
                                                        }}
                                                        sx={{
                                                            textTransform: 'none',
                                                            fontWeight: isActive(sub.href) ? 600 : 500,
                                                            fontSize: '0.95rem',
                                                            py: 1.25,
                                                            px: 2,
                                                            borderRadius: '6px',
                                                            mx: 0.75,
                                                            my: 0.4,
                                                            backgroundColor: isActive(sub.href) ? 'rgba(21, 101, 192, 0.08)' : 'transparent',
                                                            color: isActive(sub.href) ? '#1565C0' : '#2D4059',
                                                            '&:hover': {
                                                                backgroundColor: 'rgba(21, 101, 192, 0.06)',
                                                                color: '#1565C0',
                                                            }
                                                        }}
                                                    >
                                                        {sub.label}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </React.Fragment>
                                    );
                                }

                                // scroll-to anchor
                                if (item.anchorId) {
                                    return (
                                        <Button
                                            key={item.label}
                                            onClick={() => handleScroll(item.anchorId)}
                                            sx={{
                                                ...navButtonStyles,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                    );
                                }

                                // regular Next.js page link
                                return (
                                    <Button
                                        key={item.label}
                                        component={NextLink}
                                        href={item.href}
                                        sx={{
                                            ...navButtonStyles,
                                            fontWeight: isActive(item.href) ? 600 : 500,
                                            ...(isActive(item.href) && {
                                                color: '#1565C0',
                                                backgroundColor: 'rgba(21, 101, 192, 0.06)',
                                                '&::before': {
                                                    width: '50%',
                                                }
                                            })
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                );
                            })}
                        </Box>
                    )}
                </Toolbar>

                {/* Mobile drawer - only render after mount */}
                {mounted && (
                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                    >
                        {mobileDrawer}
                    </Drawer>
                )}
            </AppBar>
        </div>
    );
}