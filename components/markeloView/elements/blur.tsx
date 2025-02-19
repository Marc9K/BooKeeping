import React, {Component} from 'react';
//
import {BlurView} from '@react-native-community/blur';
//
import {BlurContext, BlurContextValue} from '../../../App';

interface IProps {}

interface IState {}

export default class Blur extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <BlurContext.Consumer>
        {(value: BlurContextValue) => (
          <>
            {value.isVisible && (
              <BlurView
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                }}
                blurType="light"
                blurAmount={3}
                // reducedTransparencyFallbackColor="white"
              />
            )}
          </>
        )}
      </BlurContext.Consumer>
    );
  }
}
