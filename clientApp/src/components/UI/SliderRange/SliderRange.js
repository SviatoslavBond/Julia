import clsx from 'clsx';
import React, { useState } from 'react'
import styles from './Slider.module.scss'


const SliderRange = ({ max, min, step, onChange, label, disabled = true }) => {
	const [widthFillBar, setWidthFillBar] = useState();
	const [rangeValue, setRangeValue] = useState(min);
	const [touchingThumb, setTouchingThumb] = useState(false);

	const handleInputSlide = (e) => {
		setRangeValue(+e.target.value);
		setWidthFillBar((((+e.target.value - min) * 100) / (max - min)));

	}

	return (
		<span className={styles.slider}>

			<span style={{ left: `${widthFillBar}%` }} className={clsx(styles.slider_value, { [styles.show]: touchingThumb })}>
				<span>{rangeValue}/{label}</span>
			</span>

			<span className={styles.slider_container}>
				<span className={clsx(styles.value, styles.left)}>{min}</span>
				<span
					style={{
						backgroundColor: disabled ? '#ddd7ca' : 'grey'
					}}
					className={clsx(styles.slider_bar)}>
					<span
						style={{
							width: `${widthFillBar}%`,
						}} className={styles.slider_fill}></span>
				</span>
				<span style={{
					left: `${widthFillBar}%`,
					backgroundColor: disabled ? '#ae8547' : 'grey'
				}} className={styles.slider_thumb}></span>
				<input
					disabled={!disabled}
					value={rangeValue}
					onInput={handleInputSlide}
					onChange={onChange}
					onMouseEnter={() => setTouchingThumb(true)}
					onTouchStart={() => setTouchingThumb(true)}


					type="range"
					className={styles.slider_input} min={min} max={max} step={step} />
				<span className={clsx(styles.value, styles.right)}>{max}</span>
			</span>
		</span>

	)
}

export default SliderRange