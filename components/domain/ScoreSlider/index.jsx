import PropTypes from 'prop-types'
import { Slider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { useState, useEffect, useRef } from 'react'
import theme from 'styles/theme'
import { ToastContainer, toast } from 'react-toastify'
import * as Style from './style'

const SliderTheme = withStyles({
  root: {
    margin: 10,
  },
  rail: {
    height: 7,
    backgroundColor: '#bfbfbf',
    marginTop: -3,
    borderRadius: 10,
  },
  track: {
    height: 7,
    color: `${theme.surfColor.$blue__1}`,
    marginTop: -3,
    borderRadius: 10,
  },
  thumb: {
    backgroundColor: '#fff',
    border: `1px solid ${theme.surfColor.$blue__2}`,
  },
  mark: {
    width: 0,
  },
  markActive: {
    backgroundColor: `${theme.surfColor.$blue__3}`,
    height: 1,
    width: 0,
    marginTop: -1,
  },
})(Slider)

const TOAST_SLIDER_ID = 'toast-slider-id'

const ScoreSlider = ({ onChange, initialScore }) => {
  const validateScore = (inputValue, newValue) => {
    const value = inputValue || newValue
    if (+value < 0 || +value > 100) {
      toast.error('0 ~ 100 사이로 입력해주세요', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        toastId: TOAST_SLIDER_ID,
      })
      return false
    }
    return true
  }

  const checkLength = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
  }
  const [score, setScore] = useState(initialScore)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    onChange && onChange(score)
  }, [score])

  const handleScore = (e, newValue) => {
    if (!validateScore(e.target.value, newValue)) return

    if (e.target.value === undefined) {
      setScore(newValue)
    } else if (e.target.value === '') {
      setScore(0)
    } else {
      // input으로 받는 것
      setScore(+e.target.value)
    }
  }

  const handlePlus = () => {
    if (!validateScore('', score + 1)) return
    setScore(() => score + 1)
  }

  const handleMinus = () => {
    if (!validateScore('', score - 1)) return
    setScore(() => score - 1)
  }

  return (
    <>
      <ToastContainer />
      <Style.SliderWrapper>
        <SliderTheme
          aria-label="SliderTheme"
          value={score}
          defaultValue={53}
          valueLabelDisplay="auto"
          step={5}
          marks
          min={0}
          max={100}
          onChange={handleScore}
        />
        <Style.InputWrapper>
          <Style.InputScore
            ref={inputRef}
            type="number"
            value={score}
            onChange={handleScore}
            onInput={checkLength}
            maxLength={3}
          />
          <Style.ButtonWrapper>
            <button type="button" onClick={handlePlus}>
              +
            </button>
            <button type="button" onClick={handleMinus}>
              -
            </button>
          </Style.ButtonWrapper>
        </Style.InputWrapper>
      </Style.SliderWrapper>
    </>
  )
}

ScoreSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
  initialScore: PropTypes.number,
}
ScoreSlider.defaultProps = {
  initialScore: 0,
}

export default ScoreSlider
