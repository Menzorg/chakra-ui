export type Token =
  | "animations.spin"
  | "animations.ping"
  | "animations.pulse"
  | "animations.bounce"
  | "blurs.sm"
  | "blurs.base"
  | "blurs.md"
  | "blurs.lg"
  | "blurs.xl"
  | "blurs.2xl"
  | "blurs.3xl"
  | "borders.xs"
  | "borders.sm"
  | "borders.md"
  | "borders.lg"
  | "borders.xl"
  | "colors.transparent"
  | "colors.current"
  | "colors.black"
  | "colors.white"
  | "colors.whiteAlpha.50"
  | "colors.whiteAlpha.100"
  | "colors.whiteAlpha.200"
  | "colors.whiteAlpha.300"
  | "colors.whiteAlpha.400"
  | "colors.whiteAlpha.500"
  | "colors.whiteAlpha.600"
  | "colors.whiteAlpha.700"
  | "colors.whiteAlpha.800"
  | "colors.whiteAlpha.900"
  | "colors.whiteAlpha.950"
  | "colors.blackAlpha.50"
  | "colors.blackAlpha.100"
  | "colors.blackAlpha.200"
  | "colors.blackAlpha.300"
  | "colors.blackAlpha.400"
  | "colors.blackAlpha.500"
  | "colors.blackAlpha.600"
  | "colors.blackAlpha.700"
  | "colors.blackAlpha.800"
  | "colors.blackAlpha.900"
  | "colors.blackAlpha.950"
  | "colors.gray.50"
  | "colors.gray.100"
  | "colors.gray.200"
  | "colors.gray.300"
  | "colors.gray.400"
  | "colors.gray.500"
  | "colors.gray.600"
  | "colors.gray.700"
  | "colors.gray.800"
  | "colors.gray.900"
  | "colors.gray.950"
  | "colors.red.50"
  | "colors.red.100"
  | "colors.red.200"
  | "colors.red.300"
  | "colors.red.400"
  | "colors.red.500"
  | "colors.red.600"
  | "colors.red.700"
  | "colors.red.800"
  | "colors.red.900"
  | "colors.red.950"
  | "colors.orange.50"
  | "colors.orange.100"
  | "colors.orange.200"
  | "colors.orange.300"
  | "colors.orange.400"
  | "colors.orange.500"
  | "colors.orange.600"
  | "colors.orange.700"
  | "colors.orange.800"
  | "colors.orange.900"
  | "colors.orange.950"
  | "colors.yellow.50"
  | "colors.yellow.100"
  | "colors.yellow.200"
  | "colors.yellow.300"
  | "colors.yellow.400"
  | "colors.yellow.500"
  | "colors.yellow.600"
  | "colors.yellow.700"
  | "colors.yellow.800"
  | "colors.yellow.900"
  | "colors.yellow.950"
  | "colors.green.50"
  | "colors.green.100"
  | "colors.green.200"
  | "colors.green.300"
  | "colors.green.400"
  | "colors.green.500"
  | "colors.green.600"
  | "colors.green.700"
  | "colors.green.800"
  | "colors.green.900"
  | "colors.green.950"
  | "colors.teal.50"
  | "colors.teal.100"
  | "colors.teal.200"
  | "colors.teal.300"
  | "colors.teal.400"
  | "colors.teal.500"
  | "colors.teal.600"
  | "colors.teal.700"
  | "colors.teal.800"
  | "colors.teal.900"
  | "colors.teal.950"
  | "colors.blue.50"
  | "colors.blue.100"
  | "colors.blue.200"
  | "colors.blue.300"
  | "colors.blue.400"
  | "colors.blue.500"
  | "colors.blue.600"
  | "colors.blue.700"
  | "colors.blue.800"
  | "colors.blue.900"
  | "colors.blue.950"
  | "colors.cyan.50"
  | "colors.cyan.100"
  | "colors.cyan.200"
  | "colors.cyan.300"
  | "colors.cyan.400"
  | "colors.cyan.500"
  | "colors.cyan.600"
  | "colors.cyan.700"
  | "colors.cyan.800"
  | "colors.cyan.900"
  | "colors.cyan.950"
  | "colors.purple.50"
  | "colors.purple.100"
  | "colors.purple.200"
  | "colors.purple.300"
  | "colors.purple.400"
  | "colors.purple.500"
  | "colors.purple.600"
  | "colors.purple.700"
  | "colors.purple.800"
  | "colors.purple.900"
  | "colors.purple.950"
  | "colors.pink.50"
  | "colors.pink.100"
  | "colors.pink.200"
  | "colors.pink.300"
  | "colors.pink.400"
  | "colors.pink.500"
  | "colors.pink.600"
  | "colors.pink.700"
  | "colors.pink.800"
  | "colors.pink.900"
  | "colors.pink.950"
  | "durations.ultra-fast"
  | "durations.faster"
  | "durations.fast"
  | "durations.normal"
  | "durations.slow"
  | "durations.slower"
  | "durations.ultra-slow"
  | "easings.default"
  | "easings.linear"
  | "easings.in"
  | "easings.out"
  | "easings.in-out"
  | "fonts.heading"
  | "fonts.body"
  | "fonts.mono"
  | "fontSizes.3xs"
  | "fontSizes.2xs"
  | "fontSizes.xs"
  | "fontSizes.sm"
  | "fontSizes.md"
  | "fontSizes.lg"
  | "fontSizes.xl"
  | "fontSizes.2xl"
  | "fontSizes.3xl"
  | "fontSizes.4xl"
  | "fontSizes.5xl"
  | "fontSizes.6xl"
  | "fontSizes.7xl"
  | "fontSizes.8xl"
  | "fontSizes.9xl"
  | "fontWeights.hairline"
  | "fontWeights.thin"
  | "fontWeights.light"
  | "fontWeights.normal"
  | "fontWeights.medium"
  | "fontWeights.semibold"
  | "fontWeights.bold"
  | "fontWeights.extrabold"
  | "fontWeights.black"
  | "letterSpacings.tighter"
  | "letterSpacings.tight"
  | "letterSpacings.normal"
  | "letterSpacings.wide"
  | "letterSpacings.wider"
  | "letterSpacings.widest"
  | "lineHeights.3"
  | "lineHeights.4"
  | "lineHeights.5"
  | "lineHeights.6"
  | "lineHeights.7"
  | "lineHeights.8"
  | "lineHeights.9"
  | "lineHeights.10"
  | "lineHeights.shorter"
  | "lineHeights.short"
  | "lineHeights.base"
  | "lineHeights.tall"
  | "lineHeights.taller"
  | "radii.xs"
  | "radii.sm"
  | "radii.md"
  | "radii.lg"
  | "radii.xl"
  | "radii.2xl"
  | "radii.3xl"
  | "radii.full"
  | "spacing.1"
  | "spacing.2"
  | "spacing.3"
  | "spacing.4"
  | "spacing.5"
  | "spacing.6"
  | "spacing.7"
  | "spacing.8"
  | "spacing.9"
  | "spacing.10"
  | "spacing.12"
  | "spacing.14"
  | "spacing.16"
  | "spacing.20"
  | "spacing.24"
  | "spacing.28"
  | "spacing.32"
  | "spacing.36"
  | "spacing.40"
  | "spacing.44"
  | "spacing.48"
  | "spacing.52"
  | "spacing.56"
  | "spacing.60"
  | "spacing.64"
  | "spacing.72"
  | "spacing.80"
  | "spacing.96"
  | "spacing.px"
  | "spacing.0.5"
  | "spacing.1.5"
  | "spacing.2.5"
  | "spacing.3.5"
  | "sizes.1"
  | "sizes.2"
  | "sizes.3"
  | "sizes.4"
  | "sizes.5"
  | "sizes.6"
  | "sizes.7"
  | "sizes.8"
  | "sizes.9"
  | "sizes.10"
  | "sizes.12"
  | "sizes.14"
  | "sizes.16"
  | "sizes.20"
  | "sizes.24"
  | "sizes.28"
  | "sizes.32"
  | "sizes.36"
  | "sizes.40"
  | "sizes.44"
  | "sizes.48"
  | "sizes.52"
  | "sizes.56"
  | "sizes.60"
  | "sizes.64"
  | "sizes.72"
  | "sizes.80"
  | "sizes.96"
  | "sizes.px"
  | "sizes.0.5"
  | "sizes.1.5"
  | "sizes.2.5"
  | "sizes.3.5"
  | "sizes.max"
  | "sizes.min"
  | "sizes.full"
  | "sizes.3xs"
  | "sizes.2xs"
  | "sizes.xs"
  | "sizes.sm"
  | "sizes.md"
  | "sizes.lg"
  | "sizes.xl"
  | "sizes.2xl"
  | "sizes.3xl"
  | "sizes.4xl"
  | "sizes.5xl"
  | "sizes.6xl"
  | "sizes.7xl"
  | "sizes.8xl"
  | "sizes.prose"
  | "sizes.container.sm"
  | "sizes.container.md"
  | "sizes.container.lg"
  | "sizes.container.xl"
  | "zIndex.hide"
  | "zIndex.base"
  | "zIndex.docked"
  | "zIndex.dropdown"
  | "zIndex.sticky"
  | "zIndex.banner"
  | "zIndex.overlay"
  | "zIndex.modal"
  | "zIndex.popover"
  | "zIndex.skipLink"
  | "zIndex.toast"
  | "zIndex.tooltip"
  | "zIndex.max"
  | "colors.bg"
  | "colors.bg.subtle"
  | "colors.bg.muted"
  | "colors.bg.inverse"
  | "colors.bg.accent"
  | "colors.bg.error"
  | "colors.bg.warning"
  | "colors.bg.success"
  | "colors.bg.info"
  | "colors.fg"
  | "colors.fg.muted"
  | "colors.fg.subtle"
  | "colors.fg.accent"
  | "colors.fg.inverse"
  | "colors.fg.error"
  | "colors.fg.warning"
  | "colors.fg.success"
  | "colors.fg.info"
  | "colors.border"
  | "colors.border.muted"
  | "colors.border.subtle"
  | "colors.border.accent"
  | "colors.border.disabled"
  | "colors.border.error"
  | "colors.border.warning"
  | "colors.border.success"
  | "colors.border.info"
  | "shadows.xs"
  | "shadows.sm"
  | "shadows.md"
  | "shadows.lg"
  | "shadows.xl"
  | "shadows.2xl"
  | "shadows.inset"
  | "spacing.-1"
  | "spacing.-2"
  | "spacing.-3"
  | "spacing.-4"
  | "spacing.-5"
  | "spacing.-6"
  | "spacing.-7"
  | "spacing.-8"
  | "spacing.-9"
  | "spacing.-10"
  | "spacing.-12"
  | "spacing.-14"
  | "spacing.-16"
  | "spacing.-20"
  | "spacing.-24"
  | "spacing.-28"
  | "spacing.-32"
  | "spacing.-36"
  | "spacing.-40"
  | "spacing.-44"
  | "spacing.-48"
  | "spacing.-52"
  | "spacing.-56"
  | "spacing.-60"
  | "spacing.-64"
  | "spacing.-72"
  | "spacing.-80"
  | "spacing.-96"
  | "spacing.-px"
  | "spacing.-0.5"
  | "spacing.-1.5"
  | "spacing.-2.5"
  | "spacing.-3.5"
  | "colors.colorPalette"
  | "colors.colorPalette.50"
  | "colors.colorPalette.100"
  | "colors.colorPalette.200"
  | "colors.colorPalette.300"
  | "colors.colorPalette.400"
  | "colors.colorPalette.500"
  | "colors.colorPalette.600"
  | "colors.colorPalette.700"
  | "colors.colorPalette.800"
  | "colors.colorPalette.900"
  | "colors.colorPalette.950"
  | "colors.colorPalette.subtle"
  | "colors.colorPalette.muted"
  | "colors.colorPalette.inverse"
  | "colors.colorPalette.accent"
  | "colors.colorPalette.error"
  | "colors.colorPalette.warning"
  | "colors.colorPalette.success"
  | "colors.colorPalette.info"
  | "colors.colorPalette.disabled"

