import { Component } from "react";
import Error from "components/ErrorPage/Error";

class ErrorBoundary extends Component {
	state = {
		error: false,
	};
	componentDidCatch(error, errorInfo) {
		this.setState({ error: true });
	}
	render() {
		if (this.state.error === true) {
			return <Error />;
		}
		return this.props.children;
	}
}
export default ErrorBoundary;
