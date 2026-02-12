"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PhotoIcon from "@mui/icons-material/Photo";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "./PostCard";
import { posts } from "../utils/dummyData";

export default function Feed() {
  // Use imported real data

  return (
    <Box>
      {/* Start a post */}
      <Card sx={{ mb: 2, p: 2 }}>
        <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
          <Avatar src="https://i.pravatar.cc/150?img=12" />
          <Box
            sx={{
              flexGrow: 1,
              border: 1,
              borderColor: "grey.300",
              borderRadius: 99,
              px: 2,
              py: 1.5,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              "&:hover": { bgcolor: "grey.100" },
            }}
          >
            <Typography color="text.secondary" fontWeight={600} variant="body2">
              Start a post
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
          <Button startIcon={<PhotoIcon sx={{ color: "primary.main" }} />}>
            Media
          </Button>
          <Button startIcon={<EventIcon sx={{ color: "warning.main" }} />}>
            Event
          </Button>
          <Button startIcon={<ArticleIcon sx={{ color: "error.main" }} />}>
            Write article
          </Button>
        </Stack>
      </Card>

      <Divider sx={{ mb: 2 }}>
        <Typography variant="caption" color="text.secondary">
          Sort by:{" "}
          <span style={{ fontWeight: "bold", color: "black" }}>Top</span>
        </Typography>
      </Divider>

      {/* Posts */}
      <Stack spacing={2}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Stack>
    </Box>
  );
}
