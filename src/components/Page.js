import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
	onYearBtnClick(e) {
		this.props.setYear(+e.target.innerText)
	}
	render() {
		const { year, photos } = this.props
		return <div className='ib page'>
			<div>
				<button className='btn' onClick={::this.onYearBtnClick}>2018</button>
				<button className='btn' onClick={::this.onYearBtnClick}>2017</button>
				<button className='btn' onClick={::this.onYearBtnClick}>2016</button>
			</div>
			<h3>{year} year</h3>
			<p>You have {photos.length} photos</p>
		</div>
	}
}

Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	setYear: PropTypes.func.isRequired
}