export type ColorPalette =
  | "transparent"
  | "current"
  | "black"
  | "white"
  | "whiteAlpha"
  | "blackAlpha"
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "cyan"
  | "purple"
  | "pink"
  | "bg"
  | "fg"
  | "border"

export type AnimationsToken = "spin" | "ping" | "pulse" | "bounce"

export type BlursToken = "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl"

export type BordersToken = "xs" | "sm" | "md" | "lg" | "xl"

export type ColorsToken =
  | "transparent"
  | "current"
  | "black"
  | "white"
  | "whiteAlpha.50"
  | "whiteAlpha.100"
  | "whiteAlpha.200"
  | "whiteAlpha.300"
  | "whiteAlpha.400"
  | "whiteAlpha.500"
  | "whiteAlpha.600"
  | "whiteAlpha.700"
  | "whiteAlpha.800"
  | "whiteAlpha.900"
  | "whiteAlpha.950"
  | "blackAlpha.50"
  | "blackAlpha.100"
  | "blackAlpha.200"
  | "blackAlpha.300"
  | "blackAlpha.400"
  | "blackAlpha.500"
  | "blackAlpha.600"
  | "blackAlpha.700"
  | "blackAlpha.800"
  | "blackAlpha.900"
  | "blackAlpha.950"
  | "gray.50"
  | "gray.100"
  | "gray.200"
  | "gray.300"
  | "gray.400"
  | "gray.500"
  | "gray.600"
  | "gray.700"
  | "gray.800"
  | "gray.900"
  | "gray.950"
  | "red.50"
  | "red.100"
  | "red.200"
  | "red.300"
  | "red.400"
  | "red.500"
  | "red.600"
  | "red.700"
  | "red.800"
  | "red.900"
  | "red.950"
  | "orange.50"
  | "orange.100"
  | "orange.200"
  | "orange.300"
  | "orange.400"
  | "orange.500"
  | "orange.600"
  | "orange.700"
  | "orange.800"
  | "orange.900"
  | "orange.950"
  | "yellow.50"
  | "yellow.100"
  | "yellow.200"
  | "yellow.300"
  | "yellow.400"
  | "yellow.500"
  | "yellow.600"
  | "yellow.700"
  | "yellow.800"
  | "yellow.900"
  | "yellow.950"
  | "green.50"
  | "green.100"
  | "green.200"
  | "green.300"
  | "green.400"
  | "green.500"
  | "green.600"
  | "green.700"
  | "green.800"
  | "green.900"
  | "green.950"
  | "teal.50"
  | "teal.100"
  | "teal.200"
  | "teal.300"
  | "teal.400"
  | "teal.500"
  | "teal.600"
  | "teal.700"
  | "teal.800"
  | "teal.900"
  | "teal.950"
  | "blue.50"
  | "blue.100"
  | "blue.200"
  | "blue.300"
  | "blue.400"
  | "blue.500"
  | "blue.600"
  | "blue.700"
  | "blue.800"
  | "blue.900"
  | "blue.950"
  | "cyan.50"
  | "cyan.100"
  | "cyan.200"
  | "cyan.300"
  | "cyan.400"
  | "cyan.500"
  | "cyan.600"
  | "cyan.700"
  | "cyan.800"
  | "cyan.900"
  | "cyan.950"
  | "purple.50"
  | "purple.100"
  | "purple.200"
  | "purple.300"
  | "purple.400"
  | "purple.500"
  | "purple.600"
  | "purple.700"
  | "purple.800"
  | "purple.900"
  | "purple.950"
  | "pink.50"
  | "pink.100"
  | "pink.200"
  | "pink.300"
  | "pink.400"
  | "pink.500"
  | "pink.600"
  | "pink.700"
  | "pink.800"
  | "pink.900"
  | "pink.950"
  | "bg"
  | "bg.subtle"
  | "bg.muted"
  | "bg.inverse"
  | "bg.accent"
  | "bg.error"
  | "bg.warning"
  | "bg.success"
  | "bg.info"
  | "fg"
  | "fg.muted"
  | "fg.subtle"
  | "fg.accent"
  | "fg.inverse"
  | "fg.error"
  | "fg.warning"
  | "fg.success"
  | "fg.info"
  | "border"
  | "border.muted"
  | "border.subtle"
  | "border.accent"
  | "border.disabled"
  | "border.error"
  | "border.warning"
  | "border.success"
  | "border.info"
  | "colorPalette"
  | "colorPalette.50"
  | "colorPalette.100"
  | "colorPalette.200"
  | "colorPalette.300"
  | "colorPalette.400"
  | "colorPalette.500"
  | "colorPalette.600"
  | "colorPalette.700"
  | "colorPalette.800"
  | "colorPalette.900"
  | "colorPalette.950"
  | "colorPalette.subtle"
  | "colorPalette.muted"
  | "colorPalette.inverse"
  | "colorPalette.accent"
  | "colorPalette.error"
  | "colorPalette.warning"
  | "colorPalette.success"
  | "colorPalette.info"
  | "colorPalette.disabled"

