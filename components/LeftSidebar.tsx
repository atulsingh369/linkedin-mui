import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";

import { currentUser } from "../utils/dummyData";

export default function LeftSidebar() {
  return (
    <Box>
      {/* Profile Card */}
      <Card sx={{ mb: 2 }}>
        {/* Cover Image */}
        <Box
          sx={{
            height: 60,
            bgcolor: "grey.300",
            backgroundImage: "url(https://picsum.photos/seed/cover/600/200)",
            backgroundSize: "cover",
          }}
        />
        <CardContent
          sx={{
            pt: 0,
            mt: -4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: 72,
              height: 72,
              border: 2,
              borderColor: "white",
              mb: 2,
            }}
            src={currentUser.avatar}
          />
          <Typography
            variant="h6"
            component="div"
            align="center"
            fontWeight="bold"
          >
            {currentUser.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mb: 2 }}
          >
            {currentUser.headline}
          </Typography>

          <Divider flexItem sx={{ my: 1 }} />

          <Box sx={{ width: "100%", mt: 1 }}>
            <Box display="flex" justifyContent="space-between" mb={0.5}>
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight="bold"
              >
                Connections
              </Typography>
              <Typography variant="body2" color="primary" fontWeight="bold">
                124
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight="bold"
              >
                Profile views
              </Typography>
              <Typography variant="body2" color="primary" fontWeight="bold">
                45
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Navigation Links */}
      <Card>
        <List dense disablePadding>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                py: 1.5,
                px: 2,
                cursor: "pointer",
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <BookmarkIcon color="action" />
              </ListItemIcon>
              <ListItemText
                primary="Saved items"
                primaryTypographyProps={{
                  variant: "body2",
                  fontWeight: 600,
                  color: "text.secondary",
                }}
              />
            </Box>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                py: 1.5,
                px: 2,
                cursor: "pointer",
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <GroupIcon color="action" />
              </ListItemIcon>
              <ListItemText
                primary="Groups"
                primaryTypographyProps={{
                  variant: "body2",
                  fontWeight: 600,
                  color: "text.secondary",
                }}
              />
            </Box>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                py: 1.5,
                px: 2,
                cursor: "pointer",
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <EventIcon color="action" />
              </ListItemIcon>
              <ListItemText
                primary="Events"
                primaryTypographyProps={{
                  variant: "body2",
                  fontWeight: 600,
                  color: "text.secondary",
                }}
              />
            </Box>
          </ListItem>
        </List>
      </Card>
    </Box>
  );
}
