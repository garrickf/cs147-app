import Card from './core/card';
import TextInput from 'react-native';

export default () => {
    return(
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