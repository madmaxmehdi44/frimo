import {
  Divider,
  Drawer,
  List,
  ListSubheader,
  styled,
  Toolbar,
  Box,
} from '@mui/material';
import AppDrawerItem from './AppDrawerItem';
import { useAppDrawer } from './AppDrawerContext';
import PersonIcon from '@mui/icons-material/RecentActors';
import StarIcon from '@mui/icons-material/StarRate';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useQuery } from '@tanstack/react-query';
import AppTitle from './AppTitle';
import { moviesAPI } from '@/movies/moviesAPI';
import { useRouter } from 'next/router';
import TmdbAttribution from './TmdbAttribution';
import LoadingIndicator from '@/common/LoadingIndicator';

export const APP_DRAWER_WIDTH = 260;

const StyledDrawer = styled(Drawer)({
  '.MuiDrawer-paper': {
    width: APP_DRAWER_WIDTH,
    overflow: 'hidden',
  },
});

function AppDrawer() {
  const { isOpen, close } = useAppDrawer();
  const router = useRouter();
  const { data: genres, isLoading } = useQuery(moviesAPI.genres());

  const drawerContent = (
    <>
      <Toolbar>
        <AppTitle />
      </Toolbar>
      <Box
        sx={{
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <List subheader={<ListSubheader> اتجاهات</ListSubheader>}>
          <AppDrawerItem
            href="/movie/popular?language=ar-AE"
            selected={router.pathname === '/movie/popular'}
            icon={<TrendingUpIcon />}
            title="الأفلام الشعبية"
          />
          <AppDrawerItem
            href="/movie/top-rated?language=ar-AE"
            selected={router.pathname === '/movie/top-rated'}
            icon={<StarIcon />}
            title="الأفلام ذات التصنيف العالي"
          />
          <AppDrawerItem
            href="/person/popular?language=ar-AE"
            selected={router.pathname === '/person/popular'}
            icon={<PersonIcon />}
            title="ممثلون مشهورون"
          />
        </List>
        <Divider />
        <LoadingIndicator loading={isLoading}>
          <List subheader={<ListSubheader>الأنواع </ListSubheader>}>
            {genres?.map((genre) => {
              return (
                <AppDrawerItem
                  key={genre.id}
                  href={{
                    pathname: '/movie/discover',
                    query: { genreId: genre.id },
                  }}
                  title={genre.name}
                  selected={
                    router.pathname === '/movie/discover' &&
                    Number(router.query.genreId) === genre.id
                  }
                />
              );
            })}
          </List>
        </LoadingIndicator>
      </Box>
      <TmdbAttribution />
    </>
  );

  const drawerProps = { open: isOpen, onClose: close };

  // If we use `useIsMobile` hook to render components responsively, it flickers especially on low-end mobile devices.
  // So, instead of relying on JS, we rely on CSS to prevent this flickering.
  return (
    <>
      <StyledDrawer
        {...drawerProps}
        variant={'permanent'}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        {drawerContent}
      </StyledDrawer>
      <StyledDrawer
        {...drawerProps}
        variant={'temporary'}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawerContent}
      </StyledDrawer>
    </>
  );
}

export default AppDrawer;
