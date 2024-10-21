import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import swal from 'sweetalert';
import './ON.css';

// 이미지 파일 불러오기 (src 폴더 내 img 폴더에 위치시켜야 합니다)
import slogan from './img/2024 가온제 우리가 바라던~.png';
import logo from './img/2024 가온제 로고+문구_대지 1.png';
import backgroundImage from './img/무제-1_대지 1.png'; // 배경 이미지 가져오기

function ON() {
  const [name, setName] = React.useState('');
  const [sNumber, setsNumber] = React.useState('');
  const [wish, setWish] = React.useState('');
  const [thoughts, setThoughts] = React.useState('');
  const [open, setOpen] = React.useState(false);

  // Function to clear all input fields
  const handleClear = () => {
    swal("정말 내용을 지우시겠습니까?", {
      buttons: ["Cancel", "OK"],
    }).then((willDelete) => {
      if (willDelete) {
        setName('');
        setsNumber('');
        setWish('');
        setThoughts('');
      }
    });
  };

  // Function to handle the modal open
  const handleSend = () => {
    if (name && sNumber && wish && thoughts) {
      setOpen(true);
    } else {
      swal("Oops", "모든 칸에 입력해주세요", "error");
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backgroundImage})`, // 배경 이미지 설정
        backgroundSize: 'cover', // 배경 이미지가 컨테이너를 덮도록 설정
        backgroundRepeat: 'no-repeat', // 이미지 반복 방지
        backgroundPosition: 'center', // 중앙에 이미지 배치
        height: '100vh', // 전체 화면 높이 설정
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // 세로축 중앙 정렬
        alignItems: 'center', // 가로축 중앙 정렬
      }}
    >
      {/* Top Center Text */}
      <img src={slogan} alt="Slogan" className="slogan-image" />
      <p>  </p>
      {/* Title Logo Image */}
      <img src={logo} alt="Title Logo" className="title-image" />
       <p></p>
      {/* Subtext */}
      <p className="small-text">강원대 미컴과에 들어오면서 꿨던 꿈을 다시 생각해봅시다...</p>

      {/* Input Forms */}
      <div className="form-container">
        {/* Name and Student Number Input */}
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
          <Box sx={{ flex: 1 }}>
            <TextField
              label="학번"
              multiline
              type='text'
              rows={1}
              value={sNumber}
              onChange={(e) => {
                const value = e.target.value;
                if (!/^\d*$/.test(value)) {
                  swal("Oops", "숫자만 입력 가능합니다.", "error");
                } else if (value.length > 9) {
                  swal("Oops", "학번을 다시 입력해주세요.", "error");
                } else {  
                  setsNumber(value);
                }
              }}
              fullWidth
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextField
              label="소원 작성자 이름"
              multiline
              rows={1}
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
          </Box>
        </Box>

        {/* Wish Input */}
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="소원을 작성해주세요"
            multiline
            rows={4}
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            fullWidth
          />
        </Box>

        {/* Thoughts Input */}
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="당신에게 미디어커뮤니케이션학과란?"
            multiline
            rows={4}
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
            fullWidth
          />
        </Box>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2}>
          <Button variant="contained" startIcon={<SendIcon />} onClick={handleSend}>
            소원 보내기
          </Button>
          <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleClear}>
            내용 지우기
          </Button>
        </Stack>
      </div>

      {/* Modal for Wish Submission */}
      <Modal open={open} onClose={() => setOpen(false)} sx={{ bgcolor: 'rgba(0, 0, 0, 0.5)', textAlign: 'center' }}>
        <ModalDialog aria-labelledby="nested-modal-title" aria-describedby="nested-modal-description">
          <Typography id="nested-modal-title" level="h2">
            감사합니다!
          </Typography>
          <Typography id="nested-modal-description" textColor="text.tertiary">
            11월 28일
          </Typography>
          <Typography id="nested-modal-description" textColor="text.tertiary">
            다시,ON에서
          </Typography>
          <Typography id="nested-modal-description" textColor="text.tertiary">
            당신의 소원을 이뤄보세요!
          </Typography>
          <Box sx={{ mt: 1, display: 'flex', gap: 1, flexDirection: 'column' }}>
            <Button size='md' variant="outlined" color="success" onClick={() => setOpen(false)}>
              가온제 소개
            </Button>
            <Button size='md' variant="outlined" color="success" onClick={() => setOpen(false)}>
              E:UM 소개
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </div>
  );
}

export default ON;
