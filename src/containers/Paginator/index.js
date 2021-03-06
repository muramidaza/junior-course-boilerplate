import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectSelectedCategory } from '../../store/FormFilter/selectors';

import {
	selectCurrentPage,
	selectCountPages,
} from '../../store/ListContainer/selectors';

import './index.css';

const PAGINATOR_LENGTH = 5;

class Paginator extends React.Component {
	constructor(props) {
		super(props);

		this.state = { section: 0 };
	}

	handleClickPrev = () => {
		this.setState({ section: this.state.section - 1 });
	};

	handleClickNext = () => {
		this.setState({ section: this.state.section + 1 });
	};

	render() {
		const amount = this.props.countPages;

		this.arrPageNumbers = [];
		for (let i = 0, count = 0; count < amount; i++) {
			this.arrPageNumbers[i] = [];
			for (let j = 0; j < PAGINATOR_LENGTH && count < amount; j++, count++) {
				this.arrPageNumbers[i][j] = count;
			}
		}

		this.paginatorLimit = this.arrPageNumbers.length - 1;

		return (
			amount > 1 && (
				<div className="paginator">
					{this.state.section > 0 && (
						<button
							type="button"
							onClick={this.handleClickPrev}
							className={'paginator__buttonlimit'}
						>
							prev
						</button>
					)}

					{this.arrPageNumbers[this.state.section].map((item, i) => {
						const pathname =
							'/catalog/' + this.props.selectedCategory + '/' + item;

						return (
							<NavLink
								className="paginator__link"
								activeClassName="activ"
								isActive={(match, location) => {
									if (
										(!location.pathname.split('/')[3] && item == 0) ||
										location.pathname == pathname
									)
										return true;
								}}
								to={pathname}
								key={i}
							>
								{item + 1}
							</NavLink>
						);
					})}

					{this.state.section < this.paginatorLimit && (
						<button
							type="button"
							onClick={this.handleClickNext}
							className={'paginator__buttonlimit'}
						>
							next
						</button>
					)}
				</div>
			)
		);
	}
}

const mapStateToProps = store => {
	return {
		selectedCategory: selectSelectedCategory(store), //for make pathname
		currentPage: selectCurrentPage(store),
		countPages: selectCountPages(store),
	};
};

export default connect(mapStateToProps)(Paginator);
