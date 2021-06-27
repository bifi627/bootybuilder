// File - /pages/index.js
import { observer } from "mobx-react";
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled from "styled-components";
import { useUser } from "../../hooks/hooks";
import { LoginViewModel } from "./LoginViewModel";

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const TextBox = styled.input`
    outline: none;
    height: 2em;
`;

const Button = styled.button`
    height: 2em;
`;

const Login = observer( () =>
{
    const [ viewModel ] = React.useState( new LoginViewModel() );

    const router = useRouter();

    const user = useUser();

    useEffect( () =>
    {
        if ( user )
        {
            console.log( { user } )
            router.push( "/" );
        }
    }, [ user ] );

    return (
        <>
            <Box>
                <ButtonContainer>
                    <TextBox type="email" placeholder="email" value={viewModel.email} onChange={e => viewModel.email = e.currentTarget.value}></TextBox>
                    <TextBox type="password" placeholder="password" value={viewModel.password} onChange={e => viewModel.password = e.currentTarget.value}></TextBox>
                    <Button onClick={() => viewModel.login()}>Login</Button>
                    <Button onClick={() => viewModel.register()}>Register</Button>
                </ButtonContainer>
            </Box>
            <div>
                {viewModel.error?.message}
            </div>
        </>
    )
} );

export default Login;
