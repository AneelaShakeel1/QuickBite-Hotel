import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheetComponent = ({
  Component,
  onPressMenu,
  setClose,
  BGSheetColor,
  borderRadius,
  marginBottom
}) => {
  const refRBSheet = useRef();

  React.useEffect(() => {
    refRBSheet.current.open();
  });

  setClose ? refRBSheet.current.close() : null;

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      openDuration={60}
      closeOnPressMask={true}
      onClose={onPressMenu}
      animationType="slide"
      customStyles={{
        wrapper: {
          backgroundColor: '#12141975',
        },
        container: {
          backgroundColor: BGSheetColor,
          borderRadius: borderRadius || 15,
          width: '92%',
          alignSelf: 'center',
          height:270,
          marginBottom:marginBottom
        },
      }}>
      <Component />
    </RBSheet>
  );
};

export default BottomSheetComponent;
