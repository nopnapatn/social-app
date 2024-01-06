import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{
          objectFit: "cover",
          borderRadius: "50%",
          background: "gray",
          height: "60px",
          width: "60px",
        }}
        width={size}
        height={size}
        alt="SA"
        src={`https://localhost:3001/assets${image}`}
      />
    </Box>
  );
};

export default UserImage;
