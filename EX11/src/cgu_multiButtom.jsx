import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const MultiButtom = ({ onButtomClick, buttomCount }) => {
	var output = [];
	for (let i = 1; i < buttomCount + 1; ++i) {
		output.push(
			<Button
				variant="outlined"
				startIcon={<DeleteIcon />}
				onClick={onButtomClick}
			>
				第{i}個按鈕
			</Button>,
		);
	}
	return output;
};

export default MultiButtom;
