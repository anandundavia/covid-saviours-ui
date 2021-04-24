// @ts-check
import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const styles = theme => ({
	"find-saviours-container": {
		padding: theme.spacing.unit
	},
	"filters-container": {
		"padding-top": theme.spacing.unit,
		"padding-bottom": theme.spacing.unit,
		"& > div > div": {
			"padding-right": theme.spacing.unit * 2,
			"padding-bottom": theme.spacing.unit * 2
		}
	},
	"filter-dropdown": {
		display: "flex",
		"padding-top": theme.spacing.unit * 2,
		"padding-bottom": theme.spacing.unit * 2,
		"& > div": {
			"padding-right": theme.spacing.unit * 4,
			"padding-bottom": theme.spacing.unit * 4
		},
		"& .MuiInput-root": {
			minWidth: "10vw"
		}
	},
	"filter-cta-container": {
		"padding-top": theme.spacing.unit,
		"padding-bottom": theme.spacing.unit,
		"& > button": {
			"margin-right": theme.spacing.unit * 4
		}
	}
});

class FindSaviour extends React.Component {
	renderFilters() {
		const { classes } = this.props;
		return (
			<div>
				<Typography variant="h5" color="textPrimary">
					Filters
				</Typography>
				<div className={classes["filters-container"]}>
					<div>
						<TextField label="City" variant="outlined" />
						<TextField label="Provision" variant="outlined" />
						<TextField label="Pincode" variant="outlined" />
						<TextField label="Contact" variant="outlined" />
					</div>
					<div>
						<div className={classes["filter-dropdown"]}>
							<div>
								<InputLabel id="form-filter--remedisivir">Remedisivir</InputLabel>
								<Select
									labelId="form-filter--remedisivir"
									value={undefined}
									// onChange={handleChange}
								>
									<MenuItem value={1}>Available</MenuItem>
									<MenuItem value={-1}>Not Available</MenuItem>
								</Select>
							</div>
							<div>
								<InputLabel id="form-filter--oxygen">Oxygen</InputLabel>
								<Select
									labelId="form-filter--oxygen"
									value={undefined}
									// onChange={handleChange}
								>
									<MenuItem value={1}>Available</MenuItem>
									<MenuItem value={-1}>Not Available</MenuItem>
								</Select>
							</div>
							<div>
								<InputLabel id="form-filter--beds">Beds</InputLabel>
								<Select
									labelId="form-filter--beds"
									value={undefined}
									// onChange={handleChange}
								>
									<MenuItem value={1}>Available</MenuItem>
									<MenuItem value={-1}>Not Available</MenuItem>
								</Select>
							</div>
							<div>
								<InputLabel id="form-filter--plasma">Plasma</InputLabel>
								<Select
									labelId="form-filter--plasma"
									value={undefined}
									// onChange={handleChange}
								>
									<MenuItem value={1}>Available</MenuItem>
									<MenuItem value={-1}>Not Available</MenuItem>
								</Select>
							</div>
						</div>
					</div>
					<div className={classes["filter-cta-container"]}>
						<Button variant="contained" color="primary">
							Search
						</Button>
						<Button variant="text">Clear Filters</Button>
					</div>
				</div>
			</div>
		);
	}

	renderTable() {}

	/**
	 * @override
	 */
	render() {
		const { classes } = this.props;
		return <div className={classes["find-saviours-container"]}>{this.renderFilters()}</div>;
	}
}

export default withStyles(styles)(FindSaviour);
