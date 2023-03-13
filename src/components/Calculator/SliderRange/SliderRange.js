import clsx from 'clsx';
import React, { useState } from 'react'
import styles from './Slider.module.scss'


const SliderRange = ({ max, min, step, onChange }) => {
	const [widthFillBar, setWidthFillBar] = useState();
	const [ofssetCircle, setOfssetCircle] = useState(0);
	const [rangeValue, setRangeValue] = useState(min);
	const [touchingThumb, setTouchingThumb] = useState(false);

	const handleInputSlide = (e) => {
		setRangeValue(+e.target.value);
		setWidthFillBar((((+e.target.value - min) * 100) / (max - min)));
		setOfssetCircle((+e.target.value - min) * 10);
	}




	return (
		<div className={styles.slider}>
			<div style={{ left: `${ofssetCircle}%` }} className={clsx(styles.slider_value, { [styles.show]: touchingThumb })}>
				<span>{rangeValue}/h</span>
			</div>
			<div className={styles.slider_container}>
				<div className={clsx(styles.value, styles.left)}>5</div>
				<span className={clsx(styles.slider_bar)}>
					<span style={{ width: `${widthFillBar}%` }} className={styles.slider_fill}></span>
				</span>
				<input
					value={rangeValue}
					onInput={handleInputSlide}
					onChange={onChange}
					onMouseEnter={() => setTouchingThumb(true)}
					onMouseLeave={() => setTouchingThumb(false)}
					onTouchStart={() => setTouchingThumb(true)}
					onTouchEnd={() => setTouchingThumb(false)}

					type="range"
					className={styles.slider_input} min={min} max={max} step={step} />
				<div className={clsx(styles.value, styles.right)}>14</div>
			</div>
		</div>

	)
}

export default SliderRange