import { Box, MenuItem, TextField } from '@mui/material';
import { Maybe } from '@/common/CommonTypes';

const MOVIE_SORTING = {
  popularity: {
    id: 'popularity.desc',
    title: 'معروف ترین ها',
  },
  voteCount: {
    id: 'vote_count.desc',
    title: 'بیشترین رای',
  },
  voteAverage: {
    id: 'vote_average.desc',
    title: 'بالاترین امتیاز',
  },
  newToOld: {
    id: 'release_date.desc',
    title: 'جدید به قدیم',
  },
  releaseDate: {
    id: 'release_date.asc',
    title: 'قدیم به جدید',
  },
};

const sortings = Object.values(MOVIE_SORTING);

export function getSelectedSorting(sortBy: Maybe<string | string[]>) {
  const defaultSorting = MOVIE_SORTING.popularity;

  if (typeof sortBy !== 'string') {
    return defaultSorting;
  }

  const selectedSorting =
    sortings.find((sorting) => sorting.id === sortBy) ?? defaultSorting;

  return selectedSorting;
}

interface MovieSortingSelectProps {
  value: string;
  onChange: (value: string) => void;
}

function MovieSortingSelect({ value, onChange }: MovieSortingSelectProps) {
  return (
    <Box sx={{ minWidth: 220 }}>
      <TextField
        label="ترنیب"
        select
        fullWidth
        size="small"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {sortings.map((option) => {
          return (
            <MenuItem key={option.id} value={option.id}>
              {option.title}
            </MenuItem>
          );
        })}
      </TextField>
    </Box>
  );
}

export default MovieSortingSelect;
