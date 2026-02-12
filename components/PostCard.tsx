import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import RepeatIcon from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";

import { Post } from "../utils/dummyData";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        avatar={
          <Avatar src={post.author.avatar} aria-label="recipe">
            {post.author.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        titleTypographyProps={{ variant: "subtitle2", fontWeight: "bold" }}
        title={post.author.name}
        subheader={
          <Box display="flex" flexDirection="column">
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.2 }}
            >
              {post.author.headline}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mt: 0.5 }}
            >
              {post.createdAt} • 🌎
            </Typography>
          </Box>
        }
      />
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="body1" color="text.primary">
          {post.content}
        </Typography>
      </CardContent>
      {post.image && (
        <CardMedia
          component="img"
          image={post.image}
          alt="Post image"
          sx={{ objectFit: "cover", maxHeight: 500 }}
        />
      )}

      {/* Stats */}
      <Box sx={{ px: 2, py: 1, display: "flex", alignItems: "center" }}>
        <ThumbUpIcon
          sx={{ width: 16, height: 16, color: "primary.main", mr: 0.5 }}
        />
        <Typography variant="caption" color="text.secondary">
          {post.likes}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
          {post.comments} comments • {post.reposts} reposts
        </Typography>
      </Box>

      <Divider />

      <CardActions disableSpacing sx={{ px: 2, py: 0.5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Like */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 1,
            }}
          >
            <IconButton size="small">
              <ThumbUpIcon />
            </IconButton>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={600}
            >
              Like
            </Typography>
          </Box>

          {/* Comment */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 1,
            }}
          >
            <IconButton size="small">
              <CommentIcon />
            </IconButton>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={600}
            >
              Comment
            </Typography>
          </Box>

          {/* Repost */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 1,
            }}
          >
            <IconButton size="small">
              <RepeatIcon />
            </IconButton>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={600}
            >
              Repost
            </Typography>
          </Box>

          {/* Send */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 1,
            }}
          >
            <IconButton size="small">
              <SendIcon />
            </IconButton>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={600}
            >
              Send
            </Typography>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}
