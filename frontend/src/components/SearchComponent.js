import { TextField, MenuItem, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1.5,  // space between elements
        mt: 2,   // margin top
        width: '43%', // align to same width as buttons
        margin: '0 auto' // to center horizontally
      }}
    >
      {/* Search Bar */}
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        InputProps={{
            sx: {// Adjust the height here

            height: 45,  // Adjust the height here
            padding: '0 14px',  // Ensure padding is proper
            display: 'flex',
            alignItems: 'center',
            }
          }}
          InputLabelProps={{
            sx: {
              top: '-5px', // Adjust label position
            },
        }}
      />

      {/* Results Dropdown */}
      <TextField
        select
        label="Results"
        variant="outlined"
        sx={{ minWidth: 130, }}

        InputProps={{
            sx: {// Adjust the height here

            height: 45,  // Adjust the height here
            padding: '0 14px',  // Ensure padding is proper
            display: 'flex',
            alignItems: 'center',
            }
          }}
          InputLabelProps={{
            sx: {
              top: '-5px', // Adjust label position
            },
        }}
      >
        <MenuItem value="result1">1</MenuItem>
        <MenuItem value="result2">2</MenuItem>
      </TextField>

      {/* Search Button */}
      <Button
        variant="contained"
        sx={{ bgcolor: "primary.main", color: "white", pr:"25px", pl:"25px", pt:"10px", pb:"10px" }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchComponent;