export type DurationsToken =
  | "ultra-fast"
  | "faster"
  | "fast"
  | "normal"
  | "slow"
  | "slower"
  | "ultra-slow"

export type EasingsToken = "default" | "linear" | "in" | "out" | "in-out"

export type FontsToken = "heading" | "body" | "mono"

export type FontSizesToken =
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl"

export type FontWeightsToken =
  | "hairline"
  | "thin"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black"

export type LetterSpacingsToken =
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest"

export type LineHeightsToken =
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "shorter"
  | "short"
  | "base"
  | "tall"
  | "taller"

export type RadiiToken =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full"

export type SpacingToken =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96"
  | "px"
  | "0.5"
  | "1.5"
  | "2.5"
  | "3.5"
  | "-1"
  | "-2"
  | "-3"
  | "-4"
  | "-5"
  | "-6"
  | "-7"
  | "-8"
  | "-9"
  | "-10"
  | "-12"
  | "-14"
  | "-16"
  | "-20"
  | "-24"
  | "-28"
  | "-32"
  | "-36"
  | "-40"
  | "-44"
  | "-48"
  | "-52"
  | "-56"
  | "-60"
  | "-64"
  | "-72"
  | "-80"
  | "-96"
  | "-px"
  | "-0.5"
  | "-1.5"
  | "-2.5"
  | "-3.5"

