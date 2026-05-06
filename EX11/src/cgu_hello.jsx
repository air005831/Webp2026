const HelloCGU = ({ text, count }) => {
	const styleArgument = {
		fontSize: `${20 + count * 5}px`,
		color: "red",
		lineHeight: "1.2",
	};
	return <h1 style={styleArgument}>{text}</h1>;
};

export default HelloCGU;
