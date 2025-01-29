import React, { FC, memo } from 'react';
import Link from 'next/link';
import { Anchor, AppShell, Group, Text } from '@mantine/core';

import { BlackLogoImage } from 'public/images';

import { RoutePath } from 'routes';

import classes from './index.module.css';

const Header: FC = () => (
  <AppShell.Header zIndex={300} className={classes.header}>
    <Group justify="space-between" align="center">
      <Anchor component={Link} href={RoutePath.Home}>
        <BlackLogoImage />
      </Anchor>
      <Text c="text.8">LOG IN</Text>
    </Group>
  </AppShell.Header>
);

export default memo(Header);
