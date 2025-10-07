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
        ml: 3,
        fontSize: '1.1rem', // Increased font size here
        padding: '6px 12px', // Added padding for better touch target
        '&:hover': {
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
            color: '#FF6B35',
        }
    };

    // Mobile drawer content
    const mobileDrawer = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <List>
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
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontWeight: item.children.some(child => isActive(child.href)) ? 700 : 500,
                                            fontSize: '1.1rem' // Increased font size here too
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
                                                sx={{ pl: 4 }}
                                                selected={isActive(child.href)}
                                            >
                                                <ListItemText
                                                    primary={child.label}
                                                    primaryTypographyProps={{
                                                        fontWeight: isActive(child.href) ? 700 : 500,
                                                        fontSize: '1rem' // Increased font size for submenu items
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
                        >
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontWeight: isActive(item.href) ? 700 : 500,
                                    fontSize: '1.1rem' // Increased font size here too
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
                bgcolor: '#FFF8F3',
                backgroundImage: 'none',
                borderBottom: '1px solid rgba(255, 107, 53, 0.1)',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 248, 243, 0.95)',
                zIndex: 1100
            }}>
                <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}> {/* Added padding to make navbar taller */}
                    {/* Left: name+tag */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            component={NextLink}
                            href="/"
                            variant="h4"
                            sx={{
                                color: '#2D4059',
                                textDecoration: 'none',
                                fontWeight: 700,
                            }}
                        >
                            Akshay K Nayak
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: '#5A7CA1',
                                ml: 2,
                                display: { xs: 'none', sm: 'block' }
                            }}
                        >
                            Researcher, Engineer
                        </Typography>
                    </Box>

                    {/* Mobile menu icon - only render after mount */}
                    {mounted && isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={toggleDrawer(true)}
                            sx={{ color: '#2D4059' }}
                        >
                            <MenuIcon fontSize="large" /> {/* Increased icon size */}
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
                                                    fontWeight: item.children.some(child => isActive(child.href)) ? 700 : 500,
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
                                                            fontWeight: isActive(sub.href) ? 700 : 500,
                                                            fontSize: '1rem', // Increased font size for dropdown items
                                                            backgroundColor: isActive(sub.href) ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
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
                                            fontWeight: isActive(item.href) ? 700 : 500,
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