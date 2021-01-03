import React from 'react';
import { Box, List, ListItem } from '@modulz/radix';

import LinkTo from '../LinkTo';

const AdminMenu: React.FC<{ pageTitle: string }> = ({ pageTitle }) => (
    <Box>
        <h1>{pageTitle}</h1>
        <List>
            <LinkTo to="/admin">
                <ListItem>
                    ADMIN MAIN
                </ListItem>
            </LinkTo>
            <LinkTo to="/admin/products">
                <ListItem>
                    PRODUCTS
                </ListItem>
            </LinkTo>
            <LinkTo to="/admin/products/add">
                <ListItem>
                    ADD PRODUCT
                </ListItem>
            </LinkTo>
        </List>
    </Box>
);

export default AdminMenu;
