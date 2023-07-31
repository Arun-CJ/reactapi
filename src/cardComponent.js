import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const UserCard = ({ userDetails }) => {
  return (
    <Card sx={{ marginTop: "50px" }}>
      <CardMedia component="img" height="140" image={userDetails?.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {userDetails?.firstName}
        </Typography>
        <Typography>UserName: {userDetails?.username}</Typography>
        <Typography>Gender: {userDetails?.gender}</Typography>
        <Typography>Id: {userDetails?.id}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
