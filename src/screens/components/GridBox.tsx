import React from 'react'
import { View, ViewStyle } from 'react-native'
import { Locale, localeContent } from '../util/locale'
import { elementBox } from '../../styles/design/layer/elementBox'
import { SketchTextBox } from '../../styles/util/react/SketchTextBox'

const style: ViewStyle = {
  width: elementBox.width,
  height: elementBox.height,
  backfaceVisibility: 'visible',
  backgroundColor: elementBox.layers.bg.fill.color,
  margin: 5
}

const labels = { [Locale.ja]: elementBox.layers.labelJa, [Locale.en]: elementBox.layers.labelEn }

export const GridBox = ({ label }: { label: string }): JSX.Element => {
  const labelItem = localeContent(labels, label)
  return <View style={style}>
    <SketchTextBox layer={elementBox} prototype={labelItem} value={label} />
  </View>
}
