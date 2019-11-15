import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSpring, animated} from 'react-spring';
import Card from './core/card';
import Text from './core/text';

import {useSelector, useDispatch} from 'react-redux';
import {getModalHeader, getModalBody, getModalActive} from '../redux/selectors';
import Button, {BUTTON_TYPES, BUTTON_COLORS} from './core/button';
import ActionBar from './core/action-bar';
import {toggleModal} from '../redux/actions';

const AnimatedView = animated(View);

export default ({type, location, attention}) => {
  const header = useSelector(getModalHeader);
  const body = useSelector(getModalBody);
  const active = useSelector(getModalActive);

  // See toast for the original code...
  const props = useSpring({
    opacity: active ? 1 : 0,
    y: active ? 0 : 10,
    config: {tension: 200},
  });

  const displayProps = useSpring({
    display: active ? 'flex' : 'none',
    delay: active ? 0 : 250,
  });

  // Pressing close dismisses the modal.
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(toggleModal());
  };

  // Note: box-none means view cannot be target of touch events, but its subviews can be.
  return (
    <AnimatedView
      style={{
        ...styles.modalContainer,
        display: displayProps.display,
        opacity: props.opacity,
        transform: [{translateY: props.y}],
      }}
      pointerEvents="box-none">
      <Card header={header} style={{...styles.modal}}>
        <Text>{body}</Text>

        <ActionBar>
          <Button
            title={'Back'}
            type={BUTTON_TYPES.secondary}
            color={BUTTON_COLORS.coral}
            onPress={handlePress}
          />
          <Button title={'Read'} />
        </ActionBar>
      </Card>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  modal: {
    marginBottom: 20,
  },
});
