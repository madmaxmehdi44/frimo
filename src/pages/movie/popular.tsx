import { dehydrate } from '@tanstack/react-query';
import { createQueryClient } from '@/http-client/queryClient';
import MoviesListTemplate from '@/page-templates/MoviesListTemplate';
import { moviesAPI } from '@/movies/moviesAPI';
import { apiConfigurationAPI } from '@/api-configuration/apiConfigurationAPI';
import { GetServerSideProps } from 'next';

function PopularMoviesPage() {
  return (
    <MoviesListTemplate
      title="فیلم های محبوب"
      description="لیست فیلم های محبوب"
      apiQuery={moviesAPI.popularMovies()}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = createQueryClient();

  await Promise.all([
    queryClient.fetchQuery(apiConfigurationAPI.configuration()),
    queryClient.fetchInfiniteQuery(moviesAPI.popularMovies()),
  ]);

  return {
    props: {
      // There is an issue when we use infinite query while SSR.
      // So, we use this workaround.
      // https://github.com/tannerlinsley/@tanstack/react-query/issues/1458
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default PopularMoviesPage;
