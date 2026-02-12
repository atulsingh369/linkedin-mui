import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";

import { trendingTopics, suggestedConnections } from "../utils/dummyData";

export default function RightSidebar() {
  return (
    <Box>
      {/* Trending Topics */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              LinkedIn News
            </Typography>
            <InfoIcon fontSize="small" color="action" />
          </Box>
          <List disablePadding>
            {trendingTopics.slice(0, 3).map((topic) => (
              <ListItem
                key={topic.id}
                disablePadding
                sx={{ mb: 1, display: "block" }}
              >
                <Box>
                  <Typography variant="subtitle2" fontWeight={600} noWrap>
                    {topic.topic}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    1d ago • {topic.readers.toLocaleString()} readers
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
          <Button sx={{ textTransform: "none", mt: 1, p: 0, minWidth: 0 }}>
            <Typography variant="body2" fontWeight={600} color="text.secondary">
              Show more
            </Typography>
          </Button>
        </CardContent>
      </Card>

      {/* Suggested Connections */}
      <Card>
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Add to your feed
            </Typography>
            <InfoIcon fontSize="small" color="action" />
          </Box>
          <List disablePadding>
            {suggestedConnections.map((suggestion) => (
              <ListItem
                key={suggestion.id}
                alignItems="flex-start"
                disablePadding
                sx={{ mb: 2 }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={suggestion.user.name}
                    src={suggestion.user.avatar}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2" fontWeight={600}>
                      {suggestion.user.name}
                    </Typography>
                  }
                  secondary={
                    <Box component="span" display="block">
                      <Typography
                        component="span"
                        variant="caption"
                        color="text.secondary"
                        display="block"
                        sx={{ lineHeight: 1.2, mb: 1 }}
                      >
                        {suggestion.user.headline}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          borderRadius: 99,
                          textTransform: "none",
                          fontWeight: 600,
                        }}
                      >
                        + Follow
                      </Button>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
