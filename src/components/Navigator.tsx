import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import GitHubIcon from '@material-ui/icons/GitHub';

const categories = [
    {
        id: 'Develop',
        children: [
            {
                id: 'Authentication',
                icon: <PeopleIcon />,
                active: true,
            },
            { id: 'Database', icon: <DnsRoundedIcon /> },
            { id: 'Upload', icon: <PermMediaOutlinedIcon />, url: './upload' },
            { id: 'Hosting', icon: <PublicIcon /> },
            { id: 'Functions', icon: <SettingsEthernetIcon /> },
        ],
    },
    {
        id: 'Quality',
        children: [
            { id: 'Analytics', icon: <SettingsIcon /> },
            { id: 'Performance', icon: <TimerIcon /> },
            { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
        ],
    },
];

const styles = (theme) => ({
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    Drawer: {
        backgroundColor: '#18202c',
        width: 250,
        height: '100%'
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover, &:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
    },
    itemActiveItem: {
        color: '#4fc3f7',
    },
    itemPrimary: {
        fontSize: 'inherit',
    },
    itemIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2),
        color: 'inherit'
    },
    divider: {
        marginTop: theme.spacing(2),
    },
});

function Navigator(props) {
    const { classes } = props;

    return (
        <List disablePadding className={classes.Drawer}>
            <ListItem
                className={clsx(classes.firebase, classes.item, classes.itemCategory)}
            >
                Network Visualizer
        </ListItem>
            <ListItem className={clsx(classes.item, classes.itemCategory)}
                button
                component="a"
                href='/'
            >
                <ListItemIcon className={classes.itemIcon}>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText
                    classes={{
                        primary: classes.itemPrimary,
                    }}
                >
                    Home
          </ListItemText>
            </ListItem>
            {categories.map(({ id, children }) => (
                <React.Fragment key={id}>
                    <ListItem className={classes.categoryHeader} >
                        <ListItemText
                            classes={{
                                primary: classes.categoryHeaderPrimary,
                            }}
                        >
                            {id}
                        </ListItemText>
                    </ListItem>
                    {children.map(({ id: childId, icon, active, url }) => (
                        <ListItem
                            key={childId}
                            button
                            component="a"
                            target="blank"
                            href={url}
                            className={clsx(classes.item, active && classes.itemActiveItem)}
                        >
                            <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.itemPrimary,
                                }}
                            >
                                {childId}
                            </ListItemText>
                        </ListItem>
                    ))}

                    <Divider className={classes.divider} />
                </React.Fragment>
            ))}
        </List>
    );
}

Navigator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);