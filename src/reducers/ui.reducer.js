// @ts-check
export const RESET_CALLEE_FORM = "[UI]RESET_CALLEE_FORM";
export const SET_LOADING_BAR = "[UI]SET_LOADING_BAR";
export const LOADING_BAR_PROGRESS = "[UI]LOADING_BAR_PROGRESS";
export const UNSET_LOADING_BAR = "[UI]UNSET_LOADING_BAR";

export const toggleResetCalleeForm = payload => ({ type: RESET_CALLEE_FORM, payload: !!payload });

export const toggleLoadingBar = show => ({ type: show ? SET_LOADING_BAR : UNSET_LOADING_BAR });
export const setLoadingBarProgress = progress => ({
	type: LOADING_BAR_PROGRESS,
	payload: progress
});

const initialState = {};

export default function reducer(state = initialState, action) {
	switch (action.type) {

		default: {
			return state;
		}
	}
}
