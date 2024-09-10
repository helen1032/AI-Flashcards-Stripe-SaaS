import { SignUp } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography, Box, Link } from "@mui/material";

export default function SignUpPage(){
    return <Container maxWidth="xl">
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    Flashcard SaaS
                </Typography>
                <Button color="inherit">
                    <Link href="/sign-in" passhref>
                        Login
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link href="/sign-up" passhref>
                        Sign Up
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="h4">Sign Up</Typography>
            <SignUp/>
        </Box>
    </Container>
}