export type SizesToken =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96"
  | "px"
  | "0.5"
  | "1.5"
  | "2.5"
  | "3.5"
  | "max"
  | "min"
  | "full"
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "prose"
  | "container.sm"
  | "container.md"
  | "container.lg"
  | "container.xl"

export type ZIndexToken =
  | "hide"
  | "base"
  | "docked"
  | "dropdown"
  | "sticky"
  | "banner"
  | "overlay"
  | "modal"
  | "popover"
  | "skipLink"
  | "toast"
  | "tooltip"
  | "max"

export type ShadowsToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "inset"

export type AnimationName =
  | "spin"
  | "bg-position"
  | "position"
  | "pulse"
  | "fade-in"
  | "fade-out"
  | "scale-fade"
  | "slide-fade"
  | "slide-left"
  | "slide-right"
  | "slide-up"
  | "slide-down"

export type Tokens = {
  animations: AnimationsToken
  blurs: BlursToken
  borders: BordersToken
  colors: ColorsToken
  durations: DurationsToken
  easings: EasingsToken
  fonts: FontsToken
  fontSizes: FontSizesToken
  fontWeights: FontWeightsToken
  letterSpacings: LetterSpacingsToken
  lineHeights: LineHeightsToken
  radii: RadiiToken
  spacing: SpacingToken
  sizes: SizesToken
  zIndex: ZIndexToken
  shadows: ShadowsToken
  animationName: AnimationName
} & { [token: string]: never }
