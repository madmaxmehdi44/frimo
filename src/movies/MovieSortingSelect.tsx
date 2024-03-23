import { Box, MenuItem, TextField } from '@mui/material';
import { Maybe } from '@/common/CommonTypes';

const MOVIE_SORTING = {
  popularity: {
    id: 'popularity.desc',
    title: 'الأكثر شهرة',
  },
  voteCount: {
    id: 'vote_count.desc',
    title: 'معظم الأصوات',
  },
  voteAverage: {
    id: 'vote_average.desc',
    title: 'أعلى الدرجات',
  },
  newToOld: {
    id: 'release_date.desc',
    title: 'الجديد على القديم',
  },
  releaseDate: {
    id: 'release_date.asc',
    title: 'القديم إلى الجديد',
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
        label="طرنيب"
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
