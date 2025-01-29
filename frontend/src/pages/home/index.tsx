import { Stack, Text, Image, Group, Box } from '@mantine/core';
import { NextPage } from 'next';
import Head from 'next/head';

import classes from './index.module.css';
import CoursesButton from './components/CoursesButton';
import Search from './components/Search';
import Filter from './components/Filter';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <Stack flex={1}>
      <Group wrap="nowrap" justify="space-between" flex={1} gap={37}>
        <Search setParams={() => {}} />

        <Filter setParams={() => {}} />
      </Group>

      <Stack pos="relative" gap={0}>
        <Group>
          <Text size="xl" tt="uppercase" c="text.8" span>
            Online
          </Text>
          <Text size="xl" tt="uppercase" c="main.3" span>
            courses
          </Text>
        </Group>
        <Box className={classes.image}>
          <Text size="xl" tt="uppercase" c="text.8" span>
            school
          </Text>
        </Box>
        <CoursesButton />
        <Image src="/images/dashboard.png" alt="image" />
      </Stack>

      <Stack>
        <Text c="text.8">
          The{' '}
          <Text c="main.3" span>
            widest
          </Text>{' '}
          range <br />
          of products
        </Text>
      </Stack>
    </Stack>
  </>
);

export default Home;
