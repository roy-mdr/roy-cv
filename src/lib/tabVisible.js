export function isTabVisible(callbackVisible = () => { }, callbackHidden = () => { }) {
	var hidden = "hidden";

	// Standards:
	if (hidden in document) {
		document.addEventListener("visibilitychange", onchange);
	} else if ((hidden = "mozHidden") in document) {
		document.addEventListener("mozvisibilitychange", onchange);
	} else if ((hidden = "webkitHidden") in document) {
		document.addEventListener("webkitvisibilitychange", onchange);
	} else if ((hidden = "msHidden") in document) {
		document.addEventListener("msvisibilitychange", onchange);
	} else if ("onfocusin" in document) {
		// IE 9 and lower:
		// @ts-ignore
		document.onfocusin = document.onfocusout = onchange;
	} else {
		// All others:
		window.onpageshow =
			window.onpagehide =
			window.onfocus =
			window.onblur =
			onchange;
	}

	function onchange(evt) {
		var v = "visible",
			h = "hidden",
			evtMap = {
				focus: v,
				focusin: v,
				pageshow: v,
				blur: h,
				focusout: h,
				pagehide: h,
			};

		evt = evt || window.event;

		if (evt.type in evtMap) {
			// document.body.className = evtMap[evt.type];

			if (evtMap[evt.type] == "visible") callbackVisible();
			if (evtMap[evt.type] == "hidden") callbackHidden();
		} else {
			// document.body.className = this[hidden] ? "hidden" : "visible";

			if (this[hidden]) {
				callbackHidden();
			} else {
				callbackVisible();
			}
		}
	}

	// set the initial state (but only if browser supports the Page Visibility API)
	if (document[hidden] !== undefined)
		onchange({ type: document[hidden] ? "blur" : "focus" });
}