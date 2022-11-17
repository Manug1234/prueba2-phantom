music.playTone(988, music.beat(BeatFraction.Quarter))
music.playTone(880, music.beat(BeatFraction.Quarter))
music.playTone(988, music.beat(BeatFraction.Double))
music.playTone(880, music.beat(BeatFraction.Half))
music.playTone(784, music.beat(BeatFraction.Half))
music.playTone(698, music.beat(BeatFraction.Half))
music.playTone(659, music.beat(BeatFraction.Half))
music.playTone(622, music.beat(BeatFraction.Double))
music.playTone(659, music.beat(BeatFraction.Whole))
basic.showLeds(`
    . # # # .
    # . # . #
    # # . # #
    . # # # .
    . # # # .
    `)
music.playSoundEffect(music.createSoundEffect(
WaveShape.Triangle,
300,
200,
255,
255,
75,
SoundExpressionEffect.None,
InterpolationCurve.Curve
), SoundExpressionPlayMode.UntilDone)
