import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Modal from "@mui/joy/Modal";
import { useNavigate } from "react-router-dom";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import swal from "sweetalert";
import "./ON.css";

// 이미지 파일 불러오기 (src 폴더 내 img 폴더에 위치시켜야 합니다)
import slogan from "../image/2024 가온제 우리가 바라던~.png";
import logo from "../image/2024 가온제 로고.png";
import intro from "../image/가온제 다시,ON페이지 소개글.png";
import axios from "axios";

function ON() {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");
  const [wish, setWish] = React.useState("");
  const [thoughts, setThoughts] = React.useState("");
  const [open, setOpen] = React.useState(false);

  function moveMenu2() {
    navigate("/Gaon");
  }
  function moveMenu3() {
    navigate("/EUM");
  }

  // Function to clear all input fields
  const handleClear = () => {
    swal("정말 내용을 지우시겠습니까?", {
      buttons: ["Cancel", "OK"],
    }).then((willDelete) => {
      if (willDelete) {
        setName("");
        setId("");
        setWish("");
        setThoughts("");
      }
    });
  };

  // Function to handle the modal open
  // Function to handle form submission
  const handleSend = async () => {
    if (name && id && wish && thoughts) {
      // Send data to the backend
      console.log("데이터 ", {id, name, wish, thoughts});
      try {
        const res = await axios.post(
          "http://localhost:8080/api/test", {
          id : id,
          name : name,
          wish : wish,
          thoughts : thoughts,
          });
        console.log('데이터 전달 성공: ', res.data);
        alert("등록되었습니다.");
      } catch (error) {
        // fetch('/api/test', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     name,
        //     sNumber,
        //     wish,
        //     thoughts,
        //   }),
        // })
        // .then((response) => {
        //   if (response.ok) {
        //     setOpen(true); // Open the modal on successful submission
        //   } else {
        //     swal("Error", "소원을 저장하는 중 문제가 발생했습니다.", "error");
        //   }
        // })
        console.error("Error saving wish:", error);
        swal("Error", "서버 오류가 발생했습니다.", "error");
      }
    } else {
      swal("Oops", "모든 칸에 입력해주세요", "error");
    }
  };
  // const handleSend = () => {
  //   if (name && sNumber && wish && thoughts) {
  //     setOpen(true);
  //   } else {
  //     swal("Oops", "모든 칸에 입력해주세요", "error");
  //   }
  // };

  return (
    <div className="container">
      {/* Top Center Text */}
      <img src={slogan} alt="Slogan" className="slogan-image" />
      <p> </p>
      {/* Title Logo Image */}
      <img src={logo} alt="Title Logo" className="title-image" />
      <p></p>
      {/* Subtext */}
      <img src={intro} alt="Intro" className="intro-image" />
      {/* Input Forms */}
      <div className="form-container">
        {/* Name and Student Number Input */}
        <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
          <Box sx={{ flex: 1, backgroundColor: "rgba(249, 242, 220, 1)" }}>
            <TextField
              label="학번"
              type="text"
              rows={1}
              value={id}
              onChange={(e) => {
                const value = e.target.value;
                if (!/^\d*$/.test(value)) {
                  swal("Oops", "숫자만 입력 가능합니다.", "error", {
                    className: "swal-modal",
                  });
                } else if (value.length > 9) {
                  swal("Oops", "학번을 다시 입력해주세요.", "error", {
                    className: "swal-modal",
                  });
                } else {
                  setId(value);
                }
              }}
              fullWidth
              InputLabelProps={{
                style: { fontFamily: "DungGeunMo" }, // lable폰트
              }}
              InputProps={{
                style: { fontSize: "21px", fontFamily: "Yoonwoo" }, //입력폼 폰트
              }}
            />
          </Box>
          <Box sx={{ flex: 1, backgroundColor: "rgba(247, 237, 205, 1)" }}>
            <TextField
              label="소원 작성자 이름"
              rows={1}
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              InputLabelProps={{
                style: { fontFamily: "DungGeunMo" }, // lable폰트
              }}
              InputProps={{
                style: { fontSize: "21px", fontFamily: "Yoonwoo" }, //입력폼 폰트
              }}
            />
          </Box>
        </Box>

        {/* Wish Input */}
        <Box
          sx={{ marginBottom: 2, backgroundColor: "rgba(249, 242, 220, 1)" }}
        >
          <TextField
            label="소원을 작성해주세요"
            multiline
            rows={4}
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            fullWidth
            InputLabelProps={{
              style: { fontFamily: "DungGeunMo" }, // lable폰트
            }}
            InputProps={{
              style: { fontSize: "21px", fontFamily: "Yoonwoo" }, //입력폼 폰트
            }}
          />
        </Box>

        {/* Thoughts Input */}
        <Box
          sx={{ marginBottom: 2, backgroundColor: "rgba(249, 242, 220, 1)" }}
        >
          <TextField
            label="당신에게 미디어커뮤니케이션학과란?"
            multiline
            rows={4}
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
            fullWidth
            InputLabelProps={{
              style: { fontFamily: "DungGeunMo" }, // lable폰트
            }}
            InputProps={{
              style: { fontSize: "21px", fontFamily: "Yoonwoo" }, //입력폼 폰트
            }}
          />
        </Box>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2}>
          <Button
            sx={{ fontFamily: "DungGeunMo" }}
            variant="contained"
            startIcon={<SendIcon />}
            onClick={handleSend}
          >
            소원 보내기
          </Button>

          <Button
            sx={{ fontFamily: "DungGeunMo" }}
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={handleClear}
          >
            내용 지우기
          </Button>
        </Stack>
      </div>

      {/* Modal for Wish Submission */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ bgcolor: "rgba(0, 0, 0, 0.5)", textAlign: "center" }}
      >
        <ModalDialog
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={{
            width: "500px",
            height: "350px",
            maxWidth: "90%",
            maxHeight: "90%",
            padding: 3,
          }}
        >
          <Typography
            fontFamily="Yoonwoo"
            fontSize="30px"
            id="nested-modal-title"
            level="h2"
          >
            감사합니다!
          </Typography>
          <Typography
            fontFamily="Yoonwoo"
            fontSize="22px"
            id="nested-modal-description"
            textColor="text.tertiary"
          >
            11월 28일
          </Typography>
          <Typography
            fontFamily="Yoonwoo"
            fontSize="22px"
            id="nested-modal-description"
            textColor="text.tertiary"
          >
            다시,ON에서
          </Typography>
          <Typography
            fontFamily="Yoonwoo"
            fontSize="22px"
            id="nested-modal-description"
            textColor="text.tertiary"
          >
            당신의 소원을 이뤄보세요!
          </Typography>
          <Box sx={{ mt: 1, display: "flex", gap: 1, flexDirection: "column" }}>
            <Button
              size="md"
              variant="outlined"
              color="success"
              onClick={moveMenu2}
            >
              가온제 소개
            </Button>
            <Button
              size="md"
              variant="outlined"
              color="success"
              onClick={moveMenu3}
            >
              E:UM 소개
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </div>
  );
}

export default ON;
