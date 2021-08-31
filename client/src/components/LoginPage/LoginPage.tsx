import React, { FC, useState } from 'react';
import { Page } from '../Page';
import { Input } from '../EditYearbookPage/Input';

export const LoginPage: FC = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <Page>
            <Page.Content>
                <Page.Title text='Log in to your account' />
                <form>
                    <Input
                        type="text"
                        id="username"
                        label="Username"
                        value={username}
                        onChange={newUsername => {setUsername(newUsername)}}
                    />
                    <Input
                        type="password"
                        id="password"
                        label="Password"
                        value={password}
                        onChange={newSchool => {setPassword(newSchool)}}
                    />
                </form>
            </Page.Content>
        </Page>
    )
}
