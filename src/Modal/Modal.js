import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import "./modal.scss";

const style = {
  position: "absolute",
  top: "50%",
  right: "1%",
  transform: "translate(0, -50%)",
  width: 300,
  height: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const ModalComp = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [text, setText] = React.useState("");
  const [msg, setMsg] = React.useState([]);

  const changeHandler = (e) => {
    setText(e.target.value);
  };
  const clickHandler = () => {
    setMsg((preMsg) => [...preMsg, text]);
    setText("");
  };

  return (
    <div className="main">
      <Button onClick={handleOpen} className="chat-btn">
        <Tooltip title="CHAT WITH US..." placement="bottom-start">
          <i className="fa-solid fa-comments fa-flip fa-2xl"></i>
        </Tooltip>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="box-inner">
              <p className="box-header">SimplePlan❤️</p>
              <p>
                Hii... <br /> I'm Joya <br /> How may I assist you
              </p>

              {msg.map((value, index) => (
                <p
                  key={index}
                  style={{
                    textAlign: "right",
                    lineHeight: ".5",
                    color: "#2430a0",
                  }}
                >
                  {value}
                </p>
              ))}
            </div>
            <div className="msg">
              <input
                type="text"
                placeholder="Type..."
                onChange={changeHandler}
                className="inputfield"
                value={text}
              />
              <button className="send-btn" onClick={clickHandler}>
                <i
                  class="fa-solid fa-paper-plane"
                  style={{ color: "white", transform: "rotate(45deg)" }}
                />
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalComp;
