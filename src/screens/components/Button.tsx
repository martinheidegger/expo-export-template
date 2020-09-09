import React from 'react'
import { View, ViewStyle, TouchableOpacity } from 'react-native'
import { elementButton } from '../../styles/design/layer/elementButton'
import { localized, Locale } from '../util/locale'
import { SketchPolygon } from '../../styles/util/react/SketchPolygon'
import { SketchTextBox } from '../../styles/util/react/SketchTextBox'

const label = localized({ [Locale.ja]: elementButton.labelJa, [Locale.en]: elementButton.labelEn })

const styles: { container: ViewStyle, touch: ViewStyle } = {
  container: {
    width: elementButton.width,
    height: elementButton.height
  },
  touch: {
    top: 0,
    left: 0,
    width: elementButton.width,
    height: elementButton.height
  }
}

export const Button = ({ onPress, value }: { value?: string, onPress?: () => any }): JSX.Element => {
  return <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.touch}>
        <SketchPolygon layer={elementButton} prototype={elementButton.bg} />
        <SketchTextBox layer={elementButton} prototype={label} value={value} />
      </View>
    </TouchableOpacity>
  </View>
}
