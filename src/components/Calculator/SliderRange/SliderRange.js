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
	console.log('render slider');



	return (
		<span className={styles.slider}>
			<span style={{ left: `${ofssetCircle}%` }} className={clsx(styles.slider_value, { [styles.show]: touchingThumb })}>
				<span>{rangeValue}/h</span>
			</span>
			<span className={styles.slider_container}>
				<span className={clsx(styles.value, styles.left)}>5</span>
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
				<span className={clsx(styles.value, styles.right)}>14</span>
			</span>
		</span>

	)
}

export default SliderRange