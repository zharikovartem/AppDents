import { FC, ReactElement } from 'react';
import { AppShell, Center, Stack } from '@mantine/core';

import classes from './index.module.css';
import Header from './Header';

interface UnauthorizedLayoutProps {
  children: ReactElement;
}

const UnauthorizedLayout: FC<UnauthorizedLayoutProps> = ({ children }) => (
  <AppShell component={Stack} className={classes.main} bg="background.3" px={20}>
    <Header />

    <AppShell.Main pt={47}>
      <Center>{children}</Center>
    </AppShell.Main>
  </AppShell>
);

export default UnauthorizedLayout;
