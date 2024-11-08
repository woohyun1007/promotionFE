import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Modal from '@mui/joy/Modal';
import { useNavigate } from 'react-router-dom';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import './ON.css';


// 이미지 파일 불러오기 (src 폴더 내 img 폴더에 위치시켜야 합니다)
import slogan from '../image/2024gaon_slogan.png';
import logo from '../image/2024gaon_logo.png';
import intro from '../image/2024gaon_onScript.png';

import axios from "axios";

function ON() {
  const navigate = useNavigate();
  
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  })

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

  const handleClear = () => {
  
  
    Swal.fire({
      title: "Are you sure?",
      text: "정말 내용을 지우시겠습니까?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '지우기',
      cancelButtonText: '취소',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        (async () => {
          await Toast.fire({
            icon: 'success',
            title: '<Strong>Deleted!',
            text: '내용이 삭제되었습니다.',

          })
        })()        // Clear the input fields
        // Clear the input fields
        setName("");
        setId("");
        setWish("");
        setThoughts("");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        (async () => {
          await Toast.fire({
          title: '<Strong>Cancle',
          text: '내용 삭제가 취소되었습니다.',
          icon: 'success'
        })
      })() 
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
          id: id,
          name: name,
          wish: wish,
          thoughts: thoughts,
        });
        console.log('데이터 전달 성공: ', res.data);
  
        // Display success toast first, then open modal
        await Toast.fire({
          icon: 'success',
          title: '<Strong>Success!',
          text: '소원 보내기 성공!',
        });
  
        // Once the toast is finished, open the modal
        setOpen(true);
      } catch (error) {
        console.error("Error saving wish:", error);
        swal("Error", "서버 오류가 발생했습니다.", "error",{
        className: "swal-modal",
        });
      }
    } else {
      swal("Please enter all contents", "모든 칸에 입력해주세요", "error");
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
    <div
      className="container"
   
    >
      {/* Top Center Text */}
      <img src={slogan} alt="Slogan" className="slogan-image" />
      <p>  </p>
      {/* Title Logo Image */}
      <img src={logo} alt="Title Logo" className="title-image" />
       <p></p>
      {/* Subtext */}
      <img src={intro} alt="Intro" className='intro-image'/>
      {/* Input Forms */}
      <div className="form-container">
        {/* Name and Student Number Input */}
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 3,  width:700}}>
          <Box sx={{ flex: 1 ,backgroundColor: 'rgba(255,255,255, 1)'}}>
            <TextField
               label="학번"
               type="text"
               rows={1}
               value={id}
               onChange={(e) => {
                 const value = e.target.value;
                 if (!/^\d*$/.test(value)) {
                  (async () => {
                    await Toast.fire({
                    title: '<Strong>Try Again',
                    text: '숫자만 입력 가능합니다.',
                    icon: 'error'
                  })
                })() 
                 } else if (value.length > 9) {
                  (async () => {
                    await Toast.fire({
                    title: '<Strong>Try Again',
                    text: '학번을 다시 입력해주세요.',
                    icon: 'error'
                  })
                })() 
                 } else {
                   setId(value);
                 }
               }}
              fullWidth
              InputLabelProps={{
                style: { fontFamily: "DungGeunMo" }, // lable폰트
              }}
              InputProps={{
                style: { fontSize:"22px" ,fontFamily: "Yoonwoo" }  //입력폼 폰트
              }}
            />
          </Box>
          <Box sx={{ flex: 1, backgroundColor: 'rgba(255,255,255, 1)'}}>
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
                style: { fontSize:"22px" ,fontFamily: "Yoonwoo" }  //입력폼 폰트
              }}
            />
          </Box>
        </Box>

        {/* Wish Input */}
        <Box sx={{ marginBottom: 3 ,backgroundColor: 'rgba(255,255,255, 1)',width:700, height:290 }}>
          <TextField
            label="소원을 작성해주세요"
            multiline
            rows={8}
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            fullWidth
            InputLabelProps={{
              style: { fontFamily: "DungGeunMo" }, // lable폰트
            }}
            InputProps={{
              style: { fontSize:"22px" ,fontFamily: "Yoonwoo" }  //입력폼 폰트
            }}
          />
        </Box>

        {/* Thoughts Input */}
        <Box sx={{ marginBottom: 3 , backgroundColor: 'rgba(255,255,255, 1)',width:700,height:290}}>
          <TextField
            label="당신에게 미디어커뮤니케이션학과란?"
            multiline
            rows={8}
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
            fullWidth
            InputLabelProps={{
              style: { fontFamily: "DungGeunMo" }, // lable폰트
            }}
            InputProps={{
              style: { fontSize:"22px" ,fontFamily: "Yoonwoo" }  //입력폼 폰트
            }}
          />
        </Box>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2}className='button'>
          <Button  sx={{ width:300,fontFamily: 'DungGeunMo' }} variant="contained" startIcon={<SendIcon />} onClick={handleSend}>
            소원 보내기
          </Button>

          <Button sx={{ width:300,height:60,fontFamily: 'DungGeunMo' }} variant="outlined" startIcon={<DeleteIcon />} onClick={handleClear}>
            내용 지우기
          </Button>
        </Stack>
      </div>

      {/* Modal for Wish Submission */}
      <Modal open={open} onClose={() => setOpen(false)} sx={{ bgcolor: 'rgba(0, 0, 0, 0.5)', textAlign: 'center' }}>
        <ModalDialog aria-labelledby="nested-modal-title" 
                     aria-describedby="nested-modal-description"
                     sx={{ width: '600px', height: '450px', maxWidth: '100%', maxHeight: '100%', padding: 3 }}>
          <Typography fontFamily="Yoonwoo" fontSize="50px" id="nested-modal-title" level="h2">
            감사합니다!
          </Typography>
          <Typography fontFamily="Yoonwoo" fontSize="32px" id="nested-modal-description" textColor="text.tertiary">
            11월 28일
          </Typography>
          <Typography fontFamily="Yoonwoo" fontSize="32px" id="nested-modal-description" textColor="text.tertiary">
            다시, ON에서
          </Typography>
          <Typography fontFamily="Yoonwoo" fontSize="32px" id="nested-modal-description" textColor="text.tertiary">
            당신의 소원을 이뤄보세요!
          </Typography>
          <Box sx={{mt: 6, display: 'flex', gap: 1, flexDirection: 'column' }}>
            <Button size='lg' variant="outlined" color="success"  onClick={moveMenu2}>
              가온제 소개
            </Button>
            <Button sx={{mt:1}}size='lg' variant="outlined" color="success" onClick={moveMenu3}>
              E:UM 소개
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </div>
  );
}

export default ON;