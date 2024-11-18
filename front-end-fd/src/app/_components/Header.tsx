import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Logo from "./Logo";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

type Anchor = "top" | "left" | "bottom" | "right";

export default function Header() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="w-[1200px] h-14 flex items-center justify-between mx-auto">
          <Stack spacing={2} direction="row">
            <button>
              <Logo />
            </button>
            <Button variant="text" style={{ color: "black" }}>
              НҮҮР
            </Button>
            <Button variant="text" style={{ color: "black" }}>
              ХООЛНЫ ЦЭС
            </Button>
            <Button variant="text" style={{ color: "black" }}>
              ХҮРГЭЛТИЙН БҮС
            </Button>
          </Stack>
          <div className="flex items-center">
            <label className="input input-bordered flex items-center gap-2">
              <SearchOutlinedIcon />
              <input
                type="text"
                className="grow h-8 w-[260px]"
                placeholder="Хайх..."
              />
            </label>

            {/* Button for triggering the drawer */}
            <div
              className="flex items-center py-2 px-4 gap-2 cursor-pointer"
              onClick={toggleDrawer("right", true)}
            >
              <ShoppingBasketOutlinedIcon />
              <div className="font-bold text-sm">Сагс</div>
            </div>
            <div className="flex items-center py-2 px-4 gap-2 cursor-pointer">
              <ShoppingBasketOutlinedIcon />
              <div className="font-bold text-sm">Нэвтрэх</div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer component */}
      <React.Fragment key="right">
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
