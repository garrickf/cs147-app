import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Linking,
  Image,
} from 'react-native';
import {useSpring, animated} from 'react-spring';
import Card from './core/card';
import Text from './core/text';

import {useSelector, useDispatch} from 'react-redux';
import {
  getModalHeader,
  getModalBody,
  getModalActive,
  getModalType,
  getModalContent,
  getModalPayload,
} from '../redux/selectors';
import Button, {BUTTON_TYPES, BUTTON_COLORS} from './core/button';
import ActionBar from './core/action-bar';
import {toggleModal, updateRead} from '../redux/actions';
import NewsModal from './news-modal';
import {effects, grayHex} from '../styles';

const AnimatedView = animated(View);

export default ({navigation}) => {
  const header = useSelector(getModalHeader);
  const body = useSelector(getModalBody);
  const active = useSelector(getModalActive);
  const type = useSelector(getModalType);
  const story = useSelector(getModalContent);
  const {idx} = useSelector(getModalPayload);

  // See toast for the original clode...
  const props = useSpring({
    opacity: active ? 1 : 0,
    y: active ? 0 : 10,
    config: {tension: 200},
  });

  const displayProps = useSpring({
    from: {display: 'none'},
    to: {display: active ? 'flex' : 'none'},
    delay: active ? 0 : 250,
  });

  // Pressing close dismisses the modal.
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(toggleModal());
  };

  const handleBackgroundPress = () => {
    dispatch(toggleModal());
  };

  const viewContent = () => {
    dispatch(updateRead(idx));
    if (type === 'NEWS') {
      Linking.openURL(story[0]).catch(err =>
        console.error('An error occurred', err),
      );
    } else {
      navigation.navigate('ViewImage', {
        path: story[0],
      });
    }
  };

  viewReadButton = <Button title={'View'} onPress={viewContent} />;
  if (type === 'NEWS') {
    viewReadButton = <Button title={'Read'} onPress={viewContent} />;
  }

  ImagePreview = <View style={styles.emptyView} />;
  if (type == 'MEDIA') {
    ImagePreview = (
      <Image style={styles.preview} resizeMode="cover" source={story[0]} />
    );
  }

  NewsPreview = <View style={styles.emptyView} />;
  if (type == 'NEWS') {
    NewsPreview = (
      <View style={styles.emptyView}>
        <NewsModal style={styles.icon} source={story[1]} />
      </View>
    );
  }
  animal = story[2];
  // Note: box-none means view cannot be target of touch events, but its subviews can be.
  return (
    <>
      <TouchableWithoutFeedback onPress={handleBackgroundPress}>
        <View
          style={{...styles.backingCard, display: active ? 'flex' : 'none'}}
        />
      </TouchableWithoutFeedback>
      <AnimatedView
        style={{
          ...styles.modalContainer,
          display: displayProps.display,
          opacity: props.opacity,
          transform: [{translateY: props.y}],
        }}
        pointerEvents="box-none">
        {NewsPreview}
        <Card header={header} style={{...styles.modal}}>
          <Text>{body}</Text>
          {ImagePreview}
          <ActionBar>
            <Text style={{fontSize: 12, color: grayHex, textAlign: 'right'}}>
              {' '}
              Shared by {'\n'} anonymous {animal}{' '}
            </Text>
            <Button
              title={'Back'}
              type={BUTTON_TYPES.secondary}
              color={BUTTON_COLORS.coral}
              onPress={handlePress}
            />
            {viewReadButton}
          </ActionBar>
        </Card>
      </AnimatedView>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'relative',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  emptyView: {
    flex: 0,
  },
  preview: {
    width: '100%',
    height: 180,
  },
  backingCard: {
    // Styles the backing card which covers the entire screen and can be touched
    // to close the modal.
    position: 'absolute',
    width: '100%',
    height: '120%',
    top: -50,
  },
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
