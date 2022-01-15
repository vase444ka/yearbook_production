import React, { FC, useContext, useState } from 'react';
import { Page } from '../Page';
import { Input } from '../EditYearbookPage/Input';
import Button from '@mui/material/Button';
import { UserContext } from '../../contexts/UserContext/UserContext';

export const LoginPage: FC = () => {
    const [currentUsername, setUsername] = useState<string>('')
    const [currentPassword, setPassword] = useState<string>('')
    const userContext = useContext(UserContext)

    return (
        <Page>
            <Page.Content>
                <Page.Title text='Log in to your account' />
                <form>
                    <Input
                        type="text"
                        id="username"
                        label="Username"
                        value={currentUsername}
                        onChange={newUsername => {setUsername(newUsername)}}
                    />
                    <Input
                        type="password"
                        id="password"
                        label="Password"
                        value={currentPassword}
                        onChange={newPassword => {setPassword(newPassword)}}
                    />
                </form>
                <Button
                  variant='contained'
                  size='large'
                  color='primary'
                  onClick={() => userContext.login({
                      username: currentUsername,
                      password: currentPassword                                                    
                    })}
                >
                  Log in
              </Button>
            </Page.Content>
        </Page>
    )
}
