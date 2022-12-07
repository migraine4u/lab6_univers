import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
// import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import theme from '../theme';
import './Login.scss';
// import { tw } from 'https://cdn.skypack.dev/twind';

const Login = ({ open, setOpen }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    theme.spacing(4);

    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [auth, setAuth] = React.useState(0);

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                        <ButtonGroup theme={theme} variant="contained">
                            <Button
                                onClick={() => setAuth(0)}
                                disabled={auth === 0 ? true : false}
                            >
                                Регистрация
                            </Button>
                            <Button
                                onClick={() => setAuth(1)}
                                disabled={auth === 1 ? true : false}
                            >
                                Вход
                            </Button>
                        </ButtonGroup>
                        {auth === 0 ? (
                            <div>
                                <TextField
                                    className="${tw`h-screen bg-purple-400 flex items-center justify-center`}"
                                    id="outlined-basic"
                                    label="Имя"
                                    variant="outlined"
                                />

                                <TextField
                                    id="outlined-basic"
                                    label="Фамилия"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Пароль"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Пароль ещё раз"
                                    variant="outlined"
                                />
                                <Button variant="outlined">Регистрация</Button>
                            </div>
                        ) : (
                            <div>
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Пароль"
                                    variant="outlined"
                                />
                                <Button variant="outlined">Авторизация</Button>
                            </div>
                        )}
                    </Box>
                </Modal>
            </ThemeProvider>
        </div>
    );
};

export default Login;
