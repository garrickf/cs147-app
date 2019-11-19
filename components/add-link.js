import Card from './core/card';
import TextInput from 'react-native';
import React from 'react';
import ActionBar from './core/action-bar';
import Button, { BUTTON_TYPES, BUTTON_COLORS } from './core/button'

export default () => {
    return (
    <Card header={'🗞 Share the News'}>
        <TextInput
        style={{ height: 40, paddingHorizontal: 10, borderColor: 'gray', borderWidth: 1 }}
        placeholder=" Paste a link"
        />
        <ActionBar>
            <Button
                title={'CANCEL'}
                type={BUTTON_TYPES.secondary}
                color={BUTTON_COLORS.coral}
            />
            <Button title={'POST'} />
        </ActionBar>
    </Card>
    )